import { content } from './content'

function SelectedWork() {
  return (
    <section className="selected-work" aria-labelledby="work-heading">
      <h2 id="work-heading">{content.work.heading}</h2>
      <ol className="work-list">
        {content.work.items.map((work) => (
          <li className="work-row grid" key={work.number}>
            <div className="work-index">
              <span>{work.number}</span>
              <span className="index-slash" aria-hidden="true">/</span>
              <span>{work.name}</span>
            </div>
            <div className="work-detail">
              <h3>{work.headline}{work.emphasis && <strong>{work.emphasis}</strong>}</h3>
              <p>{work.description}</p>
            </div>
            <span className={`work-status status-${work.type}`}>{work.status}</span>
          </li>
        ))}
      </ol>
    </section>
  )
}

function Contribution() {
  return (
    <section className="contribution grid" aria-labelledby="contribution-heading">
      <div className="contribution-intro">
        <h2 id="contribution-heading">{content.contribution.heading}</h2>
        <p>{content.contribution.description}</p>
      </div>
      <div className="contribution-detail">
        <dl className="capability-list grid">
          {content.contribution.capabilities.map((capability) => (
            <div className="capability-row grid" key={capability.title}>
              <dt>{capability.title}</dt>
              <dd>{capability.description}</dd>
            </div>
          ))}
        </dl>
        <p className="possibilities">{content.contribution.possibilities}</p>
      </div>
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
          <div className="hero-labels flex justify-between">
            <p className="eyebrow">{content.hero.label}</p>
            <p className="audience">{content.hero.audience}</p>
          </div>
          <h1 id="hero-heading">
            {content.hero.headline.map((line, index) => (
              <span className="block" key={line}>{index > 0 && ' '}{line}</span>
            ))}
          </h1>
          <p className="hero-description">{content.hero.description}</p>
        </section>

        <SelectedWork />
        <Contribution />

        <section className="closing grid" aria-labelledby="closing-heading">
          <div>
            <h2 id="closing-heading">{content.closing.headline}</h2>
            <p className="closing-description">{content.closing.description}</p>
          </div>
          <address className="contact-details">
            <p className="contact-name">{content.identity.name}</p>
            <p>{content.identity.organization}</p>
            {content.contact.email && (
              <a href={`mailto:${content.contact.email}`}>{content.contact.email}</a>
            )}
          </address>
        </section>
      </main>
    </div>
  )
}
