import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import react from "./assets/react.svg";
import "./App.css";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        import.meta.env.VITE_APP_SERVICE,
        import.meta.env.VITE_APP_TEMPLATE,
        { name, email, message },
        { publicKey: import.meta.env.VITE_APP_EMAIL }
      )
      .then(
        (response) => console.log("SUCCESS!", response.status, response.text),
        (err) => console.log("FAILED...", err)
      );
  };

  const skills = [
    { src: "/html5.png", alt: "HTML", label: "HTML" },
    { src: "/CSS3.png", alt: "CSS", label: "CSS" },
    { src: "/ts.png", alt: "TypeScript", label: "TypeScript" },
    { src: react, alt: "React", label: "React" },
    { src: "/Next.js.png", alt: "Next.js", label: "Next.js" },
    { src: "/python_logo.svg", alt: "Python", label: "Python" },
    { src: "/flask.svg", alt: "Flask", label: "Flask" },
    { src: "/django.svg", alt: "Django", label: "Django" },
    { src: "/Mysql_logo.png", alt: "MySQL", label: "MySQL" },
    { src: "/postgresql-logo.png", alt: "PostgreSQL", label: "PostgreSQL" },
    { src: "/aws.png", alt: "AWS", label: "AWS" },
    { src: "/redis.png", alt: "Redis", label: "Redis" },
    { src: "/stripe.svg", alt: "Stripe", label: "Stripe"},
    { src: "/claude.svg", alt: "Claude", label: "Claude"},
  ];

  const expTech = [
    "PostgreSQL", "Drizzle", "Next.js", "TypeScript",
    "Tailwind", "Python", "AWS", "Docker", "Stripe", "Claude",
  ];

  return (
    <>
      {/* Navigation */}
      <section id="navigation">
        <nav>
          <p>Ryan Haddadi</p>
          <div className="navbar">
            <a className="links" href="#about">About</a>
            <a className="links" href="#experience">Experience</a>
            <a className="links" href="#skill">Skills</a>
            <a className="links" href="#project">Projects</a>
            <a className="links" href="#contact">Contact</a>
          </div>
        </nav>
      </section>

      {/* About */}
      <section id="about">
        <div className="about-text">
          <p className="about-greeting">Hi, I'm Ryan!</p>
          <p className="about-role">Full Stack Developer</p>
          <div className="about-body">
            <p>
              I have hands-on experience with Node.js, TypeScript, Next.js, and
              PostgreSQL, working across both the frontend and backend to build
              seamless applications.
            </p>
            <p>
              Currently building and maintaining a specialized e-commerce
              platform, collaborating with offshore teams and mentoring junior
              developers.
            </p>
            <p>
              Outside of work, I'm always learning — exploring new technologies,
              practicing problem-solving on LeetCode, and developing side
              projects.
            </p>
          </div>
        </div>
        <img src="/profile-modified.png" alt="Profile picture" />
      </section>

      {/* Experience */}
      <section id="experience">
        <div className="inner">
          <div className="section-header">
            <span className="section-label">Work</span>
            <p className="section-title">Experience</p>
          </div>

          <div className="experience">
            <div className="experience-box">
              <div className="experience-summary">
                <h4>
                  Full Stack Developer &mdash;{" "}
                  <a href="https://d1notes.com" target="_blank" rel="noreferrer">
                    D1 Notes
                  </a>
                </h4>
                <span className="exp-date">March 2025 – Present</span>
              </div>

              <div className="exeperience-description">
                <h4>Summary</h4>
                <p>
                  Designed a web-based commerce platform focused on connecting
                  customers with domain experts to provide structured feedback
                  and guidance.
                </p>

                <h4>Impact Highlights</h4>
                <ul className="experience-bullet">
                  <li>
                    Rebuilt and maintained core features in a large, undocumented
                    codebase; delivering production-stable deployments.
                  </li>
                  <li>
                    Built and maintained backend APIs and integrated them with
                    front-end pages to support a seamless user experience.
                  </li>
                  <li>
                    Leveraged Claude AI to support spec-driven development by assisting with implementation planning, debugging, and feature development.
                  </li>
                  <li>
                    Reduced infrastructure cost and improved performance by
                    integrating Redis-based caching and batch inserts.
                  </li>
                  <li>
                    Documented internal tools and supported new team members in
                    navigating unfamiliar parts of the codebase.
                  </li>
                </ul>

                <h4>Tech Stack</h4>
                <div className="exp-tech-tags">
                  {expTech.map((tech) => (
                    <span className="exp-tech-tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skill">
        <div className="inner">
          <div className="section-header">
            <span className="section-label">Tech Stack</span>
            <p className="section-title">Skills</p>
          </div>

          <div className="skills">
            {skills.map(({ src, alt, label }) => (
              <div className="skill-item" key={label}>
                <img src={src} alt={alt} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="project">
        <div className="inner">
          <div className="section-header">
            <span className="section-label">Portfolio</span>
            <p className="section-title">Projects</p>
          </div>

          <div className="projects">
            <div className="projects-item">
              <h2>Shoe Store Website</h2>
              <div className="projects-image-wrap">
                <img src="/portfolio_images/1-1.png" alt="Shoe Store project" />
              </div>
              <div className="project-footer">
                <Link className="next-page" to="/detail">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="inner">
          <div className="section-header">
            <span className="section-label">Get in Touch</span>
            <p className="section-title">Contact</p>
          </div>

          <div className="contact-flex">
            <div className="contact-info">
              <div className="contact-item">
                <a href="mailto:ryan.haddadi81@gmail.com">
                  <img src="/email.png" alt="Email" />
                  <p>ryan.haddadi81@gmail.com</p>
                </a>
              </div>

              <div className="contact-item">
                <a href="tel:+17605856775">
                  <img src="/smartphone-call.png" alt="Phone" />
                  <p>+1 (760)-585-6775</p>
                </a>
              </div>

              <div className="contact-icon">
                <a
                  href="https://www.linkedin.com/in/ryan-haddadi-7768a1227/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <img src="/linkedin-logo.png" alt="LinkedIn" />
                </a>
                <a
                  href="https://github.com/Wizardzaron"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <img src="/github-mark.png" alt="GitHub" />
                </a>
              </div>
            </div>

            <form className="message" onSubmit={sendEmail}>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
              />
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
              />
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                rows="6"
              />
              <input
                className="send-button"
                type="submit"
                value="Send Message"
              />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
