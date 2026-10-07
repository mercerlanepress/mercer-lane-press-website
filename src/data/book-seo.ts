export interface BookSeoEntry {
  seoTitle: string;
  metaDescription: string;
  heading: string;
  intro: string;
  questions: string[];
  keywords: string[];
}

// Search-intent map researched against live search-result language on 6 October 2026.
// These phrases are used to align book pages with real problem-led searches without
// inventing search-volume figures or changing the published book titles.
export const bookSeoBySlug: Record<string, BookSeoEntry> = {
  'the-ai-workflow-playbook-for-executive-assistants': {
    seoTitle: 'AI for Executive Assistants: Prompts & Workflows',
    metaDescription: 'Practical AI workflows for executive assistants covering meetings, email, briefings, research, travel, projects and safe human review.',
    heading: 'AI workflows for executive assistants, built around real support tasks',
    intro: 'If you are looking for AI prompts for executive assistants, meeting-summary workflows, executive email drafting, briefing support or safer ways to use AI in day-to-day executive support, this guide focuses on repeatable work rather than one-off prompt tricks.',
    questions: ['How can executive assistants use AI for meetings and follow-up?', 'What are useful AI prompts for executive assistants?', 'How can an EA use AI without exposing sensitive information?'],
    keywords: ['AI for executive assistants', 'AI prompts for executive assistants', 'executive assistant workflows', 'AI meeting notes', 'executive email drafting']
  },
  'ai-productivity-for-hr-professionals': {
    seoTitle: 'AI Prompts for HR Professionals & HR Workflows',
    metaDescription: 'AI prompts and practical workflows for HR professionals covering recruitment, onboarding, performance reviews, policies and employee communication.',
    heading: 'AI prompts for HR professionals across everyday HR work',
    intro: 'Searches for AI prompts for HR, ChatGPT prompts for HR, performance-review drafting, interview questions and onboarding support all point to the same need: usable first drafts with enough context, privacy discipline and human review to fit real HR work.',
    questions: ['What are useful AI prompts for HR professionals?', 'How can AI help draft performance review comments?', 'How can HR use AI for recruitment and onboarding safely?'],
    keywords: ['AI prompts for HR', 'ChatGPT prompts for HR', 'AI for HR professionals', 'performance review prompts', 'HR onboarding prompts']
  },
  'the-ai-productivity-guide-for-bookkeepers': {
    seoTitle: 'ChatGPT Prompts for Bookkeepers & AI Workflows',
    metaDescription: 'Practical ChatGPT and AI prompts for bookkeepers covering client emails, month-end close, onboarding, reports, reminders and repeatable workflows.',
    heading: 'ChatGPT prompts for bookkeepers that fit the monthly workflow',
    intro: 'People searching for ChatGPT prompts for bookkeepers and AI prompts for bookkeeping are often trying to speed up recurring client communication, month-end close, missing-information chases, onboarding and report explanations. This guide organises those tasks into reusable workflows.',
    questions: ['What are the best ChatGPT prompts for bookkeepers?', 'How can AI help with month-end bookkeeping communication?', 'Can bookkeepers use AI for client emails without sharing private data?'],
    keywords: ['ChatGPT prompts for bookkeepers', 'AI prompts for bookkeepers', 'AI for bookkeeping', 'month end close prompts', 'bookkeeping client email templates']
  },
  'your-first-30-days-as-a-hotel-housekeeping-supervisor': {
    seoTitle: 'Hotel Housekeeping Supervisor Checklist & Guide',
    metaDescription: 'A practical hotel housekeeping supervisor guide for room inspections, room boards, call-outs, linen, staff feedback and first-month routines.',
    heading: 'A hotel housekeeping supervisor checklist for the work behind room readiness',
    intro: 'Searches around hotel housekeeping supervisor checklists, room inspection checklists, housekeeping supervisor duties and room-readiness control reflect the same first-line challenge: keeping rooms, people, inspections and exceptions moving together.',
    questions: ['What should be on a hotel housekeeping supervisor checklist?', 'How should a housekeeping supervisor inspect and release rooms?', 'How do housekeeping supervisors handle call-outs and room boards?'],
    keywords: ['hotel housekeeping supervisor checklist', 'housekeeping supervisor duties', 'hotel room inspection checklist', 'housekeeping room board', 'housekeeping supervisor training']
  },
  'the-new-manufacturing-supervisors-playbook': {
    seoTitle: 'New Manufacturing Supervisor Training Guide',
    metaDescription: 'Practical new manufacturing supervisor training for the first 90 days: shift leadership, former peers, delegation, feedback and escalation.',
    heading: 'New manufacturing supervisor training for the first 90 days',
    intro: 'New supervisors frequently search for help with the first 90 days, managing former peers, giving feedback, running a shift and knowing when to escalate. This guide treats those as connected frontline-supervision skills rather than isolated leadership tips.',
    questions: ['What should a new manufacturing supervisor do in the first 90 days?', 'How do you manage former peers after becoming a supervisor?', 'What should manufacturing supervisor training cover?'],
    keywords: ['manufacturing supervisor training', 'new supervisor first 90 days', 'new supervisor training', 'manage former peers', 'shift supervisor leadership']
  },
  'the-first-time-pool-owners-troubleshooting-guide': {
    seoTitle: 'Pool Troubleshooting: Cloudy Water, Algae & Flow',
    metaDescription: 'Troubleshoot cloudy or green pool water, chlorine loss, filter-pressure changes, air bubbles, weak circulation and recurring algae step by step.',
    heading: 'Pool troubleshooting starts with the symptom, not a random treatment',
    intro: 'Common pool searches include cloudy pool water, green pool water, chlorine that keeps disappearing, high filter pressure, air bubbles and weak return flow. The guide helps first-time owners separate water, circulation, filtration and equipment clues before changing several things at once.',
    questions: ['Why is my pool cloudy even after treatment?', 'Why does chlorine keep disappearing from my pool?', 'What do high filter pressure and weak return flow mean?'],
    keywords: ['cloudy pool water', 'green pool troubleshooting', 'chlorine keeps disappearing', 'high pool filter pressure', 'air bubbles pool pump']
  },
  'the-vending-machine-route-operating-manual': {
    seoTitle: 'Vending Machine Route: Locations, Profit & Operations',
    metaDescription: 'Build a vending machine route with better location selection, machine economics, stock control, service planning and route-level decisions.',
    heading: 'Build a vending machine route around locations and machine economics',
    intro: 'Searches for vending machine business ideas, best vending machine locations, vending route profit and route buying tend to focus on the machine first. This guide starts with location quality, unit economics, stock, service burden and route density.',
    questions: ['What makes a good vending machine location?', 'How do you work out whether a vending machine is profitable?', 'How do you build a small vending machine route?'],
    keywords: ['vending machine route', 'best vending machine locations', 'vending machine profit', 'vending machine business', 'vending route for sale due diligence']
  },
  'write-better-home-inspection-reports-faster': {
    seoTitle: 'Home Inspection Report Writing & Defect Narratives',
    metaDescription: 'A practical home inspection report-writing workflow for observations, photos, defect narratives, summaries, QA and faster report delivery.',
    heading: 'Home inspection report writing that stays clear, specific and efficient',
    intro: 'Home inspectors searching for report-writing help often focus on defect narratives, comment libraries, photo workflow, summary consistency and faster delivery. The book turns those pressure points into one controlled reporting process.',
    questions: ['How do you write a clear home inspection defect narrative?', 'How can a home inspector write reports faster?', 'What should a home inspection report quality check include?'],
    keywords: ['home inspection report writing', 'home inspection narratives', 'home inspection defect comments', 'home inspection report template', 'home inspection report faster']
  },
  'whats-wrong-with-my-aquarium': {
    seoTitle: 'Aquarium Troubleshooting: Cloudy Water & Fish Stress',
    metaDescription: 'Beginner freshwater aquarium troubleshooting for cloudy water, fish gasping, cycling problems, ammonia, filters, algae and water quality.',
    heading: 'Freshwater aquarium troubleshooting for the problems beginners actually see',
    intro: 'Cloudy aquarium water, fish gasping at the surface, ammonia or nitrite during cycling, algae and filter problems are common symptom-led searches. This guide helps owners check the tank in a useful order and avoid treating appearance alone as a diagnosis.',
    questions: ['Why is my aquarium water cloudy?', 'Why are my fish gasping at the surface?', 'How do I know if my aquarium cycling problem is ammonia or nitrite?'],
    keywords: ['cloudy aquarium water', 'fish gasping at surface', 'aquarium cycling problems', 'ammonia in fish tank', 'freshwater aquarium troubleshooting']
  },
  'maintenance-planning-for-small-teams': {
    seoTitle: 'Maintenance Planning & Scheduling for Small Teams',
    metaDescription: 'A practical maintenance planning and scheduling system for backlog control, work orders, job readiness, parts and weekly maintenance schedules.',
    heading: 'Maintenance planning and scheduling without large-team bureaucracy',
    intro: 'Maintenance teams commonly search for backlog control, better work orders, preventive-maintenance scheduling, ready work and weekly maintenance schedules. The guide connects those tasks into a small-team operating rhythm.',
    questions: ['How do you control a maintenance backlog?', 'What makes a maintenance work order ready to schedule?', 'How do you build a weekly maintenance schedule for a small team?'],
    keywords: ['maintenance planning and scheduling', 'maintenance backlog', 'work order planning', 'weekly maintenance schedule', 'maintenance planner small team']
  },
  'the-property-manager-ai-guide': {
    seoTitle: 'AI for Property Managers: Prompts & Workflows',
    metaDescription: 'Practical AI prompts for property managers covering tenant communication, maintenance, leasing, owner reporting, documentation and workflows.',
    heading: 'AI prompts for property managers across recurring communication and operations',
    intro: 'Searches for AI for property managers and ChatGPT prompts for property management often centre on tenant messages, maintenance coordination, leasing, owner reports and repetitive documentation. This guide turns those tasks into repeatable, reviewable workflows.',
    questions: ['What are useful ChatGPT prompts for property managers?', 'How can AI help with tenant and maintenance communication?', 'How should property managers protect sensitive information when using AI?'],
    keywords: ['AI for property managers', 'ChatGPT prompts for property managers', 'property management AI prompts', 'tenant communication AI', 'property management workflows']
  },
  'the-5g-home-internet-troubleshooting-manual': {
    seoTitle: '5G Home Internet Keeps Disconnecting? Troubleshoot It',
    metaDescription: 'Troubleshoot 5G home internet that keeps disconnecting, slows at night, has weak signal, dead zones, latency or gateway-placement problems.',
    heading: 'Troubleshoot 5G home internet disconnects, slow speeds and gateway problems',
    intro: 'People rarely search for a general 5G manual; they search because 5G home internet keeps disconnecting, speeds are slow at night, the gateway has weak signal, Wi-Fi has dead zones or latency suddenly increases. The book follows that symptom-first path.',
    questions: ['Why does my 5G home internet keep disconnecting?', 'Why is 5G home internet slow at night?', 'Where should I place my 5G home internet gateway?'],
    keywords: ['5G home internet keeps disconnecting', '5G home internet slow at night', '5G gateway placement', '5G home internet weak signal', '5G internet latency']
  },
  'ai-scam-defence-for-families': {
    seoTitle: 'AI Voice Scams & Deepfake Scams: Family Defence Guide',
    metaDescription: 'A family guide to AI voice scams, deepfake impersonation, emergency-payment fraud, verification routines, account protection and recovery steps.',
    heading: 'Recognise AI voice scams and deepfake impersonation before acting',
    intro: 'AI voice-clone scams, deepfake scams and urgent family-impersonation messages exploit speed and emotion. The guide focuses on pausing, verifying through a separate channel and protecting money, accounts and evidence when a request may be fake.',
    questions: ['How can you tell if an AI voice call is a scam?', 'What should a family do if a relative appears to ask for urgent money?', 'How do you verify a suspicious voice, image or video message?'],
    keywords: ['AI voice scam', 'deepfake scam', 'voice clone scam', 'family emergency scam', 'AI impersonation fraud']
  },
  'the-reactive-dog-walking-playbook': {
    seoTitle: 'Reactive Dog Walking: Barking, Lunging & Leash Reactivity',
    metaDescription: 'Reward-based reactive dog walking help for barking, lunging and leash reactivity, with trigger distance, route planning, exits and progress tracking.',
    heading: 'Reactive dog walking help for barking, lunging and difficult trigger encounters',
    intro: 'Owners searching for reactive dog training often describe the real problem as a dog barking or lunging at other dogs on walks. This guide focuses on trigger distance, early warning signs, safer exits, route design and recovery rather than forcing close encounters.',
    questions: ['How do I stop my dog barking and lunging on walks?', 'What distance should I keep from triggers with a reactive dog?', 'How do I plan walks for a leash-reactive dog?'],
    keywords: ['reactive dog walking', 'dog barking lunging on walks', 'leash reactivity', 'reactive dog training', 'dog trigger distance']
  },
  'get-your-local-business-recommended-by-ai': {
    seoTitle: 'AI Search Visibility for Local Business & ChatGPT SEO',
    metaDescription: 'Improve local-business visibility in ChatGPT, Google AI, Gemini and Perplexity with clearer business facts, service pages, proof and citations.',
    heading: 'Improve AI search visibility so local businesses are easier to understand and verify',
    intro: 'Current searches around AI search visibility, ChatGPT SEO, local AI SEO and getting a business recommended by AI reflect a new discovery problem. The book focuses on the public evidence AI and search systems can read, corroborate and cite rather than promising guaranteed recommendations.',
    questions: ['How do I get my local business recommended by ChatGPT?', 'What is AI search visibility for a local business?', 'Does a business website still matter for AI recommendations?'],
    keywords: ['AI search visibility', 'ChatGPT SEO', 'local business AI SEO', 'get business recommended by ChatGPT', 'Google AI local business']
  },
  'busy-dog-better-day': {
    seoTitle: 'Dog Enrichment Ideas: 60 Easy Indoor Games',
    metaDescription: '60 quick dog enrichment ideas using everyday items, including sniffing games, food puzzles, thinking activities and rainy-day indoor games.',
    heading: 'Dog enrichment ideas for busy days, rainy days and ordinary homes',
    intro: 'Dog owners commonly search for dog enrichment ideas, indoor dog games, sniffing games and boredom busters they can do at home. This book provides short options that can be chosen by time, setup and the individual dog.',
    questions: ['What are easy dog enrichment ideas at home?', 'What indoor games can tire a dog mentally?', 'What sniffing games can I play with my dog?'],
    keywords: ['dog enrichment ideas', 'indoor dog games', 'dog sniffing games', 'dog boredom busters', 'easy dog enrichment at home']
  },
  'dog-enrichment-for-apartments-and-busy-owners': {
    seoTitle: 'Apartment Dog Enrichment: Indoor Games for Bored Dogs',
    metaDescription: 'Low-cost apartment dog enrichment and indoor games for bored or restless dogs, organised by time, space, noise, food use and activity type.',
    heading: 'Apartment dog enrichment that fits small spaces and busy schedules',
    intro: 'Searches for apartment dog enrichment and indoor games for bored dogs usually come with practical limits: little floor space, noise concerns, short time windows or no garden. The activities in this guide are designed around those constraints.',
    questions: ['How do I entertain a dog in an apartment?', 'What indoor enrichment works in a small space?', 'What can I do with a bored dog when I am short on time?'],
    keywords: ['apartment dog enrichment', 'indoor games for bored dogs', 'dog enrichment small space', 'busy owner dog activities', 'quiet dog enrichment']
  },
  'cooperative-care-for-dog-owners': {
    seoTitle: 'Cooperative Care for Dogs: Nail Trims & Handling',
    metaDescription: 'Reward-based cooperative care for dogs covering nail trims, grooming, medication, handling, start-button behaviours and vet-visit preparation.',
    heading: 'Cooperative care for dogs who struggle with nail trims, grooming or handling',
    intro: 'Cooperative-care searches often begin with a dog that hates nail trims, resists paw handling or worries at the groomer or vet. The guide uses predictable start-and-stop signals and small training steps rather than treating stillness as proof the dog is comfortable.',
    questions: ['How do I teach cooperative care for dog nail trims?', 'What is a start-button behaviour in dog handling?', 'How can I prepare a dog for grooming or vet handling without forcing it?'],
    keywords: ['cooperative care dogs', 'dog nail trim training', 'start button behaviour dog', 'dog grooming handling training', 'vet visit training dog']
  },
  'the-rescue-dog-first-90-days': {
    seoTitle: 'Rescue Dog First Week & 3-3-3 Rule: 90-Day Plan',
    metaDescription: 'A practical rescue-dog settling-in plan for the first days, first week and first 90 days, including decompression, routines and introductions.',
    heading: 'A practical first-90-days plan beyond the rescue-dog 3-3-3 rule',
    intro: 'Many new adopters search for the rescue-dog 3-3-3 rule, first-week advice and decompression guidance. This book uses the broad idea as an expectation-setter, then replaces fixed deadlines with observation, predictable routines and step-by-step expansion.',
    questions: ['What should I do in the first week with a rescue dog?', 'What is the 3-3-3 rule for rescue dogs?', 'How long should a rescue dog decompress after adoption?'],
    keywords: ['rescue dog 3-3-3 rule', 'first week with rescue dog', 'rescue dog decompression', 'new rescue dog settling in', 'rescue dog first 90 days']
  },
  'the-over-aroused-dog': {
    seoTitle: 'Overstimulated Dog Won’t Settle? Over-Arousal Guide',
    metaDescription: 'Help an overstimulated or over-aroused dog settle by recognising trigger stacking, improving recovery, adjusting routines and building calm skills.',
    heading: 'When an overstimulated dog will not settle, look at the whole load',
    intro: 'Owners often search for an overstimulated dog that will not settle, trigger stacking, over-arousal or a high-energy dog that stays switched on. The guide helps separate excitement, frustration, fear, fatigue and accumulated stimulation before choosing the next step.',
    questions: ['Why is my dog overstimulated and unable to settle?', 'What is trigger stacking in dogs?', 'How do you calm an over-aroused high-energy dog?'],
    keywords: ['overstimulated dog', 'dog won’t settle', 'trigger stacking dogs', 'over aroused dog', 'high energy dog calm down']
  },
  'the-new-heat-pump-owners-operating-manual': {
    seoTitle: 'Heat Pump Settings: Flow Temperature & Weather Compensation',
    metaDescription: 'UK heat-pump owner guide to flow temperature, weather compensation, heating curves, running costs, comfort problems and normal operation.',
    heading: 'Understand heat pump flow temperature, weather compensation and running behaviour',
    intro: 'UK heat-pump owners frequently search for flow temperature, weather compensation, heating-curve settings and high running costs. This guide helps owners preserve the commissioned baseline, make cautious one-change-at-a-time adjustments and recognise when installer support is needed.',
    questions: ['What flow temperature should a heat pump run at?', 'How does heat pump weather compensation work?', 'Why are my heat pump running costs higher than expected?'],
    keywords: ['heat pump flow temperature', 'heat pump weather compensation', 'heat pump settings', 'heat pump running costs UK', 'heat pump heating curve']
  },
  'automate-the-office': {
    seoTitle: 'Power Automate Examples for Outlook, SharePoint & Excel',
    metaDescription: '30 practical Power Automate examples including saving email attachments to SharePoint, approvals, reminders, Forms, Excel and Teams workflows.',
    heading: 'Power Automate examples for the office tasks people search for most',
    intro: 'A recurring search is how to save email attachments to SharePoint with Power Automate. Related searches focus on SharePoint approval flows, deadline reminders, Forms processing, Excel rows and Teams notifications. The book brings those common Microsoft 365 workflows into one build-and-troubleshoot system.',
    questions: ['How do I save email attachments to SharePoint with Power Automate?', 'How do I create a SharePoint approval flow in Power Automate?', 'How do I send deadline and overdue reminders with Power Automate?'],
    keywords: ['Power Automate save email attachments to SharePoint', 'Power Automate examples', 'Power Automate approval flow', 'Power Automate SharePoint reminder', 'Power Automate Outlook attachments']
  },
  'private-ai-on-your-pc': {
    seoTitle: 'Run AI Locally on Your PC: Ollama, LM Studio & Privacy',
    metaDescription: 'Plain-English guide to running AI locally on a Windows PC with Ollama or LM Studio, private documents, model sizing and troubleshooting.',
    heading: 'Run AI locally on your PC without assuming every task needs the cloud',
    intro: 'People searching for local AI on a PC, Ollama, LM Studio, private document chat and running an LLM locally usually need two answers: what their hardware can handle and what actually stays private. This guide addresses both.',
    questions: ['How do I run AI locally on my Windows PC?', 'Should I use Ollama or LM Studio for local AI?', 'Can I chat with private documents without uploading them to the cloud?'],
    keywords: ['run AI locally on PC', 'local AI Windows', 'Ollama beginner guide', 'LM Studio guide', 'private document AI']
  },
  'your-first-20-nights-with-a-telescope': {
    seoTitle: 'How to Use a Telescope for Beginners: 20-Night Plan',
    metaDescription: 'Beginner telescope guide for setup, eyepieces, finding planets and deep-sky targets, star hopping, observing conditions and troubleshooting.',
    heading: 'Learn how to use a telescope by completing real observing sessions',
    intro: 'New telescope owners search for how to focus, which eyepiece to use, how to find planets, what they can see and why a target looks disappointing. The 20-session plan turns those questions into a progressive observing routine.',
    questions: ['How do I use a telescope for the first time?', 'What can a beginner see through a telescope?', 'Which eyepiece should I use to find planets and deep-sky objects?'],
    keywords: ['how to use a telescope for beginners', 'beginner telescope guide', 'what can I see with a telescope', 'find planets telescope', 'telescope eyepiece beginner']
  },
  'deep-sky-astrophotography-troubleshooting': {
    seoTitle: 'Astrophotography Troubleshooting: Guiding, Focus & Stars',
    metaDescription: 'Diagnose astrophotography guiding problems, star trails, focus, plate solving, calibration, meridian flips and automation failures.',
    heading: 'Astrophotography troubleshooting by symptom and discriminating test',
    intro: 'Deep-sky imagers often search after seeing star trails, bad guiding, failed plate solving, autofocus problems or broken meridian flips. Because several faults can create similar symptoms, this guide focuses on tests that separate causes before settings are changed.',
    questions: ['Why are my astrophotography stars trailed even with guiding?', 'Why does plate solving fail in astrophotography software?', 'How do I troubleshoot autofocus and guiding problems separately?'],
    keywords: ['astrophotography guiding problems', 'star trails astrophotography', 'plate solving failure', 'astrophotography autofocus problems', 'deep sky astrophotography troubleshooting']
  },
  'construction-estimating-for-your-first-jobs': {
    seoTitle: 'Construction Estimating for Beginners: Takeoff to Bid',
    metaDescription: 'Learn construction estimating for beginners with quantity takeoff, labor, materials, subcontract quotes, overhead, markup, margin and bid review.',
    heading: 'Construction estimating for beginners who need to price a real job',
    intro: 'Beginner estimators commonly search how to estimate a construction job, do a quantity takeoff, price labor, allow for waste and understand markup versus margin. The book follows one worked job from scope through submission and post-job learning.',
    questions: ['How do you estimate a construction job for the first time?', 'What is a quantity takeoff in construction estimating?', 'What is the difference between markup and margin on a construction bid?'],
    keywords: ['construction estimating for beginners', 'how to estimate a construction job', 'quantity takeoff', 'construction labor estimating', 'markup vs margin construction']
  },
  'landscape-contractor-estimating-and-pricing': {
    seoTitle: 'How to Price Landscaping Jobs: Estimating & Margin',
    metaDescription: 'Price landscaping jobs using labor hours, materials, equipment, overhead, markup and profit margin with a repeatable estimating system.',
    heading: 'How to price landscaping jobs from labor, materials, overhead and margin',
    intro: 'Landscape contractors searching how to price a landscaping job or build a landscaping estimate are usually trying to stop underestimating labor, missing overhead or confusing markup with margin. The guide builds the selling price from traceable job inputs.',
    questions: ['How do you price a landscaping job?', 'How do you estimate labor hours for landscaping?', 'What markup or margin should be separated from landscaping job costs?'],
    keywords: ['how to price a landscaping job', 'landscaping estimate', 'landscape estimate template', 'landscaping labor cost', 'landscaping profit margin']
  },
  'the-home-assistant-and-matter-owners-manual': {
    seoTitle: 'Home Assistant Matter & Thread Troubleshooting Guide',
    metaDescription: 'Troubleshoot Home Assistant Matter and Thread devices, commissioning, IPv6, Thread border routers, unavailable devices and automations.',
    heading: 'Home Assistant Matter and Thread troubleshooting by layer',
    intro: 'Current Home Assistant support searches repeatedly involve Matter commissioning failures, Matter-over-Thread devices becoming unavailable, Thread border routers, IPv6 and discovery. The guide separates device, network, discovery, controller and automation layers so resets are not the first move.',
    questions: ['Why is my Matter device unavailable in Home Assistant?', 'Why does a Matter-over-Thread device fail to commission?', 'What does a Thread border router do in Home Assistant?'],
    keywords: ['Home Assistant Matter troubleshooting', 'Home Assistant Thread', 'Matter device unavailable', 'Thread border router Home Assistant', 'Matter commissioning failed']
  },
  'break-through-your-genealogy-brick-wall': {
    seoTitle: 'Genealogy Brick Wall: Find Missing Ancestors & Records',
    metaDescription: 'Break a genealogy brick wall with timelines, conflicting-record analysis, name variants, FAN-club research, hypotheses and evidence correlation.',
    heading: 'Genealogy brick-wall research for missing ancestors and conflicting records',
    intro: 'Family historians searching for genealogy brick-wall help are usually facing a missing ancestor, conflicting dates or places, a same-name identity or a record that cannot be found. The guide turns repeated searching into a case-solving process.',
    questions: ['How do I break through a genealogy brick wall?', 'What is FAN-club or cluster research in genealogy?', 'How do I resolve conflicting records for the same ancestor?'],
    keywords: ['genealogy brick wall', 'missing ancestor genealogy', 'FAN club genealogy', 'cluster research genealogy', 'conflicting genealogy records']
  },
  'pickleball-doubles-decisions': {
    seoTitle: 'Pickleball Doubles Strategy: Positioning & Shot Choice',
    metaDescription: 'Intermediate pickleball doubles strategy for positioning, partner movement, third-shot decisions, transition play, kitchen control and rally repair.',
    heading: 'Pickleball doubles strategy built around position, shot quality and partner movement',
    intro: 'Players searching for pickleball doubles strategy often want help with positioning, third-shot choices, transition-zone decisions, the middle and moving with a partner. This courtside guide connects those decisions to the state of the rally.',
    questions: ['What is the best positioning strategy in pickleball doubles?', 'When should you move through the transition zone in doubles?', 'How should partners cover the middle in pickleball?'],
    keywords: ['pickleball doubles strategy', 'pickleball positioning', 'pickleball third shot strategy', 'pickleball transition zone', 'pickleball partner movement']
  },
  'so-youve-volunteered-to-coach-soccer': {
    seoTitle: 'Youth Soccer Practice Plans for Parent Coaches Ages 6–12',
    metaDescription: 'A first-season youth soccer coaching guide with practice plans, parent communication, match-day checklists, rotations and team administration.',
    heading: 'Youth soccer practice plans and match-day systems for volunteer parent coaches',
    intro: 'New parent coaches tend to search for youth soccer practice plans, simple drills, first-practice ideas, player rotations and parent communication. This book provides a first-season operating system rather than expecting volunteer coaches to copy professional training.',
    questions: ['How do I plan my first youth soccer practice?', 'What should a parent coach do on match day?', 'How do I organise playing-time rotations for kids soccer?'],
    keywords: ['youth soccer practice plans', 'parent soccer coach', 'soccer coaching for beginners', 'kids soccer drills ages 6 12', 'youth soccer match day checklist']
  },
  'ham-radio-technician-exam-prep-2026-2030': {
    seoTitle: 'Ham Radio Technician Practice Test & Study Guide 2026–2030',
    metaDescription: 'Study for the current 2026–2030 Ham Radio Technician exam with lessons, drills, practice sets, mock exams and question-pool review.',
    heading: 'Prepare for the current 2026–2030 Ham Radio Technician exam',
    intro: 'Current exam searches strongly centre on Ham Radio Technician practice tests, the 2026–2030 question pool and full 35-question mock exams. This guide combines concept teaching with practice rather than using outdated 2022–2026 material.',
    questions: ['Where can I study for the 2026–2030 Ham Radio Technician exam?', 'How many questions are on the Technician Class exam?', 'How should I use practice tests for the Technician question pool?'],
    keywords: ['Ham Radio Technician practice test', 'Technician exam 2026 2030', 'ham radio technician study guide', 'Technician question pool', 'ham radio mock exam']
  },
  'epa-608-universal-certification-exam-prep-2027': {
    seoTitle: 'EPA 608 Practice Test & Universal Study Guide 2027',
    metaDescription: 'EPA 608 Universal exam prep covering Core, Type I, Type II and Type III with diagnostics, practice questions, mock exams and number review.',
    heading: 'EPA 608 practice-test preparation for Core, Type I, Type II and Type III',
    intro: 'EPA 608 candidates commonly search for practice tests, Universal study guides, Core questions and Type I, II and III review. The book is organised to expose weak sections and keep similar regulatory numbers attached to the right exam category.',
    questions: ['How do I study for the EPA 608 Universal exam?', 'What is covered in EPA 608 Core, Type I, Type II and Type III?', 'How should I use EPA 608 practice tests before the exam?'],
    keywords: ['EPA 608 practice test', 'EPA 608 Universal study guide', 'EPA 608 Core practice', 'EPA 608 Type 1 2 3', 'EPA 608 exam prep']
  },
  'your-first-year-as-a-homeowner': {
    seoTitle: 'First-Time Homeowner Maintenance Checklist & Schedule',
    metaDescription: 'A first-time homeowner maintenance checklist and month-by-month schedule for learning home systems, seasonal checks, records and repairs.',
    heading: 'A first-time homeowner maintenance checklist that becomes your own schedule',
    intro: 'New owners often search for a first-time homeowner maintenance checklist, seasonal home-maintenance schedule and a list of what to do in the first year. The guide starts with the actual property and builds a manageable record and routine around it.',
    questions: ['What maintenance should a first-time homeowner do first?', 'What should be on a monthly home maintenance checklist?', 'How do I build a seasonal maintenance schedule for my house?'],
    keywords: ['first time homeowner maintenance checklist', 'home maintenance schedule', 'first year homeowner checklist', 'monthly home maintenance checklist', 'seasonal home maintenance']
  },
  'reliable-recall': {
    seoTitle: 'Dog Recall Training With a Long Line & Distractions',
    metaDescription: 'Step-by-step dog recall training with a long line, real-world distractions, wildlife, distance, reward-and-release and off-leash readiness.',
    heading: 'Dog recall training that moves from a long line to real-world distractions',
    intro: 'Recall problems often appear in searches as a dog that comes at home but ignores the cue outside, around wildlife, smells or other dogs. This guide uses long-line recall training and controlled proofing so difficulty rises deliberately rather than through repeated failure.',
    questions: ['How do I train dog recall with a long line?', 'How do I improve recall around dogs, smells and wildlife?', 'When is a dog ready to try off-leash recall?'],
    keywords: ['dog recall training', 'long line recall training', 'dog recall distractions', 'dog recall wildlife', 'off leash recall training']
  },
  'stop-drowning-in-family-admin': {
    seoTitle: 'Family Admin System: Bills, Paperwork & Household Tasks',
    metaDescription: 'A practical family admin system for bills, paperwork, appointments, renewals, school messages, household tasks, records and follow-up.',
    heading: 'Build a family admin system so household paperwork stops living in memory',
    intro: 'People looking for a family command centre, household organisation system or better way to manage bills, appointments and paperwork are usually trying to solve the same problem: obligations are scattered across paper, inboxes, calendars and memory. This guide creates one capture-to-follow-up route.',
    questions: ['How do I organise family admin and household paperwork?', 'What should a family command centre track?', 'How can I manage bills, appointments and renewals in one household system?'],
    keywords: ['family admin system', 'household organization system', 'family command center', 'household paperwork organizer', 'manage bills appointments paperwork']
  },
  'the-small-fleet-maintenance-operating-manual': {
    seoTitle: 'Small Fleet Maintenance Schedule & Preventive Maintenance',
    metaDescription: 'Build a small-fleet preventive maintenance system with service schedules, mileage and time triggers, inspections, repair history and downtime control.',
    heading: 'Small fleet maintenance schedules that turn service history into a working system',
    intro: 'Small-fleet operators commonly search for fleet maintenance schedules, preventive-maintenance checklists, mileage tracking and maintenance spreadsheets. The book focuses on controlling due work, defects, repair history and vehicle availability rather than relying on memory.',
    questions: ['How do I build a preventive maintenance schedule for a small fleet?', 'What should a fleet maintenance checklist track?', 'How can I track vehicle service by mileage and time?'],
    keywords: ['fleet maintenance schedule', 'small fleet maintenance', 'preventive maintenance checklist fleet', 'fleet maintenance spreadsheet', 'vehicle maintenance tracker']
  }
};
