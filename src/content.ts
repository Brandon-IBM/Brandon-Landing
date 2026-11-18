/** Edit all page copy and metadata here. */
export const content = {
  metadata: {
    title: 'Brandon Nova / IBM Consulting / Internal',
    description:
      'An internal IBM engineering profile: utility data engineering, compliance monitoring, machine learning, and application development.',
  },
  identity: {
    name: 'Brandon Nova',
    organization: 'IBM Consulting',
    classification: 'Internal',
  },
  accessibility: {
    skip: 'Skip to content',
  },
  hero: {
    headline: ['I build tools that make', 'complex data work simpler.'],
    description:
      'Experience across utility data engineering, compliance monitoring, and internal software development.',
  },
  work: {
    label: 'Projects',
    helpLabel: 'How this helps',
    items: [
      {
        number: '01',
        name: 'AEP',
        title: 'Data Engineering & Automation',
        description:
          'Built a JSON generator; worked on power-device ETL transformations and validation. Investigated queues, audit logs, and results tables.',
        help: 'Automate data work, improve validation, and troubleshoot pipelines.',
      },
      {
        number: '02',
        name: 'Orlando Utilities Commission',
        title: 'Compliance & Machine Learning',
        description:
          'Worked in compliance and developed a machine-learning model to monitor transactions.',
        help: 'Identify transaction patterns and support compliance review.',
      },
      {
        number: '03',
        name: 'IBM Social',
        title: 'Internal Application Development',
        description:
          'Built an application to search associate skills, certifications, experience, and availability. Developed backend integrations; worked toward enterprise deployment.',
        help: 'Make operational information easier to find and use.',
      },
    ],
  },
  contribution: {
    heading: 'Where I can contribute.',
    capabilities: [
      {
        title: 'Data Engineering',
        description: 'ETL, data validation, transformations, and automation.',
      },
      {
        title: 'Applied AI',
        description: 'Machine learning, data analysis, and focused AI prototypes.',
      },
      {
        title: 'Software Development',
        description: 'Internal applications, integrations, and workflow tools.',
      },
    ],
  },
} as const
