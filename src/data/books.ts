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
  cover: '/images/books/Construction_Estimating_for_Your_First_Jobs_Front_Cover.jpg',
  coverReady: false,
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
}
];

export const featuredBook = books[0];
