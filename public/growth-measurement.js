// Consent-gated funnel counts. Never read form fields, link text or arbitrary URL parameters.
(() => {
  const routes = {
    '/tools/contractor-markup-margin-calculator/': ['construction', 'tool', 'markup_margin'],
    '/tools/construction-job-profit-calculator/': ['construction', 'tool', 'job_profit'],
    '/tools/fleet-maintenance-due-calculator/': ['fleet', 'tool', 'fleet_due'],
    '/tools/heat-pump-running-cost-calculator/': ['heat_pump', 'tool', 'heat_cost'],
    '/tools/pto-accrual-calculator/': ['hr', 'tool', 'pto_accrual'],
    '/free-tools/performance-review-template-excel/': ['hr', 'tool', 'review_template'],
    '/books/the-new-heat-pump-owners-operating-manual/': ['heat_pump', 'book', 'heat_pump_manual'],
    '/tools/construction-estimating-system-pro/': ['construction', 'product', 'toolkit_pro'],
    '/tools/small-fleet-maintenance-system/': ['fleet', 'product', 'fleet_system'],
    '/tools/landscape-estimating-job-costing-system/': ['landscape', 'product', 'landscape_system'],
    '/tools/hr-manager-toolkit/': ['hr', 'product', 'hr_ai_toolkit'],
    '/tools/family-admin-operating-system/': ['family', 'product', 'family_admin'],
    '/construction-estimating/construction-markup-vs-margin/': ['construction', 'guide', 'markup_guide'],
    '/small-fleet-maintenance/fleet-maintenance-schedule-spreadsheet/': ['fleet', 'guide', 'fleet_schedule_guide']
  };
  const current = routes[location.pathname];
  if (!current) return;
  const consent = () => { try { return localStorage.getItem('mlp-analytics-consent') === 'granted'; } catch { return false; } };
  const sources = ['pinterest', 'tiktok', 'youtube'];
  const campaigns = ['construction_202610', 'fleet_202610'];
  const contents = ['a1_markup', 'a2_profit_fade', 'a3_handoff', 'b1_due_point', 'b2_booking', 'b3_weekly_review'];
  let campaign = {};
  const attribution = () => {
    try {
      const query = new URLSearchParams(location.search);
      const source = query.get('utm_source'), name = query.get('utm_campaign'), content = query.get('utm_content');
      if (sources.includes(source) && campaigns.includes(name) && contents.includes(content) &&
          ((name === campaigns[0] && content.startsWith('a')) || (name === campaigns[1] && content.startsWith('b')))) {
        campaign = {campaign_source: source, campaign_name: name, campaign_content: content};
        sessionStorage.setItem('mlp-growth-campaign', JSON.stringify(campaign));
        return true;
      }
      const saved = JSON.parse(sessionStorage.getItem('mlp-growth-campaign') || '{}');
      if (sources.includes(saved.campaign_source) && campaigns.includes(saved.campaign_name) && contents.includes(saved.campaign_content)) campaign = saved;
    } catch { /* Storage is optional. */ }
    return false;
  };
  const send = (name, extra = {}) => {
    if (!consent() || typeof window.gtag !== 'function') return false;
    window.gtag('event', name, {campaign_group: current[0], page_kind: current[1], page_id: current[2], ...campaign, ...extra});
    return true;
  };
  let entered = false;
  const enter = () => {
    if (entered || !consent()) return;
    const isCampaign = attribution();
    entered = send(current[1] === 'tool' ? 'tool_entry' : 'funnel_page_entry');
    if (isCampaign) send('campaign_entry');
  };
  enter();
  window.addEventListener('mlp:analytics-consent', event => {
    if (event.detail === 'granted') enter();
    else {
      campaign = {};
      try { sessionStorage.removeItem('mlp-growth-campaign'); } catch { /* Optional storage. */ }
    }
  });
  // A valid explicit calculation, never the prefilled example or each keystroke.
  let calculated = false;
  document.addEventListener('submit', event => {
    if (current[2] !== 'heat_cost' || event.target?.id !== 'heat-cost-form' || calculated) return;
    if (document.getElementById('heat-results')?.hidden === false) calculated = send('heat_pump_calculator_used');
  });
  document.addEventListener('click', event => {
    const link = event.target.closest?.('a[href]');
    if (!link || !consent()) return;
    let url;
    try { url = new URL(link.href, location.href); } catch { return; }
    const destination = url.origin === location.origin ? routes[url.pathname] : null;
    if (destination?.[1] === 'product' && current[1] === 'tool') send('tool_to_product', {destination_id: destination[2]});
    if (destination?.[1] === 'book' && current[1] === 'tool') send('tool_to_book', {destination_id: destination[2]});
    if (destination?.[1] === 'tool' && current[1] === 'guide') send('guide_to_tool', {destination_id: destination[2]});
    const isEtsy = ['etsy.com', 'www.etsy.com'].includes(url.hostname) && /^\/listing\/\d+/.test(url.pathname);
    if (current[1] === 'product' && (isEtsy || url.hostname === 'buy.stripe.com')) send('product_checkout_click', {checkout_provider: isEtsy ? 'etsy' : 'stripe'});
    if (current[0] === 'heat_pump' && ['www.amazon.co.uk', 'amazon.co.uk'].includes(url.hostname) && url.pathname === '/dp/B0HF51WQ1F') send('book_retailer_click', {checkout_provider: 'amazon_uk'});
  });
})();
