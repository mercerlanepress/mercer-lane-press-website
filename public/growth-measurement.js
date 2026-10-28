// Consent-gated funnel counts. Never read form fields, link text or arbitrary URL parameters.
(() => {
  const routes = {
    '/tools/contractor-markup-margin-calculator/': ['construction', 'tool', 'markup_margin'],
    '/tools/construction-job-profit-calculator/': ['construction', 'tool', 'job_profit'],
    '/tools/fleet-maintenance-due-calculator/': ['fleet', 'tool', 'fleet_due'],
    '/tools/heat-pump-running-cost-calculator/': ['heat_pump', 'tool', 'heat_cost'],
    '/tools/pto-accrual-calculator/': ['hr', 'tool', 'pto_accrual'],
    '/tools/family-admin-reset-planner/': ['family', 'tool', 'family_reset'],
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
  // Share one classifier between entry and destination events. The fallback
  // covers every book page and published guide without duplicating a large
  // route list. Exclude non-guide directories through an explicit allowlist.
  const guideRoots = new Set([
    '5g-home-internet', 'ai-scam-defence', 'aquarium-troubleshooting',
    'beginner-telescope-observing', 'bookkeeper-ai', 'construction-estimating',
    'cooperative-care', 'deep-sky-astrophotography', 'dog-enrichment',
    'epa-608-universal-exam', 'executive-assistant-ai', 'family-admin',
    'first-year-homeowner', 'genealogy-brick-walls', 'ham-radio-technician-exam',
    'heat-pump-owners', 'home-assistant-matter-thread', 'home-inspection-reporting',
    'hotel-housekeeping-supervision', 'hr-ai', 'landscape-contractor-estimating',
    'local-ai', 'local-business-ai', 'maintenance-planning',
    'manufacturing-supervision', 'over-aroused-dog', 'pickleball-doubles',
    'pool-troubleshooting', 'power-automate', 'property-manager-ai',
    'reactive-dog-walking', 'reliable-recall', 'rescue-dog-first-90-days',
    'small-fleet-maintenance', 'solar-panel-owners', 'underfloor-heating-owners',
    'vending-machine-route', 'youth-soccer-coaching'
  ]);
  const classifyRoute = path => {
    if (routes[path]) return routes[path];
    const parts = path.split('/').filter(Boolean);
    if (parts.length !== 2) return null;
    if (parts[0] === 'books') return ['books', 'book', parts[1]];
    if (guideRoots.has(parts[0])) return [parts[0], 'guide', parts[1]];
    return null;
  };
  const current = classifyRoute(location.pathname);
  if (!current) return;
  const consent = () => { try { return localStorage.getItem('mlp-analytics-consent') === 'granted'; } catch { return false; } };
  const campaignRules = {
    construction_202610: {
      sources: ['pinterest', 'tiktok', 'youtube'],
      contents: ['a1_markup', 'a2_profit_fade', 'a3_handoff']
    },
    fleet_202610: {
      sources: ['pinterest', 'tiktok', 'youtube'],
      contents: ['b1_due_point', 'b2_booking', 'b3_weekly_review']
    },
    construction_pilot_2026_10: {
      sources: ['pinterest', 'youtube', 'linkedin'],
      contents: [
        'pin01', 'pin02', 'pin03', 'pin04', 'pin05', 'pin06',
        'video01_markup', 'video01_product', 'video02_profit',
        'video02_product', 'video03_remaining', 'video03_product',
        'post01_markup', 'post02_remaining'
      ]
    }
  };
  const allowedCampaign = (source, name, content) => {
    const rule = Object.hasOwn(campaignRules, name) ? campaignRules[name] : null;
    return !!rule && rule.sources.includes(source) && rule.contents.includes(content);
  };
  let campaign = {};
  const attribution = () => {
    try {
      const query = new URLSearchParams(location.search);
      const source = query.get('utm_source'), name = query.get('utm_campaign'), content = query.get('utm_content');
      if (allowedCampaign(source, name, content)) {
        campaign = {campaign_source: source, campaign_name: name, campaign_content: content};
        sessionStorage.setItem('mlp-growth-campaign', JSON.stringify(campaign));
        return true;
      }
      const saved = JSON.parse(sessionStorage.getItem('mlp-growth-campaign') || '{}');
      if (allowedCampaign(saved.campaign_source, saved.campaign_name, saved.campaign_content)) campaign = saved;
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
    const destination = url.origin === location.origin ? classifyRoute(url.pathname) : null;
    if (destination?.[1] === 'product' && current[1] === 'tool') send('tool_to_product', {destination_id: destination[2]});
    if (destination?.[1] === 'book' && current[1] === 'tool') send('tool_to_book', {destination_id: destination[2]});
    if (destination?.[1] === 'tool' && current[1] === 'guide') send('guide_to_tool', {destination_id: destination[2]});
    if (destination?.[1] === 'product' && current[1] === 'guide') send('guide_to_product', {destination_id: destination[2]});
    if (destination?.[1] === 'book' && current[1] === 'guide') send('guide_to_book', {destination_id: destination[2]});
    const isEtsy = ['etsy.com', 'www.etsy.com'].includes(url.hostname) && /^\/listing\/\d+/.test(url.pathname);
    if (current[1] === 'product' && (isEtsy || url.hostname === 'buy.stripe.com')) send('product_checkout_click', {checkout_provider: isEtsy ? 'etsy' : 'stripe'});
    // Record retailer intent, never claim that an Amazon sale happened.
    // Exact host allowlist avoids lookalike domains and other outbound links.
    const amazonUk = ['www.amazon.co.uk', 'amazon.co.uk'].includes(url.hostname);
    const amazonUs = ['www.amazon.com', 'amazon.com'].includes(url.hostname);
    if (current[1] === 'book' && (amazonUk || amazonUs) && /^\/dp\/[A-Z0-9]{10}\/?$/.test(url.pathname)) {
      send('book_retailer_click', {checkout_provider: amazonUk ? 'amazon_uk' : 'amazon_us'});
    }
  });
})();
