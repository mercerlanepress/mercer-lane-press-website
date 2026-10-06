// Calendar arithmetic uses UTC day numbers, avoiding daylight-saving shifts.
export function dayNumber(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
  const [year, month, day] = value.split('-').map(Number);
  if (year < 1900 || year > 9999) return null;
  const date = new Date(Date.UTC(year, month - 1, day));
  if (date.getUTCFullYear() !== year || date.getUTCMonth() !== month - 1 || date.getUTCDate() !== day) return null;
  return date.getTime() / 86400000;
}
export function localToday(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}
export function displayDate(value) {
  const day = dayNumber(value);
  return day === null ? 'No date yet' : new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }).format(new Date(day * 86400000));
}
export function buildPlan(start, rows) {
  const first = dayNumber(start);
  if (first === null) throw new Error('Choose a valid reset date.');
  if (first > dayNumber('9999-12-18')) throw new Error('Choose a reset date before 19 December 9999.');
  const items = rows.map((row, index) => {
    if (!(row.item.trim() || row.action.trim() || row.owner.trim() || row.date)) return null;
    const item = row.item.trim(), action = row.action.trim(), owner = row.owner.trim();
    if (!item || !action) throw new Error(`Item ${index + 1}: add an item and its next action, or remove the unused row.`);
    if (row.date && dayNumber(row.date) === null) throw new Error(`Item ${index + 1}: choose a valid date.`);
    return { item, action, owner: owner || 'Choose an owner', date: row.date, kind: ['Task', 'Preparation', 'Deadline', 'Follow-up'].includes(row.kind) ? row.kind : 'Task' };
  }).filter(Boolean);
  if (!items.length) throw new Error('Add at least one item and its next action to build your plan.');
  const groups = { past: [], fortnight: [], later: [], undated: [] };
  for (const item of items) {
    const day = dayNumber(item.date);
    groups[day === null ? 'undated' : day < first ? 'past' : day <= first + 13 ? 'fortnight' : 'later'].push(item);
  }
  for (const group of Object.values(groups)) group.sort((a, b) => (dayNumber(a.date) ?? Infinity) - (dayNumber(b.date) ?? Infinity));
  return { start, end: new Date((first + 13) * 86400000).toISOString().slice(0, 10), groups, count: items.length, unassigned: items.filter(item => item.owner === 'Choose an owner').length };
}
export const groupNames = { past: 'Past dates to review', fortnight: 'Your next two weeks', undated: 'Choose a date or review point', later: 'Keep on the horizon' };
export function planText(plan) {
  const lines = ['MY FAMILY ADMIN RESET', `${displayDate(plan.start)} to ${displayDate(plan.end)}`, ''];
  for (const [key, label] of Object.entries(groupNames)) {
    if (!plan.groups[key].length) continue;
    lines.push(label.toUpperCase());
    for (const item of plan.groups[key]) lines.push(`- ${item.item}`, `  Next action: ${item.action}`, `  Owner: ${item.owner} | ${item.kind}: ${displayDate(item.date)}`);
    lines.push('');
  }
  lines.push('Finish your reset: review replies you are waiting for; confirm handoffs; put time-sensitive work in your usual calendar.', 'Mercer Lane Press | Free Weekly Family Admin Reset Planner');
  return lines.join('\n');
}

export function initResetPlanner() {
  const root = document.getElementById('reset-planner');
  if (!root) return;
  const start = root.querySelector('#reset-date');
  const rows = root.querySelector('#reset-items');
  const template = document.getElementById('reset-row-template');
  const output = document.getElementById('reset-result');
  const error = root.querySelector('#reset-error');
  const status = document.getElementById('reset-status');
  const addButton = root.querySelector('#add-reset-item');
  const copyButton = document.getElementById('copy-reset');
  const printButton = document.getElementById('print-reset');
  let plan = null, nextId = 0;
  const event = name => {
    try { if (localStorage.getItem('mlp-analytics-consent') === 'granted' && typeof window.gtag === 'function') window.gtag('event', name); } catch { /* Optional analytics never blocks the planner. */ }
  };
  const invalidate = () => { plan = null; output.hidden = true; copyButton.disabled = printButton.disabled = true; status.textContent = ''; error.hidden = true; };
  const relabel = () => {
    [...rows.children].forEach((row, index) => {
      row.querySelector('legend').textContent = `Item ${index + 1}`;
      row.querySelector('[data-remove]').setAttribute('aria-label', `Remove item ${index + 1}`);
    });
    addButton.disabled = rows.children.length >= 12;
    document.getElementById('row-count').textContent = `${rows.children.length} of 12 items`;
  };
  const addRow = (values = {}) => {
    if (rows.children.length >= 12) return;
    const row = template.content.firstElementChild.cloneNode(true);
    const id = ++nextId;
    row.querySelectorAll('[data-field]').forEach(input => {
      input.id = `reset-${input.dataset.field}-${id}`;
      row.querySelector(`[data-label="${input.dataset.field}"]`).htmlFor = input.id;
      if (values[input.dataset.field]) input.value = values[input.dataset.field];
    });
    row.querySelector('[data-remove]').addEventListener('click', () => {
      row.remove(); invalidate(); relabel();
      if (!rows.children.length) addRow();
      addButton.focus();
    });
    rows.append(row); relabel();
    return row;
  };
  start.value = localToday();
  for (let i = 0; i < 3; i++) addRow();
  root.addEventListener('input', invalidate);
  root.addEventListener('change', invalidate);
  addButton.addEventListener('click', () => { invalidate(); const row = addRow(); row?.querySelector('input').focus(); });
  root.querySelector('#load-reset-example').addEventListener('click', () => {
    if ([...rows.querySelectorAll('input')].some(input => input.value.trim())) {
      document.getElementById('example-note').hidden = false;
      return;
    }
    rows.replaceChildren(); start.value = localToday();
    const today = dayNumber(start.value);
    const dateIn = days => new Date((today + days) * 86400000).toISOString().slice(0, 10);
    addRow({ item: 'School trip form', action: 'Read the form and return permission', owner: 'Alex', date: dateIn(3), kind: 'Deadline' });
    addRow({ item: 'Repair quote', action: 'Chase the provider for a reply', owner: 'Sam', date: dateIn(1), kind: 'Follow-up' });
    addRow({ item: 'Loose household paperwork', action: 'Choose a place for the active papers', owner: 'Alex', kind: 'Task' });
    invalidate(); event('family_reset_example_used');
  });
  root.querySelector('#clear-reset').addEventListener('click', () => {
    rows.replaceChildren(); start.value = localToday();
    for (let i = 0; i < 3; i++) addRow();
    invalidate(); document.getElementById('example-note').hidden = true;
    status.textContent = 'Entries cleared.'; start.focus();
  });
  root.querySelector('#build-reset').addEventListener('click', () => {
    try {
      const values = [...rows.children].map(row => Object.fromEntries([...row.querySelectorAll('[data-field]')].map(input => [input.dataset.field, input.value])));
      plan = buildPlan(start.value, values);
      document.getElementById('reset-range').textContent = `${displayDate(plan.start)} to ${displayDate(plan.end)}`;
      document.getElementById('reset-summary').textContent = `${plan.count} item${plan.count === 1 ? '' : 's'} captured${plan.unassigned ? ` · ${plan.unassigned} still need an owner` : ''}.`;
      const groups = document.getElementById('reset-groups'); groups.replaceChildren();
      for (const [key, label] of Object.entries(groupNames)) {
        if (!plan.groups[key].length) continue;
        const section = document.createElement('section');
        const heading = document.createElement('h3'); heading.textContent = label; section.append(heading);
        const list = document.createElement('ul');
        for (const item of plan.groups[key]) {
          const li = document.createElement('li');
          const title = document.createElement('strong'); title.textContent = item.item;
          const action = document.createElement('p'); action.textContent = item.action;
          const detail = document.createElement('p'); detail.className = 'plan-detail'; detail.textContent = `${item.owner} · ${item.kind}: ${displayDate(item.date)}`;
          li.append(title, action, detail); list.append(li);
        }
        section.append(list); groups.append(section);
      }
      output.hidden = false; error.hidden = true; copyButton.disabled = printButton.disabled = false;
      status.textContent = 'Your plan is ready. Copy or print it before closing this page.';
      output.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
      document.getElementById('reset-result-title').focus({ preventScroll: true });
      event('family_reset_plan_built');
    } catch (exception) {
      invalidate(); error.textContent = exception.message; error.hidden = false; error.focus();
    }
  });
  copyButton.addEventListener('click', async () => {
    if (!plan) return;
    const copiedPlan = plan;
    try { await navigator.clipboard.writeText(planText(copiedPlan)); if (plan === copiedPlan) status.textContent = 'Plan copied.'; event('family_reset_plan_copied'); }
    catch { if (plan === copiedPlan) status.textContent = 'Copy is unavailable in this browser. Select the plan text, or use Print / save as PDF.'; }
  });
  printButton.addEventListener('click', () => { if (plan) { event('family_reset_print_opened'); window.print(); } });
  document.querySelectorAll('[data-reset-offer]').forEach(link => link.addEventListener('click', () => event(link.dataset.resetOffer === 'book' ? 'family_reset_book_clicked' : 'family_reset_bundle_clicked')));
}
