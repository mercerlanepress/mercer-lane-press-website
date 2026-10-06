export interface SiteSeoEntry {
  seoTitle: string;
  metaDescription: string;
}

/**
 * Search-facing metadata for non-book landing pages.
 *
 * Targets are intentionally assigned by page intent:
 * - hubs own broad subject phrases;
 * - calculators/tools own transactional utility phrases;
 * - supporting articles keep their narrower problem-led titles unless evidence
 *   justifies a specific override.
 *
 * Research basis: live search-result language and externally observable keyword
 * demand reviewed 6 October 2026, then checked against Mercer Lane Press Search
 * Console performance through 3 October 2026. No search-volume number is stored
 * or claimed here where it could not be independently verified.
 */
export const siteSeoByPath: Record<string, SiteSeoEntry> = {
  '/books/': {
    seoTitle: 'Practical Problem-Solving Books | Mercer Lane Press',
    metaDescription: 'Browse practical Mercer Lane Press books for work, home, technology, pets, trades and hobbies, built around specific real-world problems.'
  },
  '/guides/': {
    seoTitle: 'Practical How-To Guides | Mercer Lane Press',
    metaDescription: 'Browse practical how-to guides for technology, work, home, dogs, trades and hobbies, organised around specific problems and tasks.'
  },
  '/tools/': {
    seoTitle: 'Free Calculators, Templates & Business Tools | Mercer Lane Press',
    metaDescription: 'Use free calculators, planners and templates for contractors, HR teams and household admin, plus related professional toolkits.'
  },
  '/dog-guides/': {
    seoTitle: 'Dog Training Guides: Recall, Reactivity & Enrichment',
    metaDescription: 'Practical dog training guides for recall, reactive dogs, enrichment, settling, rescue-dog routines and cooperative care.'
  },
  '/5g-home-internet/': {
    seoTitle: '5G Home Internet Troubleshooting: Speed, Signal & Dropouts',
    metaDescription: 'Troubleshoot 5G home internet that is slow, disconnecting or weak, with practical checks for signal, gateway placement and night-time slowdowns.'
  },
  '/local-business-ai/': {
    seoTitle: 'AI Search Visibility for Local Businesses | Mercer Lane Press',
    metaDescription: 'Improve how clearly a local business is understood by AI search and recommendation systems through consistent facts, useful service pages and measurement.'
  },
  '/ai-scam-defence/': {
    seoTitle: 'AI Scam Protection: Voice Cloning & Deepfake Scams',
    metaDescription: 'Practical family guidance for suspicious AI voice calls, urgent messages, deepfake scams, verification routines and what to do after sharing information.'
  },
  '/reactive-dog-walking/': {
    seoTitle: 'Reactive Dog Training: Walking, Triggers & Recovery',
    metaDescription: 'Reactive dog training guides for barking and lunging on walks, trigger distance, route planning, recovery and calmer real-world practice.'
  },
  '/dog-enrichment/': {
    seoTitle: 'Dog Enrichment Activities: Indoor Games & Mental Stimulation',
    metaDescription: 'Dog enrichment activities for mental stimulation at home, including sniffing, searching, thinking, play, indoor and no-food ideas.'
  },
  '/cooperative-care/': {
    seoTitle: 'Cooperative Care for Dogs: Handling, Grooming & Nail Trims',
    metaDescription: 'Train cooperative care for dogs with practical handling, grooming, nail-trim and vet-preparation exercises built around choice and gradual progress.'
  },
  '/rescue-dog-first-90-days/': {
    seoTitle: 'Rescue Dog First Days: Routine, Stress & the 3-3-3 Period',
    metaDescription: 'Practical rescue-dog guidance for the first 24 hours, first week, settling in, stress signs, resident-dog introductions and alone-time training.'
  },
  '/over-aroused-dog/': {
    seoTitle: 'Over-Aroused Dog: Settling, Focus & Recovery',
    metaDescription: 'Guides for dogs that struggle to settle, including arousal signs, recovery, calm routines, mat work and a four-week calmness plan.'
  },
  '/reliable-recall/': {
    seoTitle: 'Dog Recall Training: Long-Line & Real-World Recall',
    metaDescription: 'Dog recall training guides for long-line work, distractions, wildlife, sniffing, other dogs and off-leash readiness.'
  },
  '/family-admin/': {
    seoTitle: 'Family Admin System: Organise Household Tasks & Paperwork',
    metaDescription: 'Organise family admin with practical systems for household paperwork, calendars, deadlines, follow-ups, document storage and weekly resets.'
  },
  '/heat-pump-owners/': {
    seoTitle: 'Heat Pump Settings & Troubleshooting for Homeowners',
    metaDescription: 'Practical heat-pump guidance on settings, weather compensation, defrost cycles, electricity use and when to call the installer.'
  },
  '/local-ai/': {
    seoTitle: 'Run AI Locally: Ollama, LM Studio & Private AI Guides',
    metaDescription: 'Set up and troubleshoot local AI on a PC with guides for LM Studio, private documents, hardware limits, privacy and out-of-memory problems.'
  },
  '/beginner-telescope-observing/': {
    seoTitle: 'Beginner Telescope Guide: Setup, Focus & Magnification',
    metaDescription: 'Learn to use a telescope with practical beginner guides for finder alignment, focusing, eyepiece magnification, star hopping and first-night troubleshooting.'
  },
  '/deep-sky-astrophotography/': {
    seoTitle: 'Astrophotography Troubleshooting: Focus, Guiding & Plate Solving',
    metaDescription: 'Troubleshoot deep-sky astrophotography problems including failed autofocus, trailing stars, plate solving, flats and meridian flips.'
  },
  '/construction-estimating/': {
    seoTitle: 'Construction Estimating: Takeoffs, Labor, Markup & Bids',
    metaDescription: 'Construction estimating guides for scope, takeoffs, labor hours, purchase quantities, subcontractor quotes, markup, bids and job-costing feedback.'
  },
  '/construction-job-costing/': {
    seoTitle: 'Construction Job Costing Spreadsheet & Profit Tracking',
    metaDescription: 'Track estimated versus actual construction job costs, labor, materials, subcontractors, overhead, profit and margin with a practical spreadsheet workflow.'
  },
  '/landscape-contractor-estimating/': {
    seoTitle: 'Landscaping Estimating: Labor, Materials, Markup & Pricing',
    metaDescription: 'Estimate landscaping jobs with practical guides for labor hours, material quantities, equipment overhead, markup, margin and estimate-versus-actual review.'
  },
  '/home-assistant-matter-thread/': {
    seoTitle: 'Home Assistant Matter & Thread Troubleshooting',
    metaDescription: 'Troubleshoot Home Assistant Matter and Thread setup, commissioning, IPv6, multicast, border routers, backups and unreliable automations.'
  },
  '/genealogy-brick-walls/': {
    seoTitle: 'Genealogy Brick Wall Research: Find Missing Ancestors',
    metaDescription: 'Break through genealogy brick walls with evidence timelines, focused research questions, FAN research, record conflicts, jurisdictions and name variants.'
  },
  '/power-automate/': {
    seoTitle: 'Power Automate Examples: Outlook, SharePoint & Excel',
    metaDescription: 'Practical Power Automate examples for Outlook attachments, SharePoint, Microsoft Forms, Excel rows, reminders and failed-flow troubleshooting.'
  },
  '/pickleball-doubles/': {
    seoTitle: 'Pickleball Doubles Strategy: Positioning, Drops & Speed-Ups',
    metaDescription: 'Improve pickleball doubles strategy with practical guides to partner positioning, the transition zone, third-shot choices, middle balls and speed-ups.'
  },
  '/youth-soccer-coaching/': {
    seoTitle: 'Youth Soccer Practice Plans & Coaching Guides',
    metaDescription: 'Practical youth soccer coaching guides for first practices, fast practice planning, playing-time rotations, match days and parent communication.'
  },
  '/ham-radio-technician-exam/': {
    seoTitle: 'Ham Radio Technician Practice Test & Study Guides 2026–2030',
    metaDescription: 'Prepare for the Ham Radio Technician exam with study plans, exam structure, math formulas, license privileges and first steps after passing.'
  },
  '/epa-608-universal-exam/': {
    seoTitle: 'EPA 608 Practice Test & Universal Study Guide',
    metaDescription: 'Prepare for EPA 608 Universal certification with study plans, exam structure, Type I/II/III comparisons, key numbers and final-day review.'
  },
  '/first-year-homeowner/': {
    seoTitle: 'Home Maintenance Checklist for First-Time Homeowners',
    metaDescription: 'Practical home maintenance guidance for new homeowners, including first-week checks, monthly inspections, repair decisions, records and moisture warning signs.'
  },
  '/property-manager-ai/': {
    seoTitle: 'AI Prompts for Property Managers & Property Management Workflows',
    metaDescription: 'AI prompts and workflows for property managers covering maintenance requests, rent follow-up, tenant-data privacy and a practical adoption roadmap.'
  },
  '/bookkeeper-ai/': {
    seoTitle: 'AI Prompts for Bookkeepers & Bookkeeping Workflows',
    metaDescription: 'Practical AI prompts and workflows for bookkeepers covering month-end close, client onboarding, overdue invoices and client-data privacy.'
  },
  '/maintenance-planning/': {
    seoTitle: 'Maintenance Planning & Scheduling: Backlog, Capacity & Work Orders',
    metaDescription: 'Improve maintenance planning and scheduling with practical guides for backlog readiness, weekly capacity, work requests, access and reactive-work reduction.'
  },
  '/aquarium-troubleshooting/': {
    seoTitle: 'Aquarium Troubleshooting: Cloudy Water, Fish Stress & Algae',
    metaDescription: 'Troubleshoot freshwater aquarium problems including cloudy water, fish gasping, cycling ammonia, recurring algae and filter cleaning.'
  },
  '/home-inspection-reporting/': {
    seoTitle: 'Home Inspection Report Writing: Narratives, Photos & QA',
    metaDescription: 'Write clearer home inspection reports with practical guidance for defect narratives, photo workflows, QA checks and same-day reporting.'
  },
  '/vending-machine-route/': {
    seoTitle: 'Vending Machine Route: Locations, Profit & Due Diligence',
    metaDescription: 'Learn how to evaluate vending-machine locations, route economics, used machines, product mix, service routes and due diligence before buying a route.'
  },
  '/pool-troubleshooting/': {
    seoTitle: 'Pool Troubleshooting: Cloudy Water, Algae, Chlorine & Flow',
    metaDescription: 'Troubleshoot pool problems including cloudy water, green water, disappearing chlorine, filter pressure, return bubbles and storm recovery.'
  },
  '/manufacturing-supervision/': {
    seoTitle: 'Manufacturing Supervisor Training: First 90 Days & Shift Handover',
    metaDescription: 'Practical manufacturing supervisor training for the first 90 days, shift handovers, delegation, former peers, difficult conversations and escalation.'
  },
  '/hotel-housekeeping-supervision/': {
    seoTitle: 'Hotel Housekeeping Supervisor Checklist & Training Guides',
    metaDescription: 'Practical hotel housekeeping supervisor guides for room boards, call-outs, inspections, shift handovers, feedback and front-desk communication.'
  },
  '/hr-ai/': {
    seoTitle: 'AI Prompts for HR: Performance Reviews, ER & Workflows',
    metaDescription: 'Practical AI prompts for HR professionals covering performance reviews, employee relations, privacy, reusable prompt structure and controlled workflows.'
  },
  '/executive-assistant-ai/': {
    seoTitle: 'AI for Executive Assistants: Prompts, Meetings & Workflows',
    metaDescription: 'Practical AI workflows for executive assistants covering meetings, email, information protection, prompt control and safe automation decisions.'
  },
  '/small-fleet-maintenance/': {
    seoTitle: 'Fleet Maintenance Schedule: Preventive Maintenance & Repair Tracking',
    metaDescription: 'Build a small-fleet maintenance system for service schedules, defects, repairs, downtime, replacement decisions and maintenance records.'
  },
  '/tools/construction-job-profit-calculator/': {
    seoTitle: 'Free Construction Job Profit Calculator',
    metaDescription: 'Calculate actual construction job profit, gross margin and cost variance from revenue, labor, materials, subcontractors and other job costs.'
  },
  '/tools/contractor-markup-margin-calculator/': {
    seoTitle: 'Contractor Markup & Margin Calculator',
    metaDescription: 'Convert contractor markup to gross margin, calculate selling price from cost, and compare markup versus margin with a free browser calculator.'
  },
  '/tools/construction-estimating-system-pro/': {
    seoTitle: 'Construction Estimating Spreadsheet & Job Costing Toolkit',
    metaDescription: 'Excel construction estimating and job-costing toolkit for takeoffs, labor, materials, subcontractors, client proposals and estimate-versus-actual review.'
  },
  '/tools/family-admin-reset-planner/': {
    seoTitle: 'Free Family Planner & Weekly Admin Reset',
    metaDescription: 'Create a simple weekly family-admin plan for deadlines, paperwork, follow-ups and household tasks with a free browser-based reset planner.'
  },
  '/tools/family-admin-operating-system/': {
    seoTitle: 'Family Admin Spreadsheet & Household Management System',
    metaDescription: 'A practical household-management spreadsheet for calendars, deadlines, documents, recurring admin, follow-ups and shared family organisation.'
  },
  '/free-tools/performance-review-template-excel/': {
    seoTitle: 'Free Employee Performance Review Template for Excel',
    metaDescription: 'Download a free employee performance review Excel template with structured review sections, goals and a supporting AI prompt builder.'
  },
  '/tools/pto-accrual-calculator/': {
    seoTitle: 'Free PTO Accrual Calculator',
    metaDescription: 'Calculate PTO accrual by pay period, hours worked or annual allowance with a free browser calculator designed for planning and checking accruals.'
  },
  '/tools/hr-manager-toolkit/': {
    seoTitle: 'HR Manager Toolkit: Excel Templates & AI Workflows',
    metaDescription: 'HR manager toolkit with Excel and document templates for reviews, hiring, onboarding, employee relations, training, absence tracking and manager workflows.'
  }
};
