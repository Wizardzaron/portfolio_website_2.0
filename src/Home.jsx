import { useState } from "react";
import react from "./assets/react.svg";
import "./App.css";

const galleryItems = [
  { id: "1", label: "Home" },
  { id: "2", label: "Account" },
  { id: "3", label: "Login" },
  { id: "4", label: "Product" },
  { id: "5", label: "Orders" },
];

const galleryAltMap = {
  "1": "Home page",
  "2": "Account modal",
  "3": "Login modal",
  "4": "Shoe page",
  "5": "Order page",
};

const coachBotGalleryItems = [
  { id: "1", label: "Intro" },
  { id: "2", label: "Drill output" },
];

const coachBotGalleryAltMap = {
  "1": "Coach Bot welcome screen",
  "2": "Generated dribbling drill",
};

const skills = [
  { src: "/html5.png", alt: "HTML", label: "HTML" },
  { src: "/CSS3.png", alt: "CSS", label: "CSS" },
  { src: "/ts.png", alt: "TypeScript", label: "TypeScript" },
  { src: react, alt: "React", label: "React" },
  { src: "/Next.js.png", alt: "Next.js", label: "Next.js" },
  { src: "/tailwind.svg", alt: "Tailwind", label: "Tailwind" },
  { src: "/nodejs.svg", alt: "Node.js", label: "Node.js" },
  { src: "/python_logo.svg", alt: "Python", label: "Python" },
  { src: "/fastapi.svg", alt: "FastAPI", label: "FastAPI" },
  { src: "/flask.svg", alt: "Flask", label: "Flask" },
  { src: "/django.svg", alt: "Django", label: "Django" },
  { src: "/drizzle.svg", alt: "Drizzle", label: "Drizzle" },
  { src: "/socketio.svg", alt: "Socket.io", label: "Socket.io" },
  { src: "/Mysql_logo.png", alt: "MySQL", label: "MySQL" },
  { src: "/postgresql-logo.png", alt: "PostgreSQL", label: "PostgreSQL" },
  { src: "/qdrant.svg", alt: "Qdrant", label: "Qdrant" },
  { src: "/aws.png", alt: "AWS", label: "AWS" },
  { src: "/docker.svg", alt: "Docker", label: "Docker" },
  { src: "/redis.png", alt: "Redis", label: "Redis" },
  { src: "/stripe.svg", alt: "Stripe", label: "Stripe" },
  { src: "/claude.svg", alt: "Claude", label: "Claude" },
];

export default function Home() {
  const [activeImage, setActiveImage] = useState("1");
  const [activeCoachImage, setActiveCoachImage] = useState("1");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(
    "Opens your email app with your message ready to send."
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href =
      "mailto:ryan.haddadi81@gmail.com?subject=" +
      encodeURIComponent("Portfolio inquiry from " + name) +
      "&body=" +
      encodeURIComponent(
        message + "\n\nFrom: " + name + "\nEmail: " + email
      );
    setStatus("Your email app will open. Send the message there to contact Ryan.");
  };

  return (
    <>
      <nav>
        <a className="brand" href="#top">
          Ryan Haddadi<span>.</span>
        </a>
        <div className="links">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Let’s talk ↗</a>
        </div>
      </nav>

      <main id="top">
        <section className="hero">
          <div>
            <div className="eyebrow">Full stack developer / Ryan Haddadi</div>
            <h1>
              Thoughtful code.
              <br />
              <em>
                Seamless
                <br />
                experiences.
              </em>
            </h1>
            <p className="intro">
              Outside of work, I explore new technologies, practice
              problem-solving on LeetCode, and develop side projects. I enjoy
              the process of turning an idea into something people can actually
              use.
            </p>
            <div className="buttons">
              <a className="btn primary" href="#work">
                Explore my work <span>↘</span>
              </a>
              <a
                className="btn"
                href="https://github.com/Wizardzaron"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
            </div>
          </div>
          <div className="portrait">
            <div className="orbit"></div>
            <img src="/profile-modified.png" alt="Ryan Haddadi" />
          </div>
        </section>

        <section id="work" className="content">
          <div className="section-head">
            <div>
              <div className="eyebrow">01 / Selected projects</div>
              <h2>Built from the ground up.</h2>
            </div>
            <p>Hands-on projects spanning full-stack commerce and AI-assisted tooling.</p>
          </div>

          <article className="project">
            <div className="project-visual">
              <img
                id="project-image"
                src={`/${activeImage === "1" ? "1-1" : `1-${activeImage}`}.png`}
                alt={`Shoe Store ${galleryAltMap[activeImage]}`}
              />
            </div>
            <div className="gallery" aria-label="Project screenshots">
              {galleryItems.map((item) => (
                <button
                  key={item.id}
                  aria-pressed={activeImage === item.id}
                  onClick={() => setActiveImage(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="project-bottom">
              <div>
                <div className="eyebrow">
                  Independent project / Dec 2023 – Nov 2024
                </div>
                <h3 style={{ marginTop: 14 }}>Shoe Store</h3>
                <div className="tags">
                  <span>Next.js</span>
                  <span>Python</span>
                  <span>Flask</span>
                  <span>PostgreSQL</span>
                </div>
              </div>
              <div>
                <p>
                  A full-stack storefront featuring account creation, login,
                  password recovery, cart management, and order placement. Built
                  independently, with deployment experience across Heroku and
                  Vercel.
                </p>
                <div className="small-links">
                  <a
                    href="https://shoe-st.vercel.app/home"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit live site ↗
                  </a>
                  <a
                    href="https://github.com/Wizardzaron/shoe-st"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Frontend ↗
                  </a>
                  <a
                    href="https://github.com/Wizardzaron/shoe-st-api"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Backend ↗
                  </a>
                </div>
              </div>
            </div>
          </article>

          <article className="project">
            <div className="project-visual">
              <img
                src={`/2-${activeCoachImage}.png`}
                alt={`Coach Bot ${coachBotGalleryAltMap[activeCoachImage]}`}
              />
            </div>
            <div className="gallery" aria-label="Coach Bot screenshots">
              {coachBotGalleryItems.map((item) => (
                <button
                  key={item.id}
                  aria-pressed={activeCoachImage === item.id}
                  onClick={() => setActiveCoachImage(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="project-bottom">
              <div>
                <div className="eyebrow">
                  Independent project / Apr 2026 – Present
                </div>
                <h3 style={{ marginTop: 14 }}>Coach Bot</h3>
                <div className="tags">
                  <span>FastAPI</span>
                  <span>Python</span>
                  <span>Qdrant</span>
                  <span>RAG</span>
                  <span>LLM</span>
                </div>
              </div>
              <div>
                <p>
                  A RAG-based assistant that generates age-appropriate soccer
                  drills for volunteer coaches, grounding LLM responses in
                  indexed coaching content via Qdrant vector search. The
                  FastAPI backend exposes a dedicated indexing API for
                  rebuilding the knowledge base, with a shared database client
                  managed through lifespan events and dependency injection.
                  Multitenant long-term memory is in design to personalize
                  drills per team.
                </p>
                <p className="form-status">
                  Currently in development — running locally, no public demo
                  yet.
                </p>
              </div>
            </div>
          </article>
        </section>

        <section id="experience" className="content">
          <div className="section-head">
            <div>
              <div className="eyebrow">02 / Experience</div>
              <h2>Making complex systems work.</h2>
            </div>
          </div>
          <div className="experience">
            <div>
              <div className="date">March 2025 — Present</div>
              <h3 style={{ marginTop: 18 }}>Full Stack Developer</h3>
              <a
                className="company"
                href="https://d1notes.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                D1 Notes ↗
              </a>
            </div>
            <div>
              <p style={{ marginTop: 0 }}>
                Building and maintaining a specialized commerce platform that
                connects customers with domain experts for structured feedback
                and guidance.
              </p>
              <ul>
                <li>
                  Took ownership of core features in a large, undocumented
                  codebase, reverse-engineering existing systems to stabilize
                  and ship improvements ahead of schedule.
                </li>
                <li>
                  Designed and implemented RESTful APIs in TypeScript,
                  integrating backend services with the frontend to support
                  data-heavy, automation-driven workflows.
                </li>
                <li>
                  Built real-time chat with Socket.io, using Redis as a write
                  buffer to batch database inserts and reduce messaging write
                  operations by up to 50x.
                </li>
                <li>
                  Built reliable data delivery systems in Python, deploying
                  scheduled jobs on AWS Lambda and EventBridge for consistent,
                  loss-free synchronization.
                </li>
                <li>
                  Extended Stripe integration with saved payment methods and
                  automated re-authorization, enabling advance booking for a
                  new video-call service.
                </li>
                <li>
                  Leveraged Claude Code to accelerate development through
                  detailed implementation specs, AI-assisted code generation,
                  and validation via code review and testing.
                </li>
                <li>
                  Partnered with cross-functional and offshore engineers to
                  turn ambiguous requirements into shipped features.
                </li>
              </ul>
              <div className="tags">
                <span>Next.js</span>
                <span>TypeScript</span>
                <span>PostgreSQL</span>
                <span>Drizzle</span>
                <span>Tailwind</span>
                <span>Python</span>
                <span>AWS</span>
                <span>Docker</span>
                <span>Redis</span>
                <span>Stripe</span>
                <span>Claude Code</span>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="content">
          <div className="section-head">
            <div>
              <div className="eyebrow">03 / Toolkit</div>
              <h2>The right tools. Across the stack.</h2>
            </div>
          </div>
          <div className="skills">
            {skills.map(({ src, alt, label }) => (
              <div className="skill-item" key={label}>
                <img src={src} alt={alt} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

<section id="contact" className="content contact">
          <div>
            <div className="eyebrow">04 / Get in touch</div>
            <h2>
              Let’s build
              <br />
              something great.
            </h2>
            <p>
              Have a project or opportunity in mind?
              <br />
              I’d love to hear from you.
            </p>
            <a href="mailto:ryan.haddadi81@gmail.com">
              ryan.haddadi81@gmail.com ↗
            </a>
            <div className="small-links">
              <a
                href="https://www.linkedin.com/in/ryan-haddadi-7768a1227/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/Wizardzaron"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
              <a href="tel:+17605856775">Call Ryan ↗</a>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name">Your name</label>
              <input
                id="name"
                name="name"
                autoComplete="name"
                required
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="email">Your email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="message">What are you working on?</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                placeholder="Tell me a little about it…"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button className="btn primary" type="submit">
              Compose email ↗
            </button>
            <span className="form-status" aria-live="polite">
              {status}
            </span>
          </form>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Ryan Haddadi</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
