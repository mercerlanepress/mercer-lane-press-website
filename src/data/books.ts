export interface Book {
  slug: string; title: string; subtitle: string; author: string; authorSlug: string;
  publisher: string; description: string; cover: string; coverReady: boolean;
  purchaseUrl: string; intendedReader?: string; problems?: string[]; topics?: string[];
  outcomes?: string[]; themes?: string[]; hubSlug?: string; hubLabel?: string;
}

export const books: Book[] = [{
  slug: 'the-5g-home-internet-troubleshooting-manual',
  title: 'The 5G Home Internet Troubleshooting Manual',
  subtitle: 'A Provider-Neutral System for Diagnosing Weak Signal, Unstable Speeds, Wi-Fi Dead Zones, Latency, and Gateway Problems',
  author: 'Mercer Lane', authorSlug: 'mercer-lane',
  publisher: 'Mercer Lane Press',
  description: 'A practical, provider-neutral manual for finding where a 5G home internet problem begins, testing one variable at a time, and choosing the next useful step.',
  cover: '/images/books/5G_Home_Internet_Front_Cover.jpg',
  coverReady: true,
  purchaseUrl: 'https://www.amazon.com/dp/B0HK2743CQ',
  hubSlug: '5g-home-internet',
  hubLabel: '5G home internet troubleshooting guides'
},{
  slug: 'ai-scam-defence-for-families',
  title: 'AI Scam Defence for Families',
  subtitle: 'A practical family guide to recognizing and responding to AI-enabled scams',
  author: 'Rebecca Tolland', authorSlug: 'rebecca-tolland',
  publisher: 'Mercer Lane Press',
  description: 'A practical guide for families who want to recognize AI-enabled impersonation and fraud, slow down high-pressure requests, verify what is real, and respond safely.',
  cover: '/images/books/ai-scam-defence-for-families-front-cover.jpg',
  coverReady: true,
  purchaseUrl: 'https://www.amazon.com/dp/B0HJDYFFHJ',
  intendedReader: 'Families who want a shared, practical plan for handling suspicious calls, messages, images, videos, and payment requests without relying on guesswork.',
  problems: [
    'Urgent messages that appear to come from a relative or trusted organization',
    'Voice, image, and video impersonation made more convincing with AI',
    'Uncertainty about how to verify a request without alerting or assisting a scammer'
  ],
  topics: ['Pause before acting','Verify on a separate channel','Protect accounts and personal information','Create a family response plan','Preserve evidence','Report and recover'],
  outcomes: ['A shared verification routine','Clear boundaries for money and information','A calmer response when something feels urgent'],
  hubSlug: 'ai-scam-defence',
  hubLabel: 'AI scam defence guides'
},{
  slug: 'the-reactive-dog-walking-playbook',
  title: 'The Reactive Dog Walking Playbook',
  subtitle: 'A Practical, Reward-Based System for Calmer Walks, Safer Trigger Management, and Real-World Progress',
  author: 'Sophie Ardenwood', authorSlug: 'sophie-ardenwood',
  publisher: 'Mercer Lane Press',
  description: 'A practical, reward-based guide to making reactive-dog walks more manageable by spotting early warning signs, creating distance sooner, rehearsing exits, planning routes, and tracking recovery and progress.',
  cover: '/images/books/the-reactive-dog-walking-playbook-front-cover.jpg',
  coverReady: true,
  purchaseUrl: 'https://www.amazon.com/dp/B0HK9VMH7B',
  intendedReader: 'Dog owners and handlers dealing with barking, lunging, freezing, hard staring, or other reactive behavior on walks who want a structured, reward-based way to make safer decisions.',
  problems: [
    'Walks that become difficult because triggers are noticed too late',
    'Uncertainty about how much distance a dog needs in order to stay flexible',
    'Surprise encounters, narrow spaces, and other situations where a clean exit matters'
  ],
  topics: [
    'Early warning signs and the yellow zone',
    'Trigger maps and working distance',
    'Four rehearsed walking skills',
    'Emergency exits and visual barriers',
    'The 14-day walk reset',
    'Eight-week progression, scenario labs, and walk cards'
  ],
  outcomes: [
    'Earlier, cleaner decisions around triggers',
    'More predictable route and exit planning',
    'Progress measured by distance, recovery, reactions, and route flexibility'
  ],
  hubSlug: 'reactive-dog-walking',
  hubLabel: 'Reactive dog walking guides'
},{
  slug: 'get-your-local-business-recommended-by-ai',
  title: 'Get Your Local Business Recommended by AI',
  subtitle: "The 30-Day Owner's System for Visibility in ChatGPT, Google AI, Gemini, and Perplexity - for Local Service Businesses",
  author: 'Mercer Lane', authorSlug: 'mercer-lane',
  publisher: 'Mercer Lane Press',
  description: 'A practical 30-day system for local service businesses to improve the public evidence that AI and search systems can discover, understand, corroborate, and evaluate.',
  cover: '/images/books/Get_Your_Local_Business_Recommended_by_AI_front_cover.jpg',
  coverReady: true,
  purchaseUrl: 'https://www.amazon.com/dp/B0HJSRBQYF',
  intendedReader: 'Owners and marketing leads at local service businesses who want a practical way to improve and measure AI-assisted visibility without relying on hype or guaranteed-ranking claims.',
  problems: [
    'Conflicting business facts across websites, profiles, and directories',
    'Service and location pages that do not clearly explain fit',
    'Unclear evidence about why a business is or is not surfaced in AI answers'
  ],
  topics: [
    'Business identity and canonical facts',
    'Service and location clarity',
    'Reviews and proof',
    'Third-party corroboration',
    'Crawlability and structured data',
    'Repeatable AI visibility testing'
  ],
  outcomes: [
    'A cleaner, more consistent public business footprint',
    'Stronger service pages built around real customer decisions',
    'A defensible testing and measurement routine'
  ],
  themes: ['identity','relevance','proof','corroboration','access and freshness'],
  hubSlug: 'local-business-ai',
  hubLabel: 'Local business AI visibility guides'
},{
  slug: 'busy-dog-better-day',
  title: 'Busy Dog, Better Day',
  subtitle: '60 Easy Dog Enrichment Games Using Everyday Things - 5- to 15-Minute Activities for Sniffing, Thinking, Playing & Bonding',
  author: 'Sophie Ardenwood', authorSlug: 'sophie-ardenwood',
  publisher: 'Mercer Lane Press',
  description: 'A repeat-use library of 60 short dog enrichment games built around sniffing, foraging, thinking, low-impact movement, play, and everyday household items, with 5-, 10-, and 15-minute options and safety-focused ways to adjust difficulty.',
  cover: '/images/books/Busy_Dog_Better_Day_Kindle_Cover.jpg',
  coverReady: true,
  purchaseUrl: 'https://www.amazon.com/dp/B0HJ8V8HWZ',
  intendedReader: 'Dog owners who want practical enrichment ideas that can fit busy days, small spaces, rainy weather, no-food sessions, or ordinary household routines without needing elaborate setups.',
  problems: [
    'Choosing an enrichment activity that fits the time, space, food, and preparation available today',
    'Keeping familiar games useful without constantly buying new puzzle toys or inventing new setups',
    'Using household materials conservatively and knowing when to simplify, stop, or switch activities'
  ],
  topics: [
    'Sniff & Search',
    'Food & Foraging',
    'Thinking Games',
    'Movement & Coordination',
    'Training Through Play',
    'No-Food & Rainy-Day Games'
  ],
  outcomes: [
    'A dependable menu of short enrichment activities',
    'A simple safety check for everyday materials and setups',
    'A one-variable method for making activities easier or harder while tracking what the dog actually enjoys'
  ],
  hubSlug: 'dog-enrichment',
  hubLabel: 'Dog enrichment guides'
},{
  slug: 'dog-enrichment-for-apartments-and-busy-owners',
  title: 'Dog Enrichment for Apartments & Busy Owners',
  subtitle: '60 Low-Cost Indoor Games and Quick Routines for Bored, Restless Dogs in Small Spaces',
  author: 'Sophie Ardenwood', authorSlug: 'sophie-ardenwood',
  publisher: 'Mercer Lane Press',
  description: 'A practical library of 60 short indoor dog enrichment activities for small homes and busy schedules, organized by time, noise, food use, space, and type of engagement, with quick routines, safety checks, and ways to adapt activities to the individual dog.',
  cover: '/images/books/Dog_Enrichment_for_Apartments_and_Busy_Owners_Front_Cover.jpg',
  coverReady: true,
  purchaseUrl: 'https://www.amazon.com/dp/B0HKG7BJQ3',
  intendedReader: 'Dog owners living in apartments or other small homes, and busy owners who want short, repeatable indoor enrichment options that fit limited time, space, noise tolerance, food needs, and ordinary household routines.',
  problems: [
    'Choosing an activity that fits the minutes, floor space, noise limits, food use, and interaction available today',
    'Giving a restless or bored dog something useful to do indoors without turning the home into an exercise course',
    'Using food, toys, fabric, cardboard, chews, and household objects in ways that match the individual dog and can be stopped or simplified safely'
  ],
  topics: [
    'Quiet scent and search',
    'Food and forage',
    'Training and problem solving',
    'Low-impact movement',
    'Calm and decompression',
    'Choice and novelty'
  ],
  outcomes: [
    'A small set of dependable default activities for busy days',
    'A 60-activity library that can be filtered by time, noise, food, and space',
    'A repeatable way to watch the dog, adjust one variable, and keep only the activities that work in the home'
  ],
  hubSlug: 'dog-enrichment',
  hubLabel: 'Dog enrichment guides'
},{
  slug: 'cooperative-care-for-dog-owners',
  title: 'Cooperative Care for Dog Owners',
  subtitle: 'A Step-by-Step System for Calmer Nail Trims, Grooming, Medication, Handling, and Vet Visits',
  author: 'Sophie Ardenwood', authorSlug: 'sophie-ardenwood',
  publisher: 'Mercer Lane Press',
  description: 'A practical, reward-based guide to preparing dogs for routine handling and care by reading stress early, using predictable start and release behaviors, splitting tasks into small trainable steps, and knowing when pain, urgency, or bite risk requires professional help instead of more home training.',
  cover: '/images/books/Cooperative_Care_for_Dog_Owners_Front_Cover.jpg',
  coverReady: true,
  purchaseUrl: 'https://www.amazon.com/dp/B0HKJ62JRG',
  intendedReader: 'Dog owners who want nail trims, grooming, medication handling, examinations, and veterinary visits to involve less conflict and more predictable participation, including owners of dogs that pull away, freeze, avoid equipment, or have a difficult handling history.',
  problems: [
    'Routine care becoming a struggle because the dog is already worried before the difficult part begins',
    'Uncertainty about whether stillness is relaxed cooperation, freezing, or another early stress signal',
    'Clippers, grinders, brushes, medication bottles, rooms, or handling positions becoming predictors of restraint',
    'Not knowing how to split a care task into steps small enough for the dog to practice comfortably',
    'Knowing when training should stop because pain, urgent care, severe fear, or bite risk needs veterinary or qualified behavior support'
  ],
  topics: [
    'Green, amber, and red handling signals',
    'Start-button behaviors and reliable release cues',
    'Micro-step ladders and one-variable progression',
    'Paw handling, nail tools, grooming, bathing, and medication preparation',
    'Veterinary visits, examination handling, groomer handoffs, and context changes',
    'The 14-day foundation, 30-day procedure plan, session cards, and handling profile'
  ],
  outcomes: [
    'A repeatable observe → choose → split → participate → reinforce → release → review → adjust loop',
    'A personal handling profile with early stress signals, current skills, and practical safety information',
    'A structured way to prepare one care task at a time without treating task completion as the only measure of progress',
    'Clear decision points for pausing home training and involving the veterinary team or qualified behavior support'
  ],
  hubSlug: 'cooperative-care',
  hubLabel: 'Cooperative care for dogs'
},{
  slug: 'the-rescue-dog-first-90-days',
  title: 'The Rescue Dog First 90 Days',
  subtitle: 'A Week-by-Week Operating System for Settling In, Building Trust, Solving Early Problems, and Knowing What to Do Next',
  author: 'Sophie Ardenwood', authorSlug: 'sophie-ardenwood',
  publisher: 'Mercer Lane Press',
  description: 'A practical week-by-week operating system for helping a newly adopted rescue dog settle in safely, with low-pressure first days, predictable routines, reward-based foundation skills, careful introductions, gradual expansion, and clear decision points for veterinary or qualified behavior help.',
  cover: '/images/books/The_Rescue_Dog_First_90_Days_Front_Cover.jpg',
  coverReady: true,
  purchaseUrl: 'https://www.amazon.com/dp/B0HKLNZH6F',
  intendedReader: 'People bringing a rescue or shelter dog into the home who want a structured first-90-days plan without treating a calendar as a deadline, including households managing unknown histories, visitors, children, resident pets, alone time, handling, or early behavior concerns.',
  problems: [
    'Trying to do too much before the dog has enough predictability and recovery capacity',
    'Uncertainty about whether body language and behavior are green, amber, or red and what to change next',
    'Early difficulties with walking, toileting, visitors, alone time, doors, handling, or household routines',
    'Introducing a new dog to children, resident dogs, cats, or other small animals without rushing shared freedom',
    'Knowing when a setback needs an easier plan, a veterinary check, or qualified behavior support'
  ],
  topics: [
    'Stabilize → Observe → Teach → Expand',
    'Days 0–7: safety, decompression, sleep, food, toileting, and routine',
    'Body language, thresholds, trigger-and-recovery logging, and one-variable progression',
    'Reward-based skills for doors, walking, recall, mat work, drop, leave, and emergency turns',
    'Alone time, visitors, children, resident dogs, cats, handling, veterinary visits, and setbacks',
    'A 13-week operating plan, quick-reference checklists, and a one-page rescue-dog operating manual'
  ],
  outcomes: [
    'A calmer, more predictable starting routine built around safety and recovery',
    'A practical record of early stress signs, workable distances, routines, and recovery patterns',
    'A written operating manual another competent caregiver can follow',
    'A day-90 review that identifies what to maintain, improve, explore, and escalate for professional support'
  ],
  hubSlug: 'rescue-dog-first-90-days',
  hubLabel: 'Rescue dog first 90 days guides'
},{
  slug: 'the-new-heat-pump-owners-operating-manual',
  title: "The New Heat Pump Owner's Operating Manual",
  subtitle: "How to Run Your Air-to-Water Heat Pump Comfortably and Efficiently, Understand the Controls and Know When Something Isn't Right",
  author: 'Gareth Fenwick', authorSlug: 'gareth-fenwick',
  publisher: 'Mercer Lane Press',
  description: 'A practical UK owner\'s guide to domestic air-to-water heat pumps, covering the controls that matter, normal operating behaviour, comfort problems, electricity use, fault information, and the point where owner troubleshooting should stop.',
  cover: '/images/books/The_New_Heat_Pump_Owners_Operating_Manual_GARETH_FENWICK_Front_Cover.jpg',
  coverReady: true,
  purchaseUrl: 'https://www.amazon.co.uk/dp/B0HF51WQ1F',
  intendedReader: 'UK householders with a domestic air-to-water heat pump who want to understand what the system is doing, preserve the commissioned starting point, make sensible owner-level adjustments, and know when to involve the installer or another competent professional.',
  problems: [
    'Uncertainty about which controls matter and what settings the installer left behind',
    'A whole house, zone, or individual room that feels too cold or too warm',
    'Frost, steam, long run times, lukewarm radiators, pauses, or other behaviour that looks unfamiliar',
    'Electricity use that appears high without enough context to know why',
    'Warnings, fault codes, or a sudden change where the safe next step is unclear'
  ],
  topics: [
    "The Owner's Method: Baseline, Observe, Adjust, Check, Escalate",
    'Room targets, schedules, flow temperature, and weather compensation',
    'Domestic hot water and auxiliary heating',
    'Whole-house and room-specific comfort troubleshooting',
    'Defrost and other strange things that may be normal',
    'Electricity-use investigation, fault recording, and professional handoff'
  ],
  outcomes: [
    'A recorded baseline of the system, controls, and starting settings',
    'A one-change-at-a-time method for testing ordinary owner adjustments',
    'A clearer distinction between normal behaviour, something to watch, and a reason to call',
    'A useful evidence pack for installer or service conversations'
  ],
  hubSlug: 'heat-pump-owners',
  hubLabel: 'Heat pump owner guides'
},{
  slug: 'automate-the-office',
  title: 'Automate the Office',
  subtitle: '30 Practical Workflows Using Microsoft Power Automate for Outlook, Excel, Forms, SharePoint and Teams',
  author: 'Mercer Lane', authorSlug: 'mercer-lane',
  publisher: 'Mercer Lane Press',
  description: 'A practical Microsoft 365 workflow guide built around 30 Power Automate examples for email attachments and files, Forms and SharePoint requests, approvals, overdue work, Excel processing, Teams notifications, reporting, troubleshooting, and maintenance.',
  cover: '/images/books/DIGITAL_BOOK_COVER.jpg',
  coverReady: true,
  purchaseUrl: 'https://www.amazon.com/dp/B0HF5NRXXH',
  intendedReader: 'Microsoft 365 users who handle repeatable office administration and want to turn defined processes into maintainable Power Automate flows without treating automation as a black box.',
  problems: [
    'Repetitive email, attachment, file, request, approval, reminder, spreadsheet, and reporting work',
    'Flows that run but do not produce the intended business result',
    'Duplicate processing or unsafe reruns after a partial failure',
    'Confusion about triggers, actions, dynamic content, conditions, loops, connections, permissions, and run history',
    'Automations that work for one person but are difficult to hand over or maintain'
  ],
  topics: [
    'Choosing work that is actually worth automating',
    'Outlook attachments, file handling, folders, and naming',
    'Forms submissions and SharePoint request tracking',
    'Approvals, reminders, escalation, and overdue work',
    'Excel row processing, transfers, duplicate prevention, and reporting',
    'Teams notifications, run-history diagnosis, permissions, ownership, and maintenance'
  ],
  outcomes: [
    'A repeatable Build → Test → Diagnose approach for new flows',
    'Safer workflow patterns for reruns, partial failures, stable record identities, and duplicate prevention',
    'A practical run-history method for finding the first failed action and inspecting its inputs and outputs',
    'A maintenance and handover checklist for flows other people may depend on'
  ],
  hubSlug: 'power-automate',
  hubLabel: 'Power Automate office workflow guides'
},{
  slug: 'private-ai-on-your-pc',
  title: 'Private AI on Your PC',
  subtitle: 'A Plain-English Guide to Running Useful Local AI at Home or Work Without Sending Every Prompt and Document to the Cloud',
  author: 'Mercer Lane', authorSlug: 'mercer-lane',
  publisher: 'Mercer Lane Press',
  description: 'A plain-English guide to running useful local AI on a Windows PC, choosing models that fit the hardware, understanding what stays local, working with private documents, troubleshooting slow or unstable setups, and deciding when the cloud is still the better tool.',
  cover: '/images/books/Private_AI_on_Your_PC_Front_Cover.jpg',
  coverReady: true,
  purchaseUrl: 'https://www.amazon.com/dp/B0HK7N2YCJ',
  intendedReader: 'Home users, independent professionals, and small-business readers who want practical local AI for drafting, summarizing, extraction, document questions, and other everyday work while making deliberate choices about privacy, hardware limits, and when cloud AI is more appropriate.',
  problems: [
    'Not knowing whether an existing PC has enough RAM, VRAM, and storage for a useful local model',
    'Confusion about the difference between local inference, offline operation, cloud sync, backups, online tools, and genuine privacy boundaries',
    'Choosing models that are too large, too slow, or unstable for the computer',
    'Wanting to work with private documents locally without assuming document chat has read every page perfectly',
    'Slow answers, crashes, memory pressure, long-chat degradation, and uncertainty about whether a hardware upgrade is actually justified',
    'Small-business use where local processing still needs clear rules for allowed data, retention, human review, updates, and network exposure'
  ],
  topics: [
    'Local AI versus cloud AI and the privacy boundary',
    'RAM, VRAM, storage, model size, quantisation, and context',
    'LM Studio, Jan, and Ollama starting routes',
    'Private document chat, retrieval, and source-only prompting',
    'Troubleshooting slow, frozen, and out-of-memory setups',
    'Offline verification, maintenance, benchmarking, and sensible hardware upgrades'
  ],
  outcomes: [
    'A local-AI setup sized to the computer rather than to benchmark hype',
    'A clear description of what data stays on the PC and what features can change that boundary',
    'One tested default model, one fallback model, and a repeatable benchmark for future changes',
    'A practical method for private drafting, extraction, document questions, and small-business workflows with human verification',
    'A troubleshooting and upgrade decision process that changes the cheapest variable first'
  ],
  hubSlug: 'local-ai',
  hubLabel: 'Local AI on your PC guides'
},{
  slug: 'your-first-20-nights-with-a-telescope',
  title: 'Your First 20 Nights With a Telescope',
  subtitle: 'A 20-Session Beginner Plan for Setting Up, Finding Targets, Reading the Sky and Learning to Observe',
  author: 'Evan Hargreaves', authorSlug: 'evan-hargreaves',
  publisher: 'Mercer Lane Press',
  description: 'A practical twenty-session beginner program for learning visual telescope observing: set up and control the instrument, find and confirm targets, build observing technique, read conditions, troubleshoot problems, and plan independent sessions.',
  cover: '/images/books/Your_First_20_Nights_With_a_Telescope_Front_Cover.jpg',
  coverReady: true,
  purchaseUrl: 'https://www.amazon.com/dp/B0HH49ZBH4',
  intendedReader: 'New telescope owners and beginner visual observers who want a structured sequence of real observing sessions instead of trying to learn equipment, sky navigation, target choice, and observing technique all at once.',
  problems: [
    'Stars, planets, or the Moon that look wrong because focus, aiming, or magnification is not yet under control',
    'A finder that does not agree with the main telescope, making easy targets frustrating to acquire',
    'Uncertainty about which eyepiece to start with and when more magnification helps or hurts',
    'Getting lost while trying to find a deep-sky object or not knowing how to confirm the final field',
    'Confusing poor seeing, transparency, moonlight, light pollution, dew, or target choice with an equipment fault',
    'Reaching the point where the telescope works but the next observing session still has no clear plan'
  ],
  topics: [
    'Control the telescope: focus, movement, eyepieces, finder, and orientation',
    'Find things: star hopping, double stars, clusters, the Moon, and planets',
    'Learn to observe: seeing, faint objects, averted vision, and realistic expectations',
    'Become independent: light pollution, darker skies, planning, and troubleshooting',
    'Seasonal target routes and beginner finder plates for mid-northern skies',
    'Field references, observing logs, a 90-day next-step plan, and equipment-buying checks'
  ],
  outcomes: [
    'A repeatable setup and low-power starting routine',
    'A deliberate way to find and confirm targets rather than sweep at random',
    'Better decisions about focus, magnification, conditions, and faint-object technique',
    'A troubleshooting reset that returns to a bright easy target before changing multiple variables',
    'The ability to plan and run a complete observing session with less step-by-step instruction'
  ],
  hubSlug: 'beginner-telescope-observing',
  hubLabel: 'Beginner telescope observing guides'
},{
  slug: 'deep-sky-astrophotography-troubleshooting',
  title: 'Deep-Sky Astrophotography Troubleshooting',
  subtitle: 'A Symptom-to-Cause Diagnostic Guide for Guiding, Tracking, Focus, Plate Solving, Calibration and Automation Failures',
  author: 'Evan Hargreaves', authorSlug: 'evan-hargreaves',
  publisher: 'Mercer Lane Press',
  description: 'A symptom-to-cause diagnostic manual for deep-sky imagers who need to separate guiding, tracking, focus, plate-solving, calibration, communication, optical, and automation failures using controlled tests instead of speculative setting changes.',
  cover: '/images/books/Deep-Sky_Astrophotography_Troubleshooting_Front_Cover.jpg',
  coverReady: true,
  purchaseUrl: 'https://www.amazon.com/dp/B0HH9VDK7X',
  intendedReader: 'Astrophotographers who already understand the basic language of deep-sky imaging and want a structured way to make a complete imaging rig work reliably when several different faults can produce the same symptom.',
  problems: [
    'Trailed or distorted stars where guiding, tracking, wind, flexure, cable drag, and optical geometry can look deceptively similar',
    'Guiding calibration, RA or DEC behavior, dithering, spikes, oscillation, and lost-star problems that need a discriminating test before tuning',
    'Plate-solving, slew-and-center, meridian-flip, and overnight automation failures where the final error may not be the original fault',
    'Focus, autofocus, edge-star, dew, reflection, and optical-path problems that can be misdiagnosed from a guide graph alone',
    'Flat, dark, bias, dark-flat, dust, vignetting, and calibration artifacts that make processed data worse instead of better',
    'Intermittent device, USB, power, cable, driver, and shared-dependency failures that only appear under load or at certain mount positions'
  ],
  topics: [
    'Observation → Test → Cause → Fix → Verify',
    'Known-good baselines, change logs, images, exact errors, and chronological evidence',
    'Tracking, guiding, RA, DEC, dithering, spikes, lost stars, and flexure',
    'Plate solving, centering, meridian flips, device communication, and automation chains',
    'Focus, autofocus, optical geometry, dew, frost, reflections, and unexpected light',
    'Calibration-frame failures, the Ten-Minute Night Rescue, and building a reliable rig'
  ],
  outcomes: [
    'A known-good configuration record that makes future failures easier to compare',
    'A repeatable way to choose one useful diagnostic test before changing settings',
    'Quick symptom-first routes for common failures when clear-sky time is limited',
    'A reliability checklist for testing automation and safe failure states before unattended imaging'
  ],
  hubSlug: 'deep-sky-astrophotography',
  hubLabel: 'Deep-sky astrophotography troubleshooting guides'
},
{
  slug: 'construction-estimating-for-your-first-jobs',
  title: 'Construction Estimating for Your First Jobs',
  subtitle: "A Beginner's Worked-Example Guide to Quantity Takeoffs, Labor, Waste, Overhead, Markup, Bid Review, and Avoiding Costly Estimating Mistakes",
  author: 'Warren Holtby', authorSlug: 'warren-holtby',
  publisher: 'Mercer Lane Press',
  description: 'A beginner-focused worked-example guide to construction estimating that follows one fictional workshop from scope and quantity takeoff through material purchasing, labor hours, subcontract quotes, overhead and margin, bid review, proposal, and post-job learning.',
  cover: '/images/books/con DIGITAL_BOOK_COVER.jpg',
  coverReady: true,
  purchaseUrl: 'https://www.amazon.com/dp/B0HG77QFH7',
  intendedReader: 'Contractors and estimators pricing their first jobs who understand how construction work goes together but want a repeatable process for making scope, quantities, assumptions, labor, quotations, cost recovery, and final bid review visible and traceable.',
  problems: [
    'Starting detailed takeoff before the scope and responsibility boundaries are clear',
    'Mixing measured quantity, purchasing quantity, material price, and unexplained waste assumptions',
    'Estimating labor without a documented activity, crew, time, and person-hour basis',
    'Comparing subcontract quotations by headline price before the scopes are genuinely comparable',
    'Confusing project cost, company overhead, markup, margin, and selling price',
    'Submitting a price without a deliberate review for omitted work, stale quotations, wrong revisions, and fragile assumptions'
  ],
  topics: [
    'Scope maps, question logs, and estimate structure',
    'Traceable quantity takeoff and control quantities',
    'Measured, purchasing, and actual material quantities',
    'Activity-to-person-hour labor build-up',
    'Subcontract quote normalization and project-specific costs',
    'Overhead, markup, margin, red-team bid review, proposal handoff, and post-job learning'
  ],
  outcomes: [
    'A repeatable SCOPE → STRUCTURE → MEASURE → PRICE → LOAD → REVIEW → SUBMIT → LEARN sequence',
    'An estimate whose important quantities, prices, labor assumptions, and quotations retain a visible source or basis',
    'Clearer separation between measured and purchasing quantities, project cost and selling price, and markup and margin',
    'A review-and-learning loop that can turn omissions, expired inputs, and actual job results into process improvements'
  ],
  hubSlug: 'construction-estimating',
  hubLabel: 'Construction estimating guides'
},
{
  slug: 'landscape-contractor-estimating-and-pricing',
  title: 'Landscape Contractor Estimating & Pricing',
  subtitle: 'A Practical System for Labor, Materials, Equipment, Overhead, Markup, Margin, and Profitable Bids',
  author: 'Warren Holtby', authorSlug: 'warren-holtby',
  publisher: 'Mercer Lane Press',
  description: 'A practical landscape-installation estimating system that moves from scope and quantities through labor-hours, materials, equipment, other direct costs, overhead, pricing, bid review, and estimate-versus-actual learning.',
  cover: '/images/books/garden - DIGITAL_BOOK_COVER.jpg',
  coverReady: true,
  purchaseUrl: 'https://www.amazon.com/dp/B0HGR5L94V',
  intendedReader: 'Landscape contractors, owner-operators, and estimators who understand the field work but want a repeatable company-specific system for building estimates from scope, quantities, labor-hours, equipment, overhead, and defined pricing rules.',
  problems: [
    'A busy schedule that still does not show whether individual jobs are covering their real costs',
    'Rule-of-thumb pricing that copies another contractor, doubles material cost, or starts with a target price instead of the work required',
    'Measured quantities that are confused with purchase quantities, waste, pack sizes, delivery, or other landed material costs',
    'Labor estimated from calendar days instead of operations, labor-hours, production assumptions, and productive capacity',
    'Owned equipment, travel, disposal, mobilization, and other real job costs disappearing from the estimate',
    'Markup, margin, overhead recovery, and profit being mixed together or applied to an unclear cost base'
  ],
  topics: [
    'The Six-Pass Estimate: Scope → Quantify → Time → Cost → Price → Check & Learn',
    'Scope sheets, quantity takeoffs, purchase quantities, landed material cost, and supplier records',
    'Labor-hours, production rates, productive capacity, crew constraints, and bottom-up labor plans',
    'Owned and rented equipment, delivery, travel, disposal, mobilization, and other direct costs',
    'Overhead recovery, markup versus margin, pricing architectures, risk review, and bid checking',
    'Sixteen worked landscape estimates, estimate-versus-actual review, production-rate libraries, assemblies, price books, and field worksheets'
  ],
  outcomes: [
    'A traceable estimating process built from the company’s own costs, records, supplier information, and production evidence',
    'Visible assumptions for quantities, labor, equipment, overhead, uncertainty, and pricing instead of hidden rule-of-thumb percentages',
    'A repeatable pre-bid review that checks scope, units, labor, materials, equipment, other costs, overhead, pricing, and risk',
    'An estimate-versus-actual learning loop that improves future production rates, assemblies, and price-book entries'
  ],
  hubSlug: 'landscape-contractor-estimating',
  hubLabel: 'Landscape contractor estimating guides'
},
{
  slug: 'the-home-assistant-and-matter-owners-manual',
  title: "The Home Assistant & Matter Owner's Manual",
  subtitle: "A Homeowner’s Guide to Reliable Devices, Thread Networks, Private Automations, and Smart-Home Troubleshooting - Without Becoming a Programmer",
  author: 'Lewis Hartfield', authorSlug: 'lewis-hartfield',
  publisher: 'Mercer Lane Press',
  description: 'A practical homeowner-focused operating manual for building and maintaining a reliable Home Assistant smart home, with Matter and Thread treated as separate layers, local-first control paths, conservative automation design, and structured troubleshooting.',
  cover: '/images/books/home - DIGITAL_BOOK_COVER.jpg',
  coverReady: true,
  purchaseUrl: 'https://www.amazon.com/dp/B0HJMK44DJ',
  intendedReader: 'Homeowners who want Home Assistant, Matter, Thread, and mixed smart-home ecosystems to work reliably without turning the house into a permanent software project or requiring advanced YAML, MQTT, Node-RED, custom front-end development, or advanced network engineering.',
  problems: [
    'Smart-home failures that are difficult to locate because device, network, discovery, controller, and automation problems are treated as one issue',
    'Confusion between Matter controllers and fabrics, Thread networks and Border Routers, and the different infrastructure required by Matter-over-Wi-Fi and Matter-over-Thread',
    'Commissioning failures caused by unclear ownership, multiple ecosystems, Thread credentials, local IPv6, multicast, or network isolation',
    'Automations that become difficult to explain, fight manual control, or assume that sending a command means the physical result happened',
    'Updates, device replacement, and hardware failures that become risky because backups, recovery steps, and dependencies were not documented first',
    'Privacy or security changes that accidentally break local discovery and control'
  ],
  topics: [
    'Five-layer smart-home troubleshooting: physical device → network transport → discovery/addressing → integration/controller → automation/interface',
    'A dependable Home Assistant foundation, simple local networking, device control paths, naming, areas, floors, labels, and a minimum reliable build',
    'Matter controllers, fabrics, commissioning, multi-admin, feature-parity trade-offs, and Matter-over-Wi-Fi versus Matter-over-Thread',
    'Thread end devices, routers, Border Routers, credentials, multiple Thread networks, radio coverage, and 2.4 GHz coexistence',
    'Explainable automations built around Detect → Decide → Act → Verify, manual overrides, failure-safe behavior, traces, dashboards, and useful notifications',
    'Backups, updates, replacement planning, privacy and security, a 30-day reliability build, worked household patterns, diagnostic matrices, logs, and quick-reference sheets'
  ],
  outcomes: [
    'A smart-home architecture whose important control paths and dependencies can be described without guessing',
    'A repeatable commissioning and troubleshooting method that changes one layer at a time and preserves evidence before destructive resets',
    'Automations that remain understandable, keep manual controls useful, and verify consequential actions where trustworthy state is available',
    'A maintenance routine built around backups, controlled updates, documented replacement paths, recovery rehearsals, and deliberate local-versus-cloud choices'
  ],
  hubSlug: 'home-assistant-matter-thread',
  hubLabel: 'Home Assistant, Matter & Thread guides'
},
{
  slug: 'break-through-your-genealogy-brick-wall',
  title: 'Break Through Your Genealogy Brick Wall',
  subtitle: 'A Step-by-Step Case-Solving System for Missing Ancestors, Conflicting Records, and Family Tree Dead Ends',
  author: 'Daniel Mercer', authorSlug: 'daniel-mercer',
  publisher: 'Mercer Lane Press',
  description: 'A practical case-solving system for difficult family-history research that turns repeated searching into a structured investigation: define one question, verify the evidence, trace provenance, build a timeline, preserve contradictions, expand names and jurisdictions, research associates, test competing hypotheses, correlate the evidence, and record a defensible conclusion.',
  cover: '/images/books/gene - DIGITAL_BOOK_COVER.jpg',
  coverReady: true,
  purchaseUrl: 'https://www.amazon.com/dp/B0HFSBTVC7',
  intendedReader: 'Family historians who already have a tree, records, or inherited claims but are stuck on a missing ancestor, uncertain parentage, conflicting dates or places, same-name identities, migration gaps, or a record that seems to have disappeared.',
  problems: [
    'Repeating broad database searches without knowing why the previous searches failed',
    'Facts in the family tree that look certain but cannot be traced back to a reliable source',
    'Conflicting names, ages, birthplaces, parent names, residences, or identities',
    'Historical boundary changes, record loss, incomplete indexing, or the wrong record custodian',
    'A target ancestor whose own records do not contain the decisive evidence',
    'Several plausible explanations with no clear way to decide what to search next'
  ],
  topics: [
    'The 12-stage Brick Wall Case Cycle: DEFINE → VERIFY → TRACE → ORDER → CHALLENGE → EXPAND → LOCATE → CONNECT → HYPOTHESISE → TEST → CORRELATE → CONCLUDE',
    'Research questions, known-facts ledgers, provenance audits, timelines, and contradiction matrices',
    'Name variants, indexing errors, same-name identities, and historical jurisdictions',
    'Associate and family-cluster research using relatives, neighbours, witnesses, sponsors, and other recurring connections',
    'Competing hypotheses, discriminating searches, negative evidence, and source substitution when the ideal record is missing',
    'Case conclusions recorded as SOLVED, WORKING CONCLUSION, or OPEN CASE, with remaining uncertainty made explicit'
  ],
  outcomes: [
    'A case file that separates supported facts from assumptions and inherited claims',
    'A documented research trail that shows what was searched, what failed, and why the next action matters',
    'Competing explanations tested against evidence instead of a single preferred story',
    'A conclusion recorded at the strength the surviving evidence actually supports'
  ],
  hubSlug: 'genealogy-brick-walls',
  hubLabel: 'Genealogy brick-wall research guides'
},
{
  slug: 'pickleball-doubles-decisions',
  title: 'Pickleball Doubles Decisions',
  subtitle: 'Read the Rally, Choose the Shot, Move as a Pair and Repair the Point - A Courtside Strategy Guide for Intermediate Players',
  author: 'Julian Rooke', authorSlug: 'julian-rooke',
  publisher: 'Mercer Lane Press',
  description: 'A practical doubles strategy guide for intermediate pickleball players who already know the basic shots and want a clearer system for reading rally state, choosing the next job, moving with a partner, and repairing points when the normal pattern breaks.',
  cover: '/images/books/PB - DIGITAL_BOOK_COVER.jpg',
  coverReady: true,
  purchaseUrl: 'https://www.amazon.com/dp/B0HFR2K9Z9',
  intendedReader: 'Intermediate doubles players around the recreational 3.0-3.5 level who can sustain rallies and produce the basic shots but do not yet make consistently strong doubles decisions, including players who regularly change partners.',
  problems: [
    'Knowing which shot serves the team when several technically playable options are available',
    'Moving forward, holding, resetting, or attacking at the wrong moment because the rally state was misread',
    'Partners becoming disconnected in transition, leaving the middle unclear, or reacting differently to the same ball',
    'Recovering when a short return, high third shot, lob, failed speed-up, broken stack, or one-up/one-back formation disrupts the planned pattern'
  ],
  topics: [
    'Advantage, Neutral, and Pressure rally states',
    'Position → Read → Choose → Move → Reassess',
    'Serve, return, third-shot, and fifth-shot decisions',
    'Transition-zone movement, resets, and arriving together',
    'Dinking, targeting, speed-ups, middle-ball responsibility, and countering',
    'Partner communication, stacking, opponent patterns, decision cards, and rally repair'
  ],
  outcomes: [
    'A repeatable way to identify what the team needs before choosing a stroke',
    'More deliberate movement based on shot quality and opponent contact rather than automatic rules',
    'Clearer partner responsibilities for middle balls, attacks, transition, and disrupted formations',
    'A courtside reference for diagnosing recurring situations and choosing the next useful action'
  ],
  hubSlug: 'pickleball-doubles',
  hubLabel: 'Pickleball doubles strategy guides'
},
{
  slug: 'so-youve-volunteered-to-coach-soccer',
  title: "So You've Volunteered to Coach Soccer",
  subtitle: 'A First-Season Playbook for Parent Coaches of Kids 6–12 — Practices, Parents, Match Days and Team Admin',
  author: 'Grant Ellwood', authorSlug: 'grant-ellwood',
  publisher: 'Mercer Lane Press',
  description: 'A practical first-season playbook for volunteer parent coaches running recreational youth soccer teams for ages 6–12, covering team setup, practice planning, parent communication, match-day preparation, playing-time rotations, common disruptions, and the boundary between coaching decisions and league or safety escalation.',
  cover: '/images/books/soc - DIGITAL_BOOK_COVER.jpg',
  coverReady: true,
  purchaseUrl: 'https://www.amazon.com/dp/B0HFB88CVH',
  intendedReader: 'Volunteer parent coaches taking responsibility for a recreational youth soccer team, primarily players ages 6–12, who need a practical first-season system for organizing practices, parents, match days, participation, and team administration without pretending to be a professional coach.',
  problems: [
    'The first practice or first match is close and the coach needs a simple, workable starting plan',
    'Practice planning takes too long or produces activities with too much waiting and too little soccer',
    'Attendance changes make a carefully planned session or match rotation difficult to run',
    'Parent communication, playing-time questions, sideline coaching, or repeated lateness create avoidable friction',
    'Match-day preparation and player rotations are being managed from memory instead of a repeatable checklist',
    'Injuries, weather, safeguarding concerns, conflict, or other exceptions make it unclear what belongs to the coach and what must be escalated'
  ],
  topics: [
    'Season setup, team information, communication, roles, equipment, and current league rules',
    'The Ten-Minute Practice Builder and six ready-to-run starter practices',
    'Small-sided play, short coaching cues, observation, attendance changes, and keeping children active',
    'The 24-hour match-day plan, playing-time rules, written rotations, and calmer in-game coaching',
    'Parent communication, difficult conversations, coaching your own child, confidence, behavior, and inclusion',
    'Injury, suspected concussion, weather, safeguarding, practice breakdowns, conflict, season review, and a 24-tool coaching toolkit'
  ],
  outcomes: [
    'A repeatable Plan → Message → Practice → Confirm → Match → Review weekly coaching loop',
    'A six-practice starting runway that can later be replaced by observation-led practice planning',
    'A written match-day and participation system that reduces reliance on memory under pressure',
    'Clearer boundaries for when to simplify, adapt, follow the organization’s procedure, or hand a problem to the appropriate qualified person or authority'
  ],
  hubSlug: 'youth-soccer-coaching',
  hubLabel: 'Volunteer youth soccer coaching guides'
},
{
  slug: 'ham-radio-technician-exam-prep-2026-2030',
  title: 'Ham Radio Technician Exam Prep 2026–2030',
  subtitle: 'Plain-English Lessons • Exam Traps • Practice Sets • Six Full 35-Question Mock Exams',
  author: 'Aaron Bellcroft', authorSlug: 'aaron-bellcroft',
  publisher: 'Mercer Lane Press',
  description: 'A concept-focused study guide for the 2026–2030 Technician Class exam, organized around all 35 official exam groups with plain-English lessons, exam traps, six-question drills, six full 35-question mock exams, and quick-reference review tools.',
  cover: '/images/books/ham - DIGITAL_BOOK_COVER.jpg',
  coverReady: true,
  purchaseUrl: 'https://www.amazon.com/dp/B0HJSZ39ZJ',
  intendedReader: 'Candidates preparing for the 2026–2030 Technician Class Element 2 exam who want a structured way to understand the concepts behind all 35 official groups, practise recall, identify weak group codes, and use mixed mock exams rather than relying only on memorized answer patterns.',
  problems: [
    'Turning a 409-question pool into a manageable study plan built around the 35 groups that actually make up a normal exam',
    'Keeping rules, operating procedures, propagation, electrical principles, components, practical circuits, signals, antennas, feed lines, and safety organized',
    'Recognizing similar terms, numbers, components, and operating situations that become common exam traps',
    'Finding the exact weak group after a practice miss instead of repeatedly retaking one fixed test',
    'Remembering the small set of formulas, unit conversions, decibel landmarks, and Technician privilege anchors used throughout the pool',
    'Moving from topic study to six mixed 35-question mock exams, quick-reference review, a score tracker, and an exam-day checklist'
  ],
  topics: [
    'One concept-focused learning unit for each of the 35 official exam groups',
    'Commission rules, licensing, privileges, identification, repeaters, simplex, nets, and emergency communication',
    'Propagation, wavelength, antennas, feed lines, connectors, tuners, and SWR',
    'Electrical quantities, metric conversions, decibels, DC power, Ohm\'s Law, components, and schematics',
    'Practical circuits, troubleshooting, test instruments, signals, emissions, satellites, and digital communication',
    'Safety, six full mock exams, formula and privilege quick references, glossary, cram map, score tracker, and exam-day checklist'
  ],
  outcomes: [
    'A repeatable big-picture → concept → exam-trap → retrieval-drill study loop for every official group',
    'A group-code review method that points practice misses back to a specific area for correction',
    'Six mixed 35-question mock exams structured with one question from each official group',
    'Compact reference pages for formulas, privilege landmarks, post-pass first steps, glossary terms, final review, scores, and exam day'
  ],
  hubSlug: 'ham-radio-technician-exam',
  hubLabel: 'Ham Radio Technician exam guides'
},
{
  slug: 'epa-608-universal-certification-exam-prep-2027',
  title: 'EPA 608 Universal Certification Exam Prep 2027',
  subtitle: 'Core, Type I, Type II & Type III Study Guide',
  author: 'Warren Holtby', authorSlug: 'warren-holtby',
  publisher: 'Mercer Lane Press',
  description: 'A structured Section 608 Universal exam-preparation guide built around Core, Type I, Type II, and Type III fact maps, a diagnostic test, section drills with rationales, a number-collision reference, two full 100-question mock exams, and final-day review tools.',
  cover: '/images/books/608 - DIGITAL_BOOK_COVER.jpg',
  coverReady: true,
  purchaseUrl: 'https://www.amazon.com/dp/B0HJHPSS89',
  intendedReader: 'Candidates preparing for Section 608 Universal certification who want one organized study system for Core, Type I, Type II, and Type III, especially readers who need help keeping similar numbers, pressure units, equipment categories, current rules, legacy values, and provider-specific exam conventions separate.',
  problems: [
    'Keeping Core, Type I, Type II, and Type III rules attached to the correct appliance class and exam section',
    'Separating current values from legacy study-guide numbers and provider-specific exam conventions',
    'Remembering similar thresholds, percentages, dates, evacuation levels, pressure units, and repair timelines without mixing them together',
    'Finding the weak section after a diagnostic or mock exam instead of repeatedly reviewing everything',
    'Turning a large body of regulatory and technical material into a practical 14-day or 21-day study plan',
    'Checking current EPA requirements and exam-provider logistics before booking or sitting the exam'
  ],
  topics: [
    '40-question diagnostic and section-by-section weak-area review',
    'Core, Type I, Type II, and Type III exam fact maps',
    'Section drills with original practice questions and detailed rationales',
    'Number Collision Matrix for dates, pounds, percentages, pressure units, and timelines',
    'Two full 100-question mock exams with separate section score tracking',
    'Final-day review, glossary, booking checklist, and source freshness notes'
  ],
  outcomes: [
    'A repeatable diagnostic → targeted review → section drill → mock exam study loop',
    'Clearer separation of current regulatory values, legacy numbers, and provider-specific conventions',
    'Section-by-section mock scores that point directly to the next area to repair',
    'A concise final review and logistics checklist before exam day'
  ],
  hubSlug: 'epa-608-universal-exam',
  hubLabel: 'EPA 608 Universal exam guides'
}
];

export const featuredBook = books[0];
