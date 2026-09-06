import {
  ArrowUpRight,
  ArrowDown,
  GitFork,
  Mail,
  Plus,
  Network,
  Cpu,
  Crosshair,
} from 'lucide-react';
import {
  profile,
  projects,
  experience,
  education,
  skills,
  certificates,
} from '../content/portfolio';

function ProjectVisual({ kind }: { kind?: string }) {
  return (
    <div className={'project-visual ' + kind} aria-hidden="true">
      <svg viewBox="0 0 360 170" fill="none">
        {kind === 'path' ? (
          <>
            <path
              d="M30 125V46Q30 22 55 22H304Q330 22 330 48V120Q330 146 304 146H58Q30 146 30 125Z"
              stroke="#24446c"
              strokeWidth="26"
            />
            <path
              d="M30 125V46Q30 22 55 22H304Q330 22 330 48V120Q330 146 304 146H58Q30 146 30 125Z"
              stroke="#7da8e8"
              strokeDasharray="5 6"
            />
            <path
              d="M52 120Q70 45 140 43T299 51Q325 90 298 119T165 120T52 120"
              stroke="#70a7ff"
              strokeWidth="2"
            />
            <circle cx="143" cy="44" r="8" fill="#7eb3ff" />
            <circle cx="143" cy="44" r="17" stroke="#70a7ff" opacity=".35" />
            <path d="m143 44 33 12" stroke="#fff" />
            <text x="154" y="91">
              TRAJECTORY / CONTROL
            </text>
          </>
        ) : kind === 'vision' ? (
          <>
            <path
              d="M38 142H325M65 142 150 24M297 142 215 24M113 142 170 24M251 142 195 24M98 96H274M122 62H246"
              stroke="#254369"
            />
            <rect
              x="146"
              y="28"
              width="66"
              height="106"
              rx="3"
              stroke="#76afff"
              strokeDasharray="6 4"
            />
            <circle cx="179" cy="52" r="13" stroke="#c8dfff" />
            <path
              d="M160 112V85Q160 70 179 70Q198 70 198 85V112M179 93V124"
              stroke="#c8dfff"
              strokeWidth="2"
            />
            <path
              d="M120 36H131M125 31V41M225 126H240M232 119V134"
              stroke="#6c9edf"
            />
            <text x="18" y="20">
              PERCEPTION / FOLLOWING
            </text>
          </>
        ) : (
          <>
            {[42, 64, 86, 108, 130].map((y, i) => (
              <g key={y}>
                <path d={`M30 ${y}H328`} stroke="#2d4c78" />
                <rect
                  x={68 + i * 27}
                  y={y - 8}
                  width="22"
                  height="16"
                  rx="2"
                  fill="#122b50"
                  stroke="#739ee0"
                />
                <text x={74 + i * 27} y={y + 4}>
                  R
                </text>
              </g>
            ))}
            <path d="M249 42V130" stroke="#80b0fb" />
            {[42, 86, 130].map((y) => (
              <circle key={y} cx="249" cy={y} r="4" fill="#8bbaff" />
            ))}
            <text x="30" y="22">
              QUANTUM / CLASSICAL
            </text>
          </>
        )}
      </svg>
      <span>CONCEPT SCHEMATIC</span>
    </div>
  );
}
function Tags({ items }: { items: string[] }) {
  return (
    <div className="tags">
      {items.map((t) => (
        <span key={t}>{t}</span>
      ))}
    </div>
  );
}
export default function Home() {
  const featured = projects.filter((p) => p.featured),
    archive = projects.filter((p) => !p.featured);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <a className="brand" href="#main">
          <span className="monogram">
            rk<span>.</span>
          </span>
          <span>RAJANA KAVINDA</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#research">Research</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a className="nav-contact" href="#contact">
            Let’s connect <ArrowUpRight size={16} />
          </a>
        </nav>
      </header>
      <main id="main">
        <section className="hero wrap">
          <div>
            <p className="eyebrow">
              <span className="status-dot" /> ENGINEER · RESEARCHER · BUILDER
            </p>
            <h1>
              {profile.firstName}
              <span>
                {profile.lastName}
                <span className="blue">.</span>
              </span>
            </h1>
            <p className="hero-statement">
              Building autonomy.
              <br />
              <span>Connecting intelligence.</span>
            </p>
            <p className="hero-description">{profile.introduction}</p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                Explore my work <ArrowUpRight size={18} />
              </a>
              <a className="button secondary" href="#research">
                My research <ArrowDown size={17} />
              </a>
            </div>
            <div className="socials">
              <a href={profile.github} aria-label="GitHub">
                <GitFork size={19} />
              </a>
              <a href={profile.linkedin} aria-label="LinkedIn">
                <span className="linkedin-icon" aria-hidden="true">
                  in
                </span>
              </a>
              <a href={'mailto:' + profile.email} aria-label="Email">
                <Mail size={19} />
              </a>
              <span>{profile.location.toUpperCase()}</span>
            </div>
          </div>
          <div className="portrait-frame">
            <div className="portrait-image">
              <img
                src={profile.portrait}
                alt={profile.firstName + ' ' + profile.lastName}
                width="1792"
                height="2400"
                fetchPriority="high"
              />
            </div>
            <div className="portrait-caption">
              <span className="caption-square" />
              <div>
                <strong>{profile.role}</strong>
                <span>{profile.institution}</span>
              </div>
              <span className="portrait-cross">+</span>
            </div>
            <span className="frame-label">ROBOTICS & AUTONOMOUS SYSTEMS</span>
          </div>
        </section>
        <div className="focus-strip">
          <div className="wrap">
            <span>RESEARCH FOCUS</span>
            <p>Multi-robot systems</p>
            <i>+</i>
            <p>State estimation</p>
            <i>+</i>
            <p>Sensor fusion</p>
            <i>+</i>
            <p>Autonomous navigation</p>
          </div>
        </div>
        <section id="research" className="wrap section">
          <div className="research-grid">
            <div>
              <p className="eyebrow">01 / RESEARCH & ABOUT</p>
              <h2>
                Reliable autonomy,
                <br />
                <span className="muted">through collaboration.</span>
              </h2>
              <p className="section-intro">{profile.research}</p>
              <p className="section-intro">{profile.approach}</p>
              <p className="section-intro">{profile.educationSummary}</p>
              <div className="research-note">
                <span className="status-dot" />
                <div>
                  <strong>Multi-robot cooperative localization</strong>
                  <span>
                    Current M.Eng. thesis research · January 2026 – Present
                  </span>
                </div>
              </div>
            </div>
            <div className="research-panel">
              <span className="eyebrow">ONE SYSTEM. SHARED UNDERSTANDING.</span>
              <div
                className="network-diagram"
                aria-label="Conceptual diagram of robots sharing information for localization"
              >
                <svg viewBox="0 0 360 170" aria-hidden="true">
                  <path
                    d="M70 116 180 37 290 116Z"
                    fill="#18396b22"
                    stroke="#345580"
                    strokeDasharray="5 6"
                  />
                  <path d="M70 116 180 91 290 116M180 37V91" stroke="#6095ed" />
                  {[
                    [70, 116],
                    [180, 37],
                    [290, 116],
                  ].map(([x, y], i) => (
                    <g key={x}>
                      <circle
                        cx={x}
                        cy={y}
                        r="22"
                        fill="#102440"
                        stroke="#729fdf"
                      />
                      <rect
                        x={x - 7}
                        y={y - 7}
                        width="14"
                        height="14"
                        rx="3"
                        fill="#8ebaff"
                      />
                      <text
                        x={x}
                        y={y + 41}
                        textAnchor="middle"
                        fill="#a3b9d8"
                        fontSize="10"
                      >
                        ROBOT 0{i + 1}
                      </text>
                    </g>
                  ))}
                  <circle cx="180" cy="91" r="7" fill="#8cbaff" />
                </svg>
              </div>
              <div className="research-topic">
                <Crosshair size={20} />
                <div>
                  <h3>State estimation</h3>
                  <p>Understanding where a robot is and how it moves.</p>
                </div>
              </div>
              <div className="research-topic">
                <Network size={20} />
                <div>
                  <h3>Cooperative localization</h3>
                  <p>Using shared information across a team of robots.</p>
                </div>
              </div>
              <div className="research-topic">
                <Cpu size={20} />
                <div>
                  <h3>Multi-sensor fusion</h3>
                  <p>Bringing complementary measurements together.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="wrap section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / SELECTED WORK</p>
              <h2>
                From theory to
                <br />
                <span className="muted">working systems.</span>
              </h2>
            </div>
            <a className="text-link" href={profile.github}>
              Explore GitHub <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="project-grid">
            {featured.map((p, i) => (
              <article className="project-card" key={p.id}>
                <ProjectVisual kind={p.visual} />
                <div className="project-body">
                  <div className="project-meta">
                    <span>{p.category}</span>
                    <span>0{i + 1}</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <details className="project-details">
                    <summary>
                      Project details <Plus size={14} />
                    </summary>
                    <p>{p.detail}</p>
                  </details>
                  <Tags items={p.tags} />
                  <div className="project-footer">
                    <span>{p.date}</span>
                    <a href={p.url}>
                      {p.linkLabel} <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <details className="project-archive">
            <summary>
              <span>
                More engineering projects{' '}
                <span className="archive-count">{archive.length}</span>
              </span>
              <Plus size={20} />
            </summary>
            <div className="archive-grid">
              {archive.map((p) => (
                <article className="archive-card" key={p.id}>
                  <span className="project-meta">
                    {p.category} · {p.date}
                  </span>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <Tags items={p.tags} />
                  {p.url && (
                    <a className="text-link" href={p.url}>
                      {p.linkLabel} <ArrowUpRight size={16} />
                    </a>
                  )}
                </article>
              ))}
            </div>
          </details>
        </section>
        <section id="experience" className="wrap section">
          <p className="eyebrow">03 / EXPERIENCE</p>
          <h2>Research meets engineering.</h2>
          <div className="timeline">
            {experience.map((e) => (
              <article className="timeline-row" key={e.role}>
                <div className="timeline-date">
                  {e.date}
                  <span>{e.type}</span>
                </div>
                <div className="timeline-content">
                  <h3>{e.role}</h3>
                  <p className="organization">{e.organization}</p>
                  <p>{e.description}</p>
                  <Tags items={e.tags} />
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="wrap section education-skills">
          <div>
            <p className="eyebrow">04 / EDUCATION</p>
            <h2>
              A foundation for
              <br />
              <span className="muted">what comes next.</span>
            </h2>
            {education.map((e) => (
              <article className="education-card" key={e.degree}>
                <span className="project-meta">{e.date}</span>
                <h3>{e.degree}</h3>
                <p>{e.institution}</p>
                <span className="education-note">{e.note}</span>
              </article>
            ))}
          </div>
          <div>
            <p className="eyebrow">05 / TOOLKIT</p>
            <h2>Tools I work with.</h2>
            <div className="skill-groups">
              {skills.map((s) => (
                <div key={s.group}>
                  <h3>{s.group}</h3>
                  <Tags items={s.items} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="wrap section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">06 / CONTINUOUS LEARNING</p>
              <h2>Always building on the basics.</h2>
            </div>
          </div>
          <div className="certificates">
            {certificates.map((c) => (
              <a key={c.title} href={c.url}>
                <span>{c.title}</span>
                <span>
                  {c.date}
                  <ArrowUpRight size={17} />
                </span>
              </a>
            ))}
          </div>
        </section>
        <section id="contact" className="contact wrap">
          <div>
            <p className="eyebrow">07 / GET IN TOUCH</p>
            <h2>
              Let’s build
              <br />
              <span className="blue">something meaningful.</span>
            </h2>
            <p>
              Interested in robotics, autonomous systems, or a research
              collaboration? Let’s start a conversation.
            </p>
            <div className="contact-emails">
            <div>
            <span className="email-label">Personal email</span>
            <a className="email-link" href={'mailto:' + profile.email}>
              {profile.email}
              <ArrowUpRight size={24} />
            </a>
            </div>
            <div>
              <span className="email-label">Academic email</span>
              <a className="email-link" href={'mailto:' + profile.academicEmail}>
                {profile.academicEmail}
                <ArrowUpRight size={24} />
              </a>
            </div>
            </div>
          </div>
          <div className="contact-links">
            <a href={profile.github}>
              GitHub <ArrowUpRight size={20} />
            </a>
            <a href={profile.linkedin}>
              LinkedIn <ArrowUpRight size={20} />
            </a>
            <span>{profile.location}</span>
          </div>
        </section>
      </main>
      <footer className="wrap">
        <span>
          © {new Date().getFullYear()} {profile.firstName} {profile.lastName}
        </span>
        <a href="#main">
          Back to top <ArrowUpRight size={15} />
        </a>
      </footer>
    </>
  );
}
