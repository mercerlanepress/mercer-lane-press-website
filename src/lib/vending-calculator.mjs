export const factors = ['Repeat population','Convenience advantage','Purchase occasions','Dwell time','Competitive environment','Placement quality','Service access','Security and environment','Host alignment','Commercial terms','Route fit','Evidence quality'];
export const fields = [
 ['days','Operating days / month',22,0,31,'days'],['transactions','Transactions / day',20,0,10000,'transactions'],['value','Average transaction ($)',2.25,0,10000,'USD'],
 ['product','Product cost (%)',43,0,100,'%'],['commission','Host commission (%)',10,0,100,'%'],['hostFixed','Fixed host payment / month ($)',0,0,1000000,'USD'],
 ['cardShare','Card share of sales and transactions (%)',100,0,100,'%'],['feeRate','Card fee (%)',5,0,100,'%'],['feeEach','Fee per card transaction ($)',0,0,10000,'USD'],['paymentFixed','Fixed payment charges / month ($)',0,0,1000000,'USD'],
 ['service','Direct service labour / month ($)',100,0,1000000,'USD'],['travel','Travel / month ($)',0,0,1000000,'USD'],['waste','Waste / shrink / month ($)',20,0,1000000,'USD'],['maintenance','Maintenance / month ($)',20,0,1000000,'USD'],['other','Other direct operating costs / month ($)',0,0,1000000,'USD'],['investment','Installed equipment investment ($)',4500,0,10000000,'USD']
];
export function calculate(input){
 const errors=[];const x={};
 for(const [key,label,,min,max] of fields){const v=input[key];if(v===''||v===null||v===undefined||typeof v==='boolean'){errors.push(`${label}: enter a value, including zero when none applies.`);continue}x[key]=Number(v);if(!Number.isFinite(x[key])||x[key]<min||x[key]>max)errors.push(`${label}: use a number from ${min} to ${max}.`)}
 if(errors.length)return {errors};
 const revenue=x.days*x.transactions*x.value,product=revenue*x.product/100,cardFees=revenue*x.cardShare/100*x.feeRate/100+x.days*x.transactions*x.cardShare/100*x.feeEach+x.paymentFixed,host=revenue*x.commission/100+x.hostFixed;
 const fixed=x.paymentFixed+x.hostFixed+x.service+x.travel+x.waste+x.maintenance+x.other;
 const variableRate=x.product/100+x.commission/100+x.cardShare/100*x.feeRate/100+(x.value>0?x.cardShare/100*x.feeEach/x.value:0);
 const contribution=revenue-product-cardFees-host-x.service-x.travel-x.waste-x.maintenance-x.other;
 return {errors:[],revenue,product,cardFees,host,service:x.service,travel:x.travel,waste:x.waste,maintenance:x.maintenance,other:x.other,contribution,margin:revenue>0?contribution/revenue:null,breakEven:x.value>0&&variableRate<1?fixed/(1-variableRate):null,recovery:contribution>0&&x.investment>0?x.investment/contribution:null,variableRate};
}
export function qualify(scores,hardStop='UNKNOWN'){
 const known=scores.filter(v=>v!==''&&v!=='UNKNOWN'&&v!==null&&v!==undefined);const invalid=known.some(v=>!Number.isInteger(Number(v))||Number(v)<0||Number(v)>5);
 if(invalid||scores.length!==12)return {total:null,unknown:12-known.length,message:'Check the twelve scores: use 0–5 or UNKNOWN.'};
 const total=known.reduce((s,v)=>s+Number(v),0),unknown=12-known.length;
 let message=unknown?'Incomplete assessment: collect the missing evidence.':total>=48?'Strong candidate for deeper analysis.':total>=38?'Promising: investigate further.':total>=28?'Weak or uncertain. Continue only if new evidence could materially improve the case.':'Normally reject unless substantial new evidence emerges.';
 if(hardStop!=='NO')message='Pause: resolve unsafe installation, placement authority, compliance, security or unacceptable terms before proceeding. '+message;
 return {total,unknown,message};
}
