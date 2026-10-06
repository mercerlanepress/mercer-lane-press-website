import type { Book } from './books';

export const smallFleetMaintenanceOperatingManual: Book = {
  slug: 'the-small-fleet-maintenance-operating-manual',
  title: 'The Small Fleet Maintenance Operating Manual',
  subtitle: 'A Practical System for Preventive Maintenance, Service Scheduling, Repair Costs, Vehicle Records and Keeping 3-50 Vehicles Organized',
  author: 'Warren Holtby',
  authorSlug: 'warren-holtby',
  publisher: 'Mercer Lane Press',
  description: 'A practical administrative system for small fleets that connects vehicle records, source-backed maintenance rules, due and overdue scheduling, defect and repair actions, service history, repair costs, downtime, review routines, and a 30-day implementation plan.',
  cover: '/images/books/The_Small_Fleet_Maintenance_Front_Cover.jpg',
  coverReady: true,
  purchaseUrl: 'https://www.amazon.com/dp/B0HM33JJL6',
  intendedReader: 'Owners, managers, administrators, and maintenance coordinators responsible for roughly 3-50 vehicles who need a dependable way to keep maintenance information, mileage, defects, repair approvals, invoices, costs, and follow-up from becoming scattered across memory, messages, calendars, and disconnected files.',
  problems: [
    'Maintenance dates, mileage readings, invoices, defects, bookings, and vehicle details living in separate places with no single view of what needs attention next',
    'Scheduled work appearing current even when mileage is stale, a source is missing, or a date-based trigger has been overlooked',
    'Driver observations, repair recommendations, quotes, approvals, and completed work failing to become owned actions with closure evidence',
    'Repair spend being tracked without enough context to separate planned work, unplanned events, downtime, repeat problems, and useful replacement-review evidence',
    'A spreadsheet becoming difficult to trust because formulas, input fields, statuses, source references, and data-quality checks have not been designed as one system'
  ],
  topics: [
    'Master vehicle register and stable Unit IDs',
    'Source-backed maintenance rule register',
    'Date, mileage, and mixed-trigger service scheduling',
    'DATA ISSUE, OVERDUE, DUE SOON, BOOKED, and CURRENT status logic',
    'Mileage collection, freshness, and validation',
    'Defect intake, next actions, repair authorization, and closure',
    'Service history, document evidence, repair costs, and downtime',
    'Monthly and quarterly exception reviews',
    'Repair-versus-replace evidence packs',
    'Spreadsheet architecture, formula testing, and software-review triggers',
    'A staged 30-day implementation plan'
  ],
  outcomes: [
    'A connected set of vehicle, maintenance-rule, schedule, defect/action, service-cost, and review records',
    'A weekly exception view that surfaces due, overdue, stale-data, open-action, and out-of-service items without treating unknown data as current',
    'A repeatable repair workflow with an owner, next action, target date, approval trail, completion evidence, and the correct next-due reset',
    'More decision-useful cost and downtime history for spotting repeat problems and preparing repair-versus-replace reviews',
    'A practical route from an informal maintenance process to a documented Version 1 system in 30 days'
  ],
  themes: ['small fleet maintenance','preventive maintenance scheduling','fleet maintenance spreadsheet','vehicle maintenance records','repair cost tracking','fleet downtime','repair authorization','fleet maintenance dashboard','repair versus replace','small business fleet'],
  hubSlug: 'small-fleet-maintenance',
  hubLabel: 'Small fleet maintenance guides'
};
