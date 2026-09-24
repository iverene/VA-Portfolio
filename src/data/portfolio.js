export const CATEGORIES = [
  "Records & Documentation Management",
  "Data & Spreadsheet Management",
  "Inbox Management",
  "Calendar Management",
  "Business Communications Management",
];

export const portfolioProjects = [
  // ---- Records & Documentation Management (7) ----
  {
    id: "file-organization-system",
    title: "Administrative File Organization System",
    category: "Records & Documentation Management",
    type: "PNG",
    description:
      "A structured digital filing system with categorized folders and standardized naming so recurring records are easy to find.",
    objective:
      "Turn a scattered set of practice records into a clear, maintainable folder structure.",
    process:
      "Categorized documents by function, standardized file names, separated recurring records from one-off materials, and arranged a logical folder hierarchy.",
    outcome:
      "Records are organized, accessible, and easy to maintain going forward.",
    skills: ["File Organization", "Documentation", "Records Management"],
    tools: ["Google Drive", "Google Docs"],
    preview: "/previews/file-organization/file-organization-01.png",
    gallery: [
      "/previews/file-organization/file-organization-02.png",
      "/previews/file-organization/file-organization-03.png",
      "/previews/file-organization/file-organization-04.png",
      "/previews/file-organization/file-organization-05.png",
      "/previews/file-organization/file-organization-06.png",
      "/previews/file-organization/file-organization-07.png",
    ],
    note: "Referenced from actual documents prepared for a student organization. Names and sensitive details have been redacted for privacy.",
    status: "Practice Project",
  },
  {
    id: "event-proposal",
    title: "Event Proposal Document",
    category: "Records & Documentation Management",
    type: "PDF",
    description:
      "A formally structured event proposal prepared as an administrative practice document.",
    objective:
      "Practice drafting a complete, well-organized proposal a business could review and approve.",
    process:
      "Outlined objectives and requirements, organized sections logically, and formatted the document for clear review.",
    outcome:
      "A clean proposal document that is easy to read, file, and reference.",
    skills: ["Documentation", "Administrative Coordination"],
    tools: ["Google Docs"],
    file: "/documents/records/01-event-proposal.pdf",
    preview: "/previews/records/01-event-proposal-images-0.png",
    gallery: [
      "/previews/records/01-event-proposal-images-1.png",
      "/previews/records/01-event-proposal-images-2.png",
      "/previews/records/01-event-proposal-images-3.png",
      "/previews/records/01-event-proposal-images-4.png",
    ],
    note: "Referenced from actual documents prepared for a student organization. Names and sensitive details have been redacted for privacy.",
    status: "Practice Project",
  },
  {
    id: "meeting-minutes",
    title: "Meeting Minutes",
    category: "Records & Documentation Management",
    type: "PDF",
    description:
      "Formal meeting minutes capturing discussion points, decisions, and action items.",
    objective:
      "Practice recording a simulated meeting so decisions and next steps are documented.",
    process:
      "Structured attendees, agenda items, and discussion into minutes with clearly listed action items.",
    outcome:
      "Meeting outcomes are documented and easy to follow up on.",
    skills: ["Meeting Documentation", "Documentation"],
    tools: ["Google Docs"],
    file: "/documents/records/02-meeting-minutes.pdf",
    preview: "/previews/records/02-meeting-minutes-images-0.png",
    gallery: ["/previews/records/02-meeting-minutes-images-1.png"],
    note: "Referenced from actual documents prepared for a student organization. Names and sensitive details have been redacted for privacy.",
    status: "Practice Project",
  },
  {
    id: "request-letter",
    title: "Formal Request Letter",
    category: "Records & Documentation Management",
    type: "PDF",
    description:
      "A professional request letter prepared as an administrative correspondence exercise.",
    objective:
      "Practice writing a clear, courteous formal request suitable for business filing.",
    process:
      "Drafted the request with proper letter structure, specific details, and a professional tone.",
    outcome:
      "Correspondence that is clear, professional, and ready to file as a record.",
    skills: ["Documentation", "Business Correspondence"],
    tools: ["Google Docs"],
    file: "/documents/records/03-request-letter.pdf",
    preview: "/previews/records/03-request-letter.png",
    gallery: [],
    note: "Referenced from actual documents prepared for a student organization. Names and sensitive details have been redacted for privacy.",
    status: "Practice Project",
  },
  {
    id: "excuse-letter",
    title: "Formal Excuse Letter",
    category: "Records & Documentation Management",
    type: "PDF",
    description:
      "A concise formal excuse letter prepared as an administrative correspondence exercise.",
    objective:
      "Practice drafting brief, professional correspondence that states facts clearly.",
    process:
      "Kept the message short and structured with proper formatting and a respectful tone.",
    outcome:
      "A professional letter that communicates the necessary information without excess.",
    skills: ["Documentation", "Business Correspondence"],
    tools: ["Google Docs"],
    file: "/documents/records/04-excuse-letter.pdf",
    preview: "/previews/records/04-excuse-letter-images-0.png",
    gallery: ["/previews/records/04-excuse-letter-images-1.png"],
    note: "Referenced from actual documents prepared for a student organization. Names and sensitive details have been redacted for privacy.",
    status: "Practice Project",
  },
  {
    id: "memorandum",
    title: "Internal Memorandum",
    category: "Records & Documentation Management",
    type: "PDF",
    description:
      "An internal memorandum prepared to communicate information within an organization.",
    objective:
      "Practice writing internal documentation that is direct and easy to act on.",
    process:
      "Organized the memo with a clear subject, background, and expected actions.",
    outcome:
      "Internal information is communicated clearly and kept on record.",
    skills: ["Documentation", "Administrative Coordination"],
    tools: ["Google Docs"],
    file: "/documents/records/05-memorandum.pdf",
    preview: "/previews/records/05-memorandum.png",
    gallery: [],
    note: "Referenced from actual documents prepared for a student organization. Names and sensitive details have been redacted for privacy.",
    status: "Practice Project",
  },
  {
    id: "resolution",
    title: "Organizational Resolution",
    category: "Records & Documentation Management",
    type: "PDF",
    description:
      "A formal resolution document prepared as a records and documentation exercise.",
    objective:
      "Practice preparing an official-format document with precise, consistent wording.",
    process:
      "Followed formal resolution structure and reviewed wording carefully for accuracy.",
    outcome:
      "A properly formatted record suitable for organizational filing.",
    skills: ["Documentation", "Records Management"],
    tools: ["Google Docs"],
    file: "/documents/records/06-resolution.pdf",
    preview: "/previews/records/06-resolution.png",
    gallery: [],
    note: "Referenced from actual documents prepared for a student organization. Names and sensitive details have been redacted for privacy.",
    status: "Practice Project",
  },

  // ---- Data & Spreadsheet Management (6) ----
  {
    id: "client-database",
    title: "Client Database — Data Cleaning & Organization",
    category: "Data & Spreadsheet Management",
    type: "XLSX",
    description:
      "A cleaned and standardized client contact database with duplicates removed and consistent formatting.",
    objective: "Turn scattered contact records into a clean, filterable database.",
    process:
      "Standardized text casing and date formats, removed duplicates, applied data validation, sorting, and table formatting.",
    outcome: "Contact data is easier to search, filter, and maintain.",
    skills: ["Data Entry", "Data Cleaning", "Sorting", "Filtering"],
    tools: ["Microsoft Excel"],
    preview: "/previews/spreadsheet/client-database.png",
    gallery: [],
    file: "/documents/spreadsheet/01-client-database-data-cleaning.xlsx",
    status: "Practice Project",
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker — Basic Formulas & Reporting",
    category: "Data & Spreadsheet Management",
    type: "XLSX",
    description:
      "A practice expense tracker with formula-based totals and organized spending categories.",
    objective:
      "Build a simple tracker that totals practice expenses automatically by category.",
    process:
      "Structured entry rows by category, added formulas for subtotals and totals, and applied consistent formatting.",
    outcome: "Spending records are organized with totals that update automatically.",
    skills: ["Data Entry", "Spreadsheet Management", "Deadline Tracking"],
    tools: ["Microsoft Excel"],
    preview: "/previews/spreadsheet/expense-tracker.png",
    gallery: [],
    file: "/documents/spreadsheet/02-expense-tracker-basic-formulas.xlsx",
    status: "Practice Project",
  },
  {
    id: "invoice-payment-tracker",
    title: "Invoice & Payment Tracker",
    category: "Data & Spreadsheet Management",
    type: "Google Sheets",
    description:
      "A practice invoice tracker showing invoice records with payment statuses in one view.",
    objective:
      "Keep simulated invoice and payment records visible so nothing slips through.",
    process:
      "Organized invoice rows with dates, amounts, and status values, plus filtering for quick review.",
    outcome: "Payment statuses are easy to scan, sort, and follow up on.",
    skills: ["Data Entry", "Follow-Up Management", "Sorting", "Filtering"],
    tools: ["Google Sheets"],
    preview: "/previews/spreadsheet/invoice-tracker-01.png",
    gallery: ["/previews/spreadsheet/invoice-tracker-02.png"],
    externalUrl:
      "https://docs.google.com/spreadsheets/d/15Vs8ZGWnmLQiKGO-r_GX_qAhgmzC07dUecEtI1C_qOc/edit?usp=sharing",
    status: "Practice Project",
  },
  {
    id: "client-follow-up-tracker",
    title: "Client Follow-Up Tracker — Lookup & Conditional Formatting",
    category: "Data & Spreadsheet Management",
    type: "XLSX",
    description:
      "A practice follow-up tracker using lookups and conditional formatting to flag pending items.",
    objective:
      "Make simulated follow-ups visible at a glance instead of buried in rows.",
    process:
      "Built lookup references across sheets and applied conditional formatting to highlight pending and overdue items.",
    outcome: "Follow-up priorities stand out visually and are easier to act on.",
    skills: ["Follow-Up Management", "Data Cleaning", "Spreadsheet Management"],
    tools: ["Microsoft Excel"],
    preview: "/previews/spreadsheet/follow-up-tracker-01.png",
    gallery: ["/previews/spreadsheet/follow-up-tracker-02.png"],
    file: "/documents/spreadsheet/04-client-follow-up-tracker-lookup-and-conditional-formatting.xlsx",
    status: "Practice Project",
  },
  {
    id: "lead-crm-tracker",
    title: "Lead & CRM Tracker",
    category: "Data & Spreadsheet Management",
    type: "Google Sheets",
    description:
      "A practice lead tracker organizing simulated contacts by stage, source, and next step.",
    objective:
      "Keep simulated leads structured so each one has a clear status and next action.",
    process:
      "Organized lead rows with stage and source fields, status values, and next-step notes for review.",
    outcome: "Lead information is structured and ready for consistent follow-up.",
    skills: ["Data Entry", "Follow-Up Management", "Sorting", "Filtering"],
    tools: ["Google Sheets"],
    preview: "/previews/spreadsheet/lead-tracker-01.png",
    gallery: ["/previews/spreadsheet/lead-tracker-02.png"],
    externalUrl:
      "https://docs.google.com/spreadsheets/d/1lI-GKh2UGVZBcXhz4H172PVfN8s7KQYZlFAZswrB6Fs/edit?usp=sharing",
    status: "Practice Project",
  },
  {
    id: "survey-dashboard",
    title: "Survey Results Dashboard",
    category: "Data & Spreadsheet Management",
    type: "XLSM",
    description:
      "A practice survey workbook with organized responses and a summary dashboard view.",
    objective:
      "Turn simulated survey responses into a readable summary with charts and totals.",
    process:
      "Cleaned response data, structured summary tables, and built a dashboard sheet with charts.",
    outcome: "Survey results are summarized visually and easier to interpret.",
    skills: ["Data Cleaning", "Spreadsheet Management", "Sorting", "Filtering"],
    tools: ["Microsoft Excel"],
    preview: "/previews/spreadsheet/dashboard-01.png",
    gallery: ["/previews/spreadsheet/dashboard-02.png"],
    file: "/documents/spreadsheet/06-survey-dashboard.xlsm",
    status: "Practice Project",
  },

  // ---- Inbox Management (3) ----
  {
    id: "gmail-inbox-organization",
    title: "Gmail Inbox Organization & Email Workflow",
    category: "Inbox Management",
    type: "PNG",
    description:
      "A simulated Gmail workflow showing labels, filters, stars, and priority markers that keep email actionable.",
    objective:
      "Demonstrate an inbox system where important emails are easy to identify and follow up on.",
    process:
      "Classified sample emails by type, applied labels and filters, used stars and importance markers, and archived processed items.",
    outcome:
      "The inbox stays triaged, searchable, and focused on what needs action.",
    skills: ["Inbox Organization", "Follow-Up Management", "Workflow Organization"],
    tools: ["Gmail"],
    preview: "/previews/inbox-management/inbox-management-inbox.png",
    gallery: [
      "/previews/inbox-management/inbox-management-action-required.png",
      "/previews/inbox-management/inbox-management-filter.png",
      "/previews/inbox-management/inbox-management-follow-up.png",
      "/previews/inbox-management/inbox-management-information.png",
      "/previews/inbox-management/inbox-management-starred.png",
      "/previews/inbox-management/inbox-management-urgent.png",
    ],
    status: "Practice Project",
  },
  {
    id: "professional-email-collection",
    title: "Professional Email Collection",
    category: "Inbox Management",
    type: "PNG",
    description:
      "A set of practice emails covering follow-ups, confirmations, requests, and updates in a consistent professional style.",
    objective:
      "Show clear, professional email writing across common business situations.",
    process:
      "Drafted each sample with a clear subject, purpose-first structure, and a specific next step or closing.",
    outcome: "Everyday business emails stay clear, polite, and easy to respond to.",
    skills: ["Professional Email Writing", "Business Correspondence", "Follow-Up Communication"],
    tools: ["Gmail"],
    preview: "/previews/inbox-management/email-sample-follow-up.png",
    gallery: [
      "/previews/inbox-management/email-sample-apology.png",
      "/previews/inbox-management/email-sample-clarification.png",
      "/previews/inbox-management/email-sample-confirmation.png",
      "/previews/inbox-management/email-sample-invitation.png",
      "/previews/inbox-management/email-sample-reminder.png",
      "/previews/inbox-management/email-sample-reply.png",
      "/previews/inbox-management/email-sample-request.png",
      "/previews/inbox-management/email-sample-thank-you.png",
      "/previews/inbox-management/email-sample-update.png",
    ],
    status: "Practice Project",
  },
  {
    id: "email-template-set",
    title: "Reusable Email Template Set",
    category: "Inbox Management",
    type: "PNG",
    description:
      "A set of reusable practice templates for follow-ups, requests, updates, and issue resolution.",
    objective:
      "Provide ready-to-adapt templates that keep routine communication consistent.",
    process:
      "Identified recurring email situations, drafted a template for each, and left clear fields for names, dates, and details.",
    outcome: "Routine emails can be sent faster without losing professionalism.",
    skills: ["Professional Email Writing", "Follow-Up Communication", "Workflow Organization"],
    tools: ["Gmail", "Google Docs"],
    preview: "/previews/inbox-management/email-template-follow-up.png",
    gallery: [
      "/previews/inbox-management/email-template-clarification.png",
      "/previews/inbox-management/email-template-confimation.png",
      "/previews/inbox-management/email-template-issue.png",
      "/previews/inbox-management/email-template-request.png",
      "/previews/inbox-management/email-template-update.png",
    ],
    status: "Practice Project",
  },

  // ---- Calendar Management (2) ----
  {
    id: "weekly-administrative-calendar",
    title: "Weekly Administrative Calendar",
    category: "Calendar Management",
    type: "PNG",
    description:
      "A simulated weekly calendar with color-coded meetings, task blocks, and administrative time.",
    objective:
      "Show how a busy practice week stays visible with meetings, tasks, and deadlines organized.",
    process:
      "Scheduled meetings and task blocks, categorized events with colors, and reserved time for administrative work.",
    outcome: "The week is planned visibly with priorities easy to see at a glance.",
    skills: ["Calendar Management", "Task Management", "Deadline Tracking"],
    tools: ["Google Calendar"],
    preview: "/previews/calendar-management/calendar-management-01.png",
    gallery: [
      "/previews/calendar-management/calendar-management-02.png",
      "/previews/calendar-management/calendar-management-03.png",
      "/previews/calendar-management/calendar-management-04.png",
    ],
    status: "Practice Project",
  },
  {
    id: "project-deadline-coordination",
    title: "Project Deadline Coordination",
    category: "Calendar Management",
    type: "PNG",
    description:
      "A simulated project calendar coordinating milestones, preparation time, and follow-up dates.",
    objective:
      "Demonstrate deadline tracking where milestones and prep work stay visible together.",
    process:
      "Mapped milestones and deadlines, added preparation blocks, and scheduled follow-up checkpoints.",
    outcome: "Deadlines and preparation stay coordinated so fewer items slip.",
    skills: ["Calendar Management", "Deadline Tracking", "Project Coordination"],
    tools: ["Google Calendar"],
    preview: "/previews/calendar-management/calendar-management-05.png",
    gallery: [
      "/previews/calendar-management/calendar-management-06.png",
      "/previews/calendar-management/calendar-management-07.png",
      "/previews/calendar-management/calendar-management-08.png",
    ],
    status: "Practice Project",
  },

  // ---- Business Communications Management (5) ----
  {
    id: "business-letterhead",
    title: "Business Letterhead",
    category: "Business Communications Management",
    type: "PNG",
    description:
      "A clean business letterhead layout prepared as a professional communication practice piece.",
    objective:
      "Create a polished, reusable letterhead that gives correspondence a consistent identity.",
    process:
      "Designed a simple header layout with balanced spacing, readable type, and room for body content.",
    outcome: "Business letters start from a consistent, professional foundation.",
    skills: ["Business Correspondence", "Documentation"],
    tools: ["Canva"],
    preview: "/previews/business-communications/01-business-letterhead.png",
    gallery: [],
    status: "Practice Project",
  },
  {
    id: "internal-announcement",
    title: "Internal Announcement",
    category: "Business Communications Management",
    type: "PNG",
    description:
      "A clear internal announcement layout for sharing updates within an organization.",
    objective:
      "Present a simulated internal update so key details are scannable in seconds.",
    process:
      "Organized headline, key details, and next steps into a clean visual hierarchy.",
    outcome: "Internal updates are easy to read and act on.",
    skills: ["Business Correspondence", "Documentation"],
    tools: ["Canva"],
    preview: "/previews/business-communications/03-internal-announcement.png",
    gallery: [],
    status: "Practice Project",
  },
  {
    id: "company-report",
    title: "Company Report Layout",
    category: "Business Communications Management",
    type: "PNG",
    description:
      "A structured company report layout prepared as a business communication practice piece.",
    objective:
      "Organize simulated business information into a report that is easy to review.",
    process:
      "Arranged sections with headings, spacing, and visual order so findings read clearly.",
    outcome: "Report content is presented professionally and is easy to navigate.",
    skills: ["Business Correspondence", "Documentation"],
    tools: ["Canva"],
    preview: "/previews/business-communications/04-company-report.png",
    gallery: [],
    status: "Practice Project",
  },
  {
    id: "meeting-agenda-template",
    title: "Meeting Agenda Template",
    category: "Business Communications Management",
    type: "PNG",
    description:
      "A reusable meeting agenda template with space for topics, owners, and action items.",
    objective:
      "Provide an agenda format that keeps simulated meetings focused and documented.",
    process:
      "Structured topic rows with time, owner, and notes fields plus an action-item section.",
    outcome: "Meetings can be planned and recorded with one consistent template.",
    skills: ["Meeting Documentation", "Administrative Coordination"],
    tools: ["Canva"],
    preview: "/previews/business-communications/05-meeting-agenda-template.png",
    gallery: [],
    status: "Practice Project",
  },
  {
    id: "company-presentation",
    title: "Company Presentation",
    category: "Business Communications Management",
    type: "PDF",
    description:
      "A practice company presentation prepared to communicate business information clearly.",
    objective:
      "Organize simulated business content into slides that are clear and professional.",
    process:
      "Structured the deck with a logical flow, concise slide copy, and consistent formatting.",
    outcome: "Business information is presented in a clear, organized slide format.",
    skills: ["Business Correspondence", "Documentation"],
    tools: ["Canva"],
    file: "/documents/business-communications/02-company-presentation.pdf",
    preview: "/previews/business-communications/02-company-presentation-01.png",
    gallery: [
      "/previews/business-communications/02-company-presentation-02.png",
      "/previews/business-communications/02-company-presentation-03.png",
      "/previews/business-communications/02-company-presentation-04.png",
      "/previews/business-communications/02-company-presentation-05.png",
      "/previews/business-communications/02-company-presentation-06.png",
    ],
    status: "Practice Project",
  },
];
