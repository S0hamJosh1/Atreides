import { LiquidBackground } from './components/LiquidBackground';
import { HeroBgText } from './components/HeroBgText';

const navigation = [
  { href: '#problem', label: 'Problem' },
  { href: '#technology', label: 'Technology' },
  { href: '#use-cases', label: 'Use Cases' },
  { href: '#pilot', label: 'Pilot Path' },
];

const headerNavigation = [
  { href: '#technology', label: 'Technology', accent: true },
  { href: '#use-cases', label: 'Solutions' },
  { href: '#pilot', label: 'Deployment' },
];

const problemCards = [
  {
    title: 'Preventable Failures',
    copy:
      'Critical machinery and structural issues often surface only after damage compounds, forcing operators into reactive repairs and unplanned downtime.',
  },
  {
    title: 'Fragmented Visibility',
    copy:
      'Vessels produce islands of operational data, but crews, operators, and insurers rarely get a continuous system-level picture of risk.',
  },
  {
    title: 'Integration Drag',
    copy:
      'Legacy solutions tend to require invasive integrations, long approvals, and expensive installs that slow adoption before value is proven.',
  },
];

const architectureLayers = [
  {
    step: '01',
    title: 'Hardware Layer',
    copy:
      'A rugged, modular sensor suite attaches without cutting into existing ship systems or extending yard time.',
    points: [
      'IMU, vibration, current, temperature, pressure, fuel, and redundant GNSS',
      'Harsh-environment hardware designed for offshore reliability',
      'Fast installs with minimal approval friction',
    ],
  },
  {
    step: '02',
    title: 'Data Layer',
    copy:
      'Shipboard telemetry is fused with AIS, weather, and geospatial context to create a richer operating picture.',
    points: [
      'Streaming telemetry, GPS coordinates, AIS, and marine weather feeds',
      'VHF, UHF, and IoT transport pathways for resilient uplink strategies',
      'Historical storage for trend analysis and model tuning',
    ],
  },
  {
    step: '03',
    title: 'Digital Twin Layer',
    copy:
      'A live virtual vessel mirrors the physical asset, translating raw inputs into health, stress, and performance states.',
    points: [
      'Engine, structural, electrical, and environmental monitoring',
      'Live dashboards and historical playback',
      'Contextual alerts tied to vessel state instead of isolated thresholds',
    ],
  },
  {
    step: '04',
    title: 'Intelligence Layer',
    copy:
      'Predictive models detect anomalies early, forecast failures, and surface actions that reduce downtime and operating cost.',
    points: [
      'Predictive maintenance and anomaly detection',
      'Failure prediction and efficiency optimization',
      'Fleet-level benchmarking for operators and insurers',
    ],
  },
];

const sensorSuite = [
  'Motion and orientation',
  'Engine vibration signatures',
  'Clamp-on electrical load',
  'Thermal drift monitoring',
  'Pressure trend capture',
  'Fuel behavior tracking',
  'Redundant positioning',
];

const intelligenceLoop = [
  {
    title: 'Sense',
    copy: 'Capture operational behavior without invasive retrofits.',
  },
  {
    title: 'Synchronize',
    copy: 'Fuse onboard telemetry with environmental and vessel traffic context.',
  },
  {
    title: 'Simulate',
    copy: 'Maintain a digital twin that reflects what the ship is doing now.',
  },
  {
    title: 'Surface',
    copy: 'Alert crews, operators, and insurers before risk becomes a claim.',
  },
];

const useCases = [
  {
    title: 'Failure Prevention',
    copy:
      'Detect abnormal vibration and heat signatures early enough to intervene before machinery reaches a critical state.',
  },
  {
    title: 'Fuel and Efficiency',
    copy:
      'Compare load, sea state, and route conditions to expose avoidable fuel burn and operational drag.',
  },
  {
    title: 'Insurance Risk Reduction',
    copy:
      'Provide continuous, evidence-backed risk metrics that support smarter underwriting and fewer claim surprises.',
  },
  {
    title: 'Fleet Command',
    copy:
      'Give shore teams a centralized view across vessels, making maintenance prioritization and exceptions easier to act on.',
  },
];

const businessOutcomes = [
  'Reduction in preventable claims and insurance losses',
  'Lower maintenance cost through predictive interventions',
  'Improved vessel uptime and operational continuity',
  'Stronger decision-making for operators, insurers, and technical managers',
];

const comparisonRows = [
  ['Installation', 'Intrusive', 'Non-intrusive'],
  ['Cost', 'High', 'Lower, modular rollout'],
  ['Deployment Time', 'Long', 'Fast pilot-to-fleet path'],
  ['Flexibility', 'Low', 'Adaptable across vessel types'],
  ['Approval Path', 'Difficult', 'Easier due to lighter footprint'],
];

const deploymentSteps = [
  {
    phase: 'Pilot Vessel',
    copy:
      'Instrument a first ship to validate sensor reliability, transmission stability, and baseline insights.',
  },
  {
    phase: 'Twin Calibration',
    copy:
      'Tune the digital model with live voyage data, historical events, and maintenance context.',
  },
  {
    phase: 'ROI Validation',
    copy:
      'Measure reduced downtime, earlier interventions, and evidence for underwriting and maintenance gains.',
  },
  {
    phase: 'Fleet Expansion',
    copy:
      'Scale deployment vessel by vessel with standardized hardware kits and central monitoring workflows.',
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="section-heading__eyebrow">{eyebrow}</p>
      <h2 className="section-heading__title">{title}</h2>
      <p className="section-heading__description">{description}</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="site-shell">
      <main className="stack-main">
        <section className="hero" id="top">
          <header className="topbar">
            <div className="container topbar__inner">
              <a className="brand brand--header" href="#top" aria-label="Atreides home">
                <img
                  className="brand__logo"
                  src="/ship_logo_embedded.png"
                  alt=""
                  width={36}
                  height={36}
                />
              </a>

              <div className="topbar__cluster">
                <nav className="topbar__nav" aria-label="Primary">
                  {headerNavigation.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className={item.accent ? 'topbar__link topbar__link--accent' : 'topbar__link'}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>

                <span className="topbar__divider" aria-hidden="true" />

                <a
                  className="topbar__utility"
                  href="#technology"
                  aria-label="Jump to platform technology"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="7.25" />
                    <path d="M4.75 12H19.25" />
                    <path d="M12 4.75C14.6 7.1 14.6 16.9 12 19.25" />
                    <path d="M12 4.75C9.4 7.1 9.4 16.9 12 19.25" />
                  </svg>
                </a>

                <a className="button button--small button--solid topbar__cta" href="#pilot">
                  Get Started
                </a>
              </div>
            </div>
          </header>
          <LiquidBackground />
          <HeroBgText />
          <div className="hero__fade" aria-hidden="true" />
          <div className="container hero__inner">
            <div className="hero__copy">
              <h1 className="hero__title">
                The Digital Cartographer <span>of the Seas.</span>
              </h1>
              <p className="hero__lead">
                Non-intrusive awareness. Absolute control.
              </p>
            </div>
            <div className="hero__actions">
              <a className="button button--solid" href="#technology">
                Discover Our Technology
              </a>
            </div>
          </div>
        </section>

        <section className="section section--problem" id="problem">
          <div className="container">
            <SectionHeading
              eyebrow="Why now"
              title="The hidden cost of reactive maritime operations."
              description="Global shipping still absorbs huge losses from preventable mechanical issues, fragmented situational awareness, and maintenance models that act too late."
            />

            <div className="problem-layout">
              <div className="problem-grid">
                {problemCards.map((card) => (
                  <article className="glass-card problem-card" key={card.title}>
                    <p className="card-kicker">Risk Vector</p>
                    <h3>{card.title}</h3>
                    <p>{card.copy}</p>
                  </article>
                ))}
              </div>

              <aside className="glass-card problem-callout">
                <p className="card-kicker">Industry Pressure</p>
                <strong>$13B</strong>
                <p>
                  of annual losses are already believed to be preventable or heavily
                  influenced by human and operational factors. The opportunity is not
                  hypothetical. It is waiting for better visibility.
                </p>
              </aside>
            </div>
          </div>
        </section>

        <section className="section" id="technology">
          <div className="container">
            <SectionHeading
              eyebrow="Platform architecture"
              title="A modular stack built for live vessel awareness."
              description="The system combines lightweight hardware, resilient data movement, a continuously updated digital twin, and decision intelligence that helps teams intervene earlier."
            />

            <div className="architecture-layout">
              <div className="architecture-stack">
                {architectureLayers.map((layer) => (
                  <article className="glass-card layer-card" key={layer.title}>
                    <div className="layer-card__header">
                      <span>{layer.step}</span>
                      <h3>{layer.title}</h3>
                    </div>
                    <p>{layer.copy}</p>
                    <ul className="feature-list">
                      {layer.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>

              <div className="side-stack">
                <article className="glass-card sensor-card">
                  <p className="card-kicker">Sensor Suite</p>
                  <h3>Rugged inputs without deep integration work.</h3>
                  <div className="chip-cloud">
                    {sensorSuite.map((item) => (
                      <span className="chip" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </article>

                <article className="glass-card loop-card">
                  <p className="card-kicker">Intelligence Loop</p>
                  <div className="loop-grid">
                    {intelligenceLoop.map((item) => (
                      <div className="loop-step" key={item.title}>
                        <strong>{item.title}</strong>
                        <p>{item.copy}</p>
                      </div>
                    ))}
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--use-cases" id="use-cases">
          <div className="container">
            <SectionHeading
              eyebrow="Operational outcomes"
              title="From fleet anxiety to measurable control."
              description="The platform is designed to create value for engineering teams, fleet managers, and insurers from the same stream of vessel intelligence."
            />

            <div className="use-case-grid">
              {useCases.map((item) => (
                <article className="glass-card use-case-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--advantage">
          <div className="container advantage-layout">
            <div>
              <SectionHeading
                eyebrow="Business value"
                title="Designed to reduce claims, cost, and operational drag."
                description="Atreides creates a clearer path to earlier intervention and better fleet-wide decision-making, while keeping deployment practical enough to prove quickly."
              />

              <div className="outcome-list glass-card">
                {businessOutcomes.map((item) => (
                  <div className="outcome-list__item" key={item}>
                    <span />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="comparison-shell glass-card">
              <p className="card-kicker">Competitive advantage</p>
              <div className="comparison-table-wrap">
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Traditional Systems</th>
                      <th>Atreides Platform</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row) => (
                      <tr key={row[0]}>
                        <td>{row[0]}</td>
                        <td>{row[1]}</td>
                        <td>{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--pilot" id="pilot">
          <div className="container pilot-layout">
            <div>
              <SectionHeading
                eyebrow="Deployment strategy"
                title="Start with a pilot, scale with evidence."
                description="The rollout path is intentionally staged so the hardware, data quality, and ROI case can be proven on real vessels before fleet-wide expansion."
              />

              <div className="timeline">
                {deploymentSteps.map((step, index) => (
                  <article className="timeline__item" key={step.phase}>
                    <span className="timeline__index">{index + 1}</span>
                    <div>
                      <h3>{step.phase}</h3>
                      <p>{step.copy}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <aside className="glass-card pilot-card">
              <p className="card-kicker">Pilot brief</p>
              <h3>What the first deployment should prove.</h3>
              <ul className="feature-list">
                <li>Sensor durability and calibration in harsh marine conditions</li>
                <li>Stable offshore data transmission and usable onboard analytics</li>
                <li>A digital twin that reflects true vessel behavior over time</li>
                <li>Clear maintenance, efficiency, and underwriting upside</li>
              </ul>
              <a className="button button--solid pilot-card__cta" href="#top">
                Revisit the Vision
              </a>
            </aside>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <div>
            <a className="brand brand--footer" href="#top">
              <img
                className="brand__logo"
                src="/ship_logo_embedded.png"
                alt=""
                width={28}
                height={28}
              />
              ATREIDES
            </a>
            <p className="footer__summary">
              Maritime digital twins and sensor intelligence for safer vessels,
              smarter fleets, and lower preventable loss.
            </p>
          </div>

          <div className="footer__links">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
