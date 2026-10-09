import assert from 'node:assert/strict';
import {calculate,qualify,fields} from '../src/lib/vending-calculator.mjs';
const base=Object.fromEntries(fields.map(([k,,v])=>[k,v]));let count=0;
function near(actual,expected){assert.ok(Math.abs(actual-expected)<.000001,`${actual} != ${expected}`);count++}
near(calculate(base).revenue,990);near(calculate(base).contribution,275.8);near(calculate({...base,transactions:10}).contribution,67.9);near(calculate({...base,transactions:35}).contribution,587.65);
near(calculate(base).breakEven,140/.42);near(calculate(base).recovery,4500/275.8);
const zero=calculate({...base,transactions:0});near(zero.contribution,-140);assert.equal(zero.recovery,null);count++;
near(calculate({...base,commission:0}).contribution,374.8);near(calculate({...base,cardShare:0}).cardFees,0);near(calculate({...base,cardShare:80,feeRate:3,feeEach:.1,paymentFixed:10}).cardFees,68.96);
near(calculate({...base,hostFixed:100,commission:0}).host,100);
assert.equal(calculate({...base,product:90,commission:20}).breakEven,null);count++;
for(const v of ['',null,undefined,NaN,Infinity,-1,1e99]){assert.ok(calculate({...base,transactions:v}).errors.length);count++}
assert.equal(calculate({...base,service:10000}).recovery,null);count++;
for(const [score,text]of [[4,'Strong'],[3.5,'Check'],[3,'Weak'],[2,'Normally']]){assert.ok(qualify(Array(12).fill(score),'NO').message.includes(text));count++}
assert.ok(qualify([...Array(11).fill(5),'UNKNOWN'],'NO').message.includes('Incomplete'));count++;
assert.ok(qualify(Array(12).fill(5),'YES').message.includes('Pause'));count++;
assert.equal(calculate({...base,value:0}).breakEven,null);count++;
console.log(`${count} independent arithmetic, validation and qualification assertions passed.`);
