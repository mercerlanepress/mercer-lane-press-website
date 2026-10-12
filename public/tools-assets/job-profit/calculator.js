import { calculate, compare, categories, targetRevenue } from './logic.js';

const $ = id => document.getElementById(id);
const keys = ['original', 'changes', ...categories.map(k => k.toLowerCase())];
const usd = n => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(n);
const pct = n => n === null ? '—' : new Intl.NumberFormat('en-US', { style: 'percent', maximumFractionDigits: 2 }).format(n);

function read(prefix) {
  const d = {};
  for (const k of keys) {
    const el = $(prefix + '-' + k);
    if (el.validity.badInput || (!el.validity.valid && el.value !== '')) {
      el.setAttribute('aria-invalid', 'true');
      el.focus();
      throw new Error('Check ' + el.previousSibling?.textContent?.trim() + ': use a number from 0 to 1,000,000,000,000.');
    }
    el.removeAttribute('aria-invalid');
    d[k] = el.value;
  }
  return d;
}

function readTargetMargin() {
  const el = $('target-margin');
  const value = Number(el.value);
  if (el.value.trim() === '' || el.validity.badInput || !el.validity.valid || !Number.isFinite(value) || value < 0 || value >= 100) {
    el.setAttribute('aria-invalid', 'true');
    el.focus();
    throw new Error('Enter a target margin from 0% to less than 100%.');
  }
  el.removeAttribute('aria-invalid');
  return value;
}

function render() {
  try {
    const a = read('a');
    const r = calculate(a);
    const targetMargin = readTargetMargin();
    const requiredRevenue = targetRevenue(r.total, targetMargin);
    const targetGap = requiredRevenue - r.revenue;
    const rows = [
      ['Revised job revenue', usd(r.revenue)],
      ['Direct job cost', usd(r.direct)],
      ['Gross profit', usd(r.gross)],
      ['Gross margin', pct(r.grossMargin)],
      ['Company overhead allocation', usd(r.overhead)],
      ['Total cost including overhead', usd(r.total)],
      ['Contribution after overhead', usd(r.profit)],
      ['Margin after overhead', pct(r.margin)],
      ['Markup on total cost', pct(r.markup)],
      ['Cost-to-revenue ratio (incl. overhead)', pct(r.costRatio)],
      ['Break-even revenue (incl. overhead)', usd(r.breakEven)],
      [`Revenue for ${targetMargin.toFixed(2).replace(/\.00$/, '')}% target margin`, usd(requiredRevenue)],
      ['Cost cushion before loss', usd(r.cushion)]
    ];
    if (targetGap > 0.005) rows.push(['Additional revenue needed for target margin', usd(targetGap)]);
    if (targetGap < -0.005) rows.push(['Revenue above target-margin price', usd(-targetGap)]);
    if (r.shortfall > 0) rows.push(['Costs above revenue', usd(r.shortfall)]);

    $('results').innerHTML = '<dl>' + rows.map(([label, value]) => '<dt>' + label + '</dt><dd>' + value + '</dd>').join('') + '</dl>';
    $('results').hidden = false;
    $('state').textContent = r.revenue === 0
      ? 'No revenue entered. Percentage margins are undefined.'
      : r.profit < 0
        ? 'Costs exceed revenue. Review scope, costs and approved changes.'
        : r.margin !== null && r.margin < targetMargin / 100
          ? `The calculated margin after overhead is below the ${targetMargin.toFixed(2).replace(/\.00$/, '')}% target you entered.`
          : 'Result based on your entries. Confirm all costs needed to finish are included.';
    $('error').hidden = true;
    $('comparison').hidden = !$('compare-mode').checked;

    if ($('compare-mode').checked) {
      const c = compare(read('e'), a);
      $('compare-results').innerHTML =
        '<table><caption>Profit variance: positive is favourable. Cost variance: positive is unfavourable.</caption><thead><tr><th scope="col">Measure</th><th scope="col">Estimated</th><th scope="col">Actual / forecast</th><th scope="col">Variance</th></tr></thead><tbody>' +
        [
          ['Revenue', usd(c.estimated.revenue), usd(c.actual.revenue), usd(c.actual.revenue - c.estimated.revenue)],
          ['Gross profit', usd(c.estimated.gross), usd(c.actual.gross), usd(c.actual.gross - c.estimated.gross)],
          ['Contribution after overhead', usd(c.estimated.profit), usd(c.actual.profit), usd(c.profitVariance)],
          ['Gross margin', pct(c.estimated.grossMargin), pct(c.actual.grossMargin), '—'],
          ['Margin after overhead', pct(c.estimated.margin), pct(c.actual.margin), '—'],
          ...categories.map((k, i) => [k + ' cost', usd(c.estimated.costs[i]), usd(c.actual.costs[i]), usd(c.costVariances[i])])
        ].map(row => '<tr><th scope="row">' + row[0] + '</th>' + row.slice(1).map(v => '<td>' + v + '</td>').join('') + '</tr>').join('') +
        '</tbody></table>';
    }
  } catch (e) {
    $('error').textContent = e.message;
    $('error').hidden = false;
    $('results').hidden = true;
    $('comparison').hidden = true;
    $('state').textContent = 'Correct the highlighted input, then calculate again.';
  }
}

$('job-form').addEventListener('submit', e => {
  e.preventDefault();
  render();
});

$('compare-mode').addEventListener('change', () => {
  $('estimated-inputs').hidden = !$('compare-mode').checked;
  $('comparison').hidden = true;
});

$('job-form').addEventListener('input', e => {
  if (e.target.type === 'number') {
    $('results').hidden = true;
    $('comparison').hidden = true;
    $('state').textContent = 'Inputs changed. Calculate again to update results.';
  }
});

$('example').addEventListener('click', () => {
  const a = [40000, 1500, 10000, 12000, 5000, 1000, 2000, 3000];
  const e = [40000, 0, 10000, 12000, 5000, 1000, 2000, 3000];
  keys.forEach((k, i) => {
    $('a-' + k).value = a[i];
    $('e-' + k).value = e[i];
  });
  $('target-margin').value = '25';
  render();
});

$('clear-inputs').addEventListener('click', () => {
  $('job-form').reset();
  $('compare-mode').checked = false;
  $('estimated-inputs').hidden = true;
  $('comparison').hidden = true;
  $('results').hidden = true;
  $('error').hidden = true;
  document.querySelectorAll('[aria-invalid]').forEach(e => e.removeAttribute('aria-invalid'));
  $('state').textContent = 'Enter your job values, then calculate.';
  $('a-original').focus();
});
