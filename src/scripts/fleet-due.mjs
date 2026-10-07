// Administrative due calculation. Source: Small Fleet Maintenance Operating Manual, chapter 4.
const DAY=86400000;
export function parseDate(value){
 if(!/^\d{4}-\d{2}-\d{2}$/.test(value||''))return null;
 const [y,m,d]=value.split('-').map(Number);if(y<1900||y>9999)return null;
 const date=new Date(Date.UTC(y,m-1,d));
 return date.getUTCFullYear()===y&&date.getUTCMonth()===m-1&&date.getUTCDate()===d?date:null;
}
export function addMonths(date,months){
 const y=date.getUTCFullYear(),m=date.getUTCMonth();
 const first=new Date(Date.UTC(y,m+months,1));
 const last=new Date(Date.UTC(first.getUTCFullYear(),first.getUTCMonth()+1,0)).getUTCDate();
 return new Date(Date.UTC(first.getUTCFullYear(),first.getUTCMonth(),Math.min(date.getUTCDate(),last)));
}
const num=v=>v===null||v===undefined||String(v).trim()===''?null:Number(v);
const valid=n=>Number.isFinite(n)&&n>=0;
export function calculateDue(input,today){
 const now=parseDate(today);if(!now)throw new Error('Invalid calculation date');
 const mode=input.trigger;
 const miles=mode==='miles'||mode==='dual',time=mode==='date'||mode==='dual';
 const problems=[];const err=(condition,text)=>{if(condition)problems.push(text);};
 err(!['miles','date','dual'].includes(mode),'Choose a trigger type.');
 err(input.sourceVerified!==true,'Confirm the interval is from an appropriate verified source for this vehicle.');
 let mileageStatus=miles?'DATA ISSUE':'N/A',dateStatus=time?'DATA ISSUE':'N/A';
 let nextMileage=null,nextDate=null,milesRemaining=null,daysRemaining=null;
 if(miles){
  const interval=num(input.intervalMiles),baseline=num(input.lastMileage),current=num(input.currentMileage),warning=num(input.warningMiles),fresh=num(input.freshnessDays),reading=parseDate(input.readingDate);
  err(!valid(interval)||interval===0,'Enter a positive interval in miles.');
  err(!valid(baseline),'Enter the actual last completion mileage.');
  err(!valid(current),'Enter a valid current mileage.');
  err(!valid(warning),'Enter a non-negative due-soon warning in miles.');
  err(!reading,'Enter the current mileage reading date.');
  err(reading&&reading>now,'The mileage reading date cannot be in the future.');
  err(fresh!==null&&(!valid(fresh)||!Number.isInteger(fresh)),'Freshness must be blank or a non-negative whole number of days.');
  err(reading&&valid(fresh)&&(now-reading)/DAY>fresh,'The mileage reading is stale under your chosen threshold. Obtain a trusted current reading.');
  err(valid(baseline)&&valid(current)&&current<baseline,'Current mileage is below the completion baseline. Review the reading or documented odometer correction.');
  if(valid(interval)&&interval>0&&valid(baseline))nextMileage=baseline+interval;
  if(nextMileage!==null&&valid(current))milesRemaining=nextMileage-current;
  if(nextMileage!==null&&valid(current)&&current>=baseline&&valid(warning)&&reading&&reading<=now&&(fresh===null||(valid(fresh)&&Number.isInteger(fresh)&&(now-reading)/DAY<=fresh)))mileageStatus=milesRemaining<=0?'OVERDUE':milesRemaining<=warning?'DUE SOON':'CURRENT';
 }
 if(time){
  const interval=num(input.intervalMonths),baseline=parseDate(input.lastDate),warning=num(input.warningDays);
  err(!valid(interval)||interval===0||!Number.isInteger(interval),'Enter a positive whole number of calendar months.');
  err(!baseline,'Enter the actual last completion date.');
  err(baseline&&baseline>now,'The last completion date cannot be in the future.');
  err(!valid(warning)||!Number.isInteger(warning),'Enter a non-negative whole number of due-soon days.');
  if(baseline&&valid(interval)&&interval>0&&Number.isInteger(interval)){
   const due=addMonths(baseline,interval);if(due.getUTCFullYear()<=9999){nextDate=due.toISOString().slice(0,10);daysRemaining=Math.round((due-now)/DAY);}else err(true,'The calculated date is outside the supported range.');
  }
  if(nextDate&&baseline<=now&&valid(warning)&&Number.isInteger(warning))dateStatus=daysRemaining<=0?'OVERDUE':daysRemaining<=warning?'DUE SOON':'CURRENT';
 }
 const order=['DATA ISSUE','OVERDUE','DUE SOON','CURRENT'];
 const status=problems.length?'DATA ISSUE':order.find(s=>dateStatus===s||mileageStatus===s)||'DATA ISSUE';
 const controlling=problems.length?'Resolve the data issues first':dateStatus===mileageStatus?'Both triggers have the same urgency':time&&dateStatus===status?'Date':miles&&mileageStatus===status?'Mileage':'No applicable trigger';
 const explanation=status==='DATA ISSUE'?'Required information is missing, invalid, unverified or stale. Resolve the listed issues before relying on the result.':status==='OVERDUE'?'At least one applicable verified trigger has reached or passed its due point. A booking does not change this status.':status==='DUE SOON'?'At least one trigger is inside your chosen administrative warning window. Plan the next action without extending the source requirement.':'The applicable triggers are outside your warning windows using the entered source and data. This is an administrative calculation, not an assessment of vehicle condition.';
 return {status,mileageStatus,dateStatus,nextMileage,nextDate,milesRemaining,daysRemaining,controlling,problems,explanation,asOf:today};
}
export function mountCalculator(doc=document){
 const form=doc.getElementById('fleet-calculator');if(!form)return;
 const result=doc.getElementById('fleet-result');let last=null,used=false;
 const get=()=>Object.fromEntries(new FormData(form));
 const today=()=>{const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;};
 const track=name=>{try{if(localStorage.getItem('mlp-analytics-consent')==='granted'&&typeof window.gtag==='function')window.gtag('event',name,{tool:'fleet_due'});}catch{/* No storage means no analytics. */}};
 function update(){
  const x=get(),m=x.trigger!=='date',t=x.trigger!=='miles';
  for(const e of form.querySelectorAll('[data-mileage] input'))e.disabled=!m;
  for(const e of form.querySelectorAll('[data-date] input'))e.disabled=!t;
  form.querySelector('[data-mileage]').hidden=!m;form.querySelector('[data-date]').hidden=!t;
  const values=get();values.sourceVerified=values.sourceVerified==='on';
  last=calculateDue(values,today());result.dataset.status=last.status;
  doc.getElementById('overall-status').textContent=last.status;
  doc.getElementById('explanation').textContent=last.explanation;
  doc.getElementById('controlling').textContent=last.controlling;
  doc.getElementById('asof').textContent=last.asOf;
  const fmt=v=>v===null?'Not calculated':typeof v==='number'?v.toLocaleString('en-US'):v;
  for(const [id,key]of [['due-date','nextDate'],['due-mileage','nextMileage'],['days-left','daysRemaining'],['miles-left','milesRemaining'],['date-status','dateStatus'],['mileage-status','mileageStatus']])doc.getElementById(id).textContent=fmt(last[key]);
  const issues=doc.getElementById('issues');issues.replaceChildren();for(const text of last.problems){const li=doc.createElement('li');li.textContent=text;issues.append(li);}
  doc.getElementById('copy-result').disabled=false;
 }
 form.addEventListener('input',()=>{update();if(last.status!=='DATA ISSUE'&&!used){track('fleet_calculator_used');used=true;}});
 form.addEventListener('change',update);form.addEventListener('submit',e=>e.preventDefault());
 form.addEventListener('reset',()=>{used=false;setTimeout(update,0);});
 doc.getElementById('print-result').addEventListener('click',()=>window.print());
 doc.getElementById('copy-result').addEventListener('click',async()=>{
  const x=get();const content=[x.unit||'Vehicle',x.item||'Maintenance item',`As of ${last.asOf}: ${last.status}`,`Next date: ${last.nextDate||'Not calculated'}; next mileage: ${last.nextMileage??'Not calculated'}`,`Days remaining: ${last.daysRemaining??'Not calculated'}; miles remaining: ${last.milesRemaining??'Not calculated'}`,`Date: ${last.dateStatus}; mileage: ${last.mileageStatus}`,last.controlling,last.explanation,...last.problems].join('\n');
  try{await navigator.clipboard.writeText(content);doc.getElementById('copy-message').textContent='Result copied.';}catch{doc.getElementById('copy-message').textContent='Copy unavailable in this browser. Use Print or select the result text.';}
 });
 for(const a of doc.querySelectorAll('[data-fleet-product],[data-fleet-book]'))a.addEventListener('click',()=>track(a.hasAttribute('data-fleet-product')?'fleet_product_cta_clicked':'fleet_book_cta_clicked'));
 update();
}
