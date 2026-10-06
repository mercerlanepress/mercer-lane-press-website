import type { SiteSeoEntry } from './site-seo';

/**
 * Evidence-led overrides for supporting guides where Search Console already
 * shows useful query traction or a query-to-page mismatch. These remain narrow
 * long-tail targets so the broader hub and book pages do not cannibalise them.
 */
export const guideSeoByPath: Record<string, SiteSeoEntry> = {
  '/5g-home-internet/keeps-disconnecting/': {
    seoTitle: '5G Keeps Disconnecting? Fix Dropouts & Turning Off',
    metaDescription: 'Troubleshoot 5G home internet that keeps disconnecting, dropping out, turning off or going in and out with a practical step-by-step check order.'
  },
  '/5g-home-internet/gateway-placement/': {
    seoTitle: '5G Gateway Placement: Best Location for Signal & Speed',
    metaDescription: 'Find a better location for a 5G home internet gateway using window tests, signal stability, obstruction checks and repeatable speed comparisons.'
  },
  '/5g-home-internet/slow-at-night/': {
    seoTitle: '5G Internet Slow at Night? Causes & Troubleshooting',
    metaDescription: 'Troubleshoot 5G home internet that slows down at night by separating congestion, signal changes, Wi-Fi limits and gateway-placement problems.'
  },
  '/5g-home-internet/slow-speeds/': {
    seoTitle: '5G Home Internet Slow? Speed Troubleshooting Guide',
    metaDescription: 'Diagnose slow 5G home internet with controlled tests for signal, gateway location, Wi-Fi, device limits, congestion and time-of-day changes.'
  },
  '/power-automate/save-outlook-attachments-to-sharepoint/': {
    seoTitle: 'Power Automate: Save Outlook Attachments to SharePoint',
    metaDescription: 'Build a Power Automate flow that saves Outlook email attachments to SharePoint automatically, with practical checks for filenames, folders and failures.'
  },
  '/power-automate/diagnose-failed-power-automate-flow/': {
    seoTitle: 'Power Automate Flow Failed? Diagnose Run Errors',
    metaDescription: 'Troubleshoot a failed Power Automate flow by reading run history, finding the failed action and separating data, connection and logic problems.'
  },
  '/home-assistant-matter-thread/home-assistant-matter-commissioning-troubleshooting/': {
    seoTitle: 'Home Assistant Matter Commissioning Failed? Troubleshooting',
    metaDescription: 'Troubleshoot Home Assistant Matter commissioning failures with checks for controller state, networks, IPv6, credentials and device reset conditions.'
  },
  '/home-assistant-matter-thread/home-assistant-matter-ipv6-multicast/': {
    seoTitle: 'Home Assistant Matter IPv6 & Multicast Troubleshooting',
    metaDescription: 'Troubleshoot Home Assistant Matter problems involving IPv6, multicast, network segmentation and discovery before changing unrelated settings.'
  },
  '/home-assistant-matter-thread/thread-border-router-troubleshooting/': {
    seoTitle: 'Home Assistant Thread Border Router Not Found? Fixes',
    metaDescription: 'Troubleshoot missing or unreliable Thread border routers in Home Assistant with checks for credentials, discovery, IPv6 and network topology.'
  },
  '/local-ai/set-up-local-ai-with-lm-studio/': {
    seoTitle: 'How to Set Up LM Studio for Local AI on Your PC',
    metaDescription: 'Set up LM Studio for local AI on a PC, choose a model that fits available hardware and verify a working private local-chat workflow.'
  },
  '/local-ai/local-ai-slow-freezing-out-of-memory/': {
    seoTitle: 'Local AI Slow, Freezing or Out of Memory? Fixes',
    metaDescription: 'Troubleshoot local AI that is slow, freezing or running out of memory by checking model size, context length, RAM, VRAM and competing workloads.'
  },
  '/local-ai/does-local-ai-keep-data-private/': {
    seoTitle: 'Is Local AI Private? What Stays on Your PC',
    metaDescription: 'Understand what running AI locally can keep on your PC, what may still contact the internet and which settings or workflows can affect privacy.'
  },
  '/rescue-dog-first-90-days/first-24-hours-with-a-rescue-dog/': {
    seoTitle: 'First 24 Hours With a Rescue Dog: What to Do',
    metaDescription: 'A calm first-24-hours plan for a rescue dog covering arrival, space, toilet breaks, food, sleep, introductions, observation and avoiding overload.'
  },
  '/rescue-dog-first-90-days/rescue-dog-first-week-routine/': {
    seoTitle: 'Rescue Dog First Week: Routine & Settling-In Guide',
    metaDescription: 'Build a simple first-week routine for a rescue dog with predictable meals, rest, toilet breaks, low-pressure walks, observation and gradual introductions.'
  },
  '/reactive-dog-walking/recover-after-reactive-dog-reaction/': {
    seoTitle: 'Reactive Dog Recovery After a Reaction: What to Do',
    metaDescription: 'Help a reactive dog recover after barking, lunging or freezing by creating distance, lowering demands and tracking how long normal behaviour takes to return.'
  },
  '/dog-enrichment/simple-weekly-dog-enrichment-plan/': {
    seoTitle: 'Dog Enrichment Plan: A Simple Weekly Schedule',
    metaDescription: 'Build a simple weekly dog enrichment plan using short sniffing, searching, thinking, play and no-food activities without needing a new puzzle every day.'
  },
  '/vending-machine-route/buying-an-existing-vending-route-due-diligence/': {
    seoTitle: 'Buying a Vending Machine Route: Due Diligence Checklist',
    metaDescription: 'Use a practical due-diligence checklist before buying a vending machine route, covering locations, sales evidence, machines, agreements and route workload.'
  },
  '/manufacturing-supervision/manufacturing-shift-briefing-and-handover-checklist/': {
    seoTitle: 'Shift Handover Checklist for Manufacturing Supervisors',
    metaDescription: 'Use a manufacturing shift-handover checklist to pass on safety, quality, production, staffing, downtime, maintenance and unresolved actions clearly.'
  },
  '/beginner-telescope-observing/telescope-eyepiece-magnification-for-beginners/': {
    seoTitle: 'Telescope Eyepiece Magnification Chart & Beginner Guide',
    metaDescription: 'Calculate telescope magnification from focal length and eyepiece size, compare useful powers and choose eyepieces without chasing empty magnification.'
  },
  '/property-manager-ai/property-manager-ai-prompt-formula/': {
    seoTitle: 'AI Prompts for Property Managers: Reusable Prompt Formula',
    metaDescription: 'Build safer, more useful AI prompts for property management with a reusable structure for task, context, constraints, source facts and review.'
  },
  '/property-manager-ai/tenant-data-privacy-for-ai-prompts/': {
    seoTitle: 'Tenant Data Privacy for AI Prompts: Property Manager Checklist',
    metaDescription: 'Reduce unnecessary tenant and applicant data before using AI for property-management drafting with a practical privacy-minimization checklist.'
  },
  '/hr-ai/hr-ai-prompt-formula/': {
    seoTitle: 'AI Prompts for HR: A Reusable Prompt Formula',
    metaDescription: 'Build reusable AI prompts for HR work with a controlled structure for task, context, constraints, source information, output and human review.'
  },
  '/construction-estimating/measured-vs-purchase-quantity-construction/': {
    seoTitle: 'Measured vs Purchase Quantity in Construction Estimating',
    metaDescription: 'Understand measured quantity versus purchase quantity in construction estimates and account for waste, pack sizes, lengths, sheets and ordering units.'
  }
};
