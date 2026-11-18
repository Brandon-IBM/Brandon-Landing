/** Edit all page copy and metadata here. */
export const content = {
  metadata: {
    title: 'Brandon Nova / IBM Consulting / Internal',
    description:
      'Internal capability brief for the Southwest Gas account team. Working software, rapid product development, and engineering opportunities.',
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
    label: 'Data Engineering / Applied AI',
    audience: 'Southwest Gas account team',
    headline: ['I turn ideas into', 'working software.'],
    description:
      'I build internal tools, data workflows, and AI-enabled prototypes. I also work with IBM account teams to identify problems worth solving.',
  },
  work: {
    heading: 'Selected work.',
    items: [
      {
        number: '01',
        name: 'IBM Social',
        headline: 'Built an internal talent discovery platform.',
        emphasis: '',
        description:
          'Search across associate skills, experience, and availability. Backend engineering, data integration, and enterprise deployment preparation.',
        status: 'Working application',
        type: 'software',
      },
      {
        number: '02',
        name: 'Soverflow',
        headline: 'Built an MVP in ',
        emphasis: '9 days.',
        description:
          'Co-built a talent marketplace while working full-time. Owned backend development for projects, profiles, discovery, and matching.',
        status: 'Working MVP',
        type: 'software',
      },
      {
        number: '03',
        name: 'IBM Account Engagements',
        headline: 'Turned outreach into engineering opportunities.',
        emphasis: '',
        description:
          'Partner outreach led to technical discovery, repository access, and an IBM Financial Services AI projects meeting invitation.',
        status: 'Active engagements',
        type: 'opportunity',
      },
    ],
  },
  contribution: {
    heading: 'Where I can contribute.',
    description:
      'I can help investigate a workflow and test whether software or AI can improve it.',
    capabilities: [
      {
        title: 'Operational Data',
        description: 'Validation, reconciliation, integrations, and automation.',
      },
      {
        title: 'Engineering Prototypes',
        description: 'Internal tools and AI-assisted proofs of concept.',
      },
      {
        title: 'Technical Discovery',
        description: 'Workflow investigation, requirements, and stakeholder testing.',
      },
    ],
    possibilities:
      'Potential starting points: project documentation, pipeline compliance evidence, and regulatory information workflows, subject to client needs and access.',
  },
} as const
