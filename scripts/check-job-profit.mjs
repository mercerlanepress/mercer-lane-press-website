import assert from 'node:assert/strict';
import { amount, calculate, compare } from '../public/tools-assets/job-profit/logic.js';

const actual = {
  original: '40000', changes: '1500',
  materials: '10000', labour: '12000', subcontractors: '5000',
  equipment: '1000', other: '2000', overhead: '3000'
};
const estimated = {...actual, changes: '0'};
const result = calculate(actual);
assert.equal(result.revenue, 41500);
assert.equal(result.direct, 30000);
assert.equal(result.overhead, 3000);
assert.equal(result.total, 33000);
assert.equal(result.gross, 11500);
assert.equal(result.profit, 8500);
assert.ok(Math.abs(result.grossMargin - 11500/41500) < 1e-12);
assert.ok(Math.abs(result.margin - 8500/41500) < 1e-12);
assert.ok(Math.abs(result.markup - 8500/33000) < 1e-12);
assert.equal(result.shortfall, 0);
assert.equal(result.cushion, 8500);
const variance = compare(estimated, actual);
assert.equal(variance.profitVariance, 1500);
assert.deepEqual(variance.costVariances, [0,0,0,0,0,0]);
const noRevenue = calculate({});
assert.equal(noRevenue.revenue, 0);
assert.equal(noRevenue.grossMargin, null);
assert.equal(noRevenue.margin, null);
assert.equal(noRevenue.markup, null);
const loss = calculate({original:'100',materials:'140'});
assert.equal(loss.profit, -40);
assert.equal(loss.shortfall, 40);
assert.equal(loss.cushion, 0);
for(const bad of ['abc','-1','1000000000000.01','Infinity']) assert.throws(()=>amount(bad),RangeError);
assert.equal(amount(''),0);
console.log('Construction job profit checks passed: worked example, margins, cost variance, zero denominators, losses and invalid values.');
