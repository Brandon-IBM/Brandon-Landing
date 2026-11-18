import { content } from './content'

function SelectedWork() {
  return (
    <section className="selected-work" aria-label={content.work.label}>
      <ol className="work-list grid">
        {content.work.items.map((work) => (
          <li key={work.number}>
            <article className="project flex flex-col" aria-labelledby={`project-${work.number}`}>
              <p className="project-name flex items-baseline">
                <span className="project-number">{work.number}</span>
                <span>{work.name}</span>
              </p>
              <h2 id={`project-${work.number}`}>{work.title}</h2>
              <p className="project-description">{work.description}</p>
              <p className="project-help">
                <span className="help-label block">{content.work.helpLabel}</span>
                <span className="help-copy block">{work.help}</span>
              </p>
            </article>
          </li>
        ))}
      </ol>
    </section>
  )
}

function Contribution() {
  return (
    <section className="contribution grid" aria-labelledby="contribution-heading">
      <h2 id="contribution-heading">{content.contribution.heading}</h2>
      <dl className="capability-list grid">
        {content.contribution.capabilities.map((capability) => (
          <div className="capability-row grid" key={capability.title}>
            <dt>{capability.title}</dt>
            <dd>{capability.description}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export default function App() {
  return (
    <div className="page-shell mx-auto">
      <a className="skip-link" href="#main">{content.accessibility.skip}</a>

      <header className="masthead flex items-center justify-between">
        <p className="masthead-name">{content.identity.name}</p>
        <p className="masthead-context">
          {content.identity.organization}<span className="context-slash">/</span>{content.identity.classification}
        </p>
      </header>

      <main id="main" tabIndex={-1}>
        <section className="hero" aria-labelledby="hero-heading">
          <h1 id="hero-heading">
            {content.hero.headline.map((line, index) => (
              <span className="block" key={line}>{index > 0 && ' '}{line}</span>
            ))}
          </h1>
          <p className="hero-description">{content.hero.description}</p>
        </section>

        <SelectedWork />
        <Contribution />
      </main>
    </div>
  )
}
