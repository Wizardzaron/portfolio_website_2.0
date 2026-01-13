import { useState } from "react";
import { createPortal } from "react-dom";
import react from "./assets/react.svg";
import emailjs from "@emailjs/browser";
import { Link, useParams } from "react-router-dom";
import "./App.css";

export default function Home() {
  {
    /*State hooks used for sending an email */
  }
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // const [showModal, setShowModal] = useState(false);

  // const testModal = () =>{

  //     setShowModal(true);

  // }

  {
    /* Sends an email to me */
  }
  const sendEmail = () => {
    emailjs
      .send(
        import.meta.env.VITE_APP_SERVICE,
        import.meta.env.VITE_APP_TEMPLATE,
        { name, email, message },
        {
          publicKey: import.meta.env.VITE_APP_EMAIL,
        }
      )
      .then(
        (response) => {
          // setShowModal(true);
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          // setShowModal(true);
          console.log("FAILED...", err);
        }
      );
  };

  return (
    <>
      {/*Section for navigating the website */}
      <section id="navigation">
        {/* <div className="header"> */}
        <nav>
          <p>Ryan Haddadi</p>

          <div className="navbar">
            <a className="links" href="#about">
              About
            </a>
            <a className="links" href="#experience">
              Experience
            </a>
            <a className="links" href="#skill">
              Skills
            </a>
            <a className="links" href="#project">
              Projects
            </a>
            <a className="links" href="#contact">
              Contacts
            </a>
          </div>
        </nav>
        {/* </div> */}
      </section>

      {/*Section for explaining who I am*/}
      <section
        id="about"
        className="section"
        style={{
          "--start-color": "white",
          "--end-color": "rgba(10,186,181, 0.7)",
          "--start-stop": "70%",
          "--end-stop": "100%",
        }}
      >
        <div className="description">
          <p>Hi, I'm Ryan!</p>
          <p>
            A Full Stack Developer with a strong curiosity and passion for my
            field.
          </p>

          {/* working across both frontend and backend to build seamless applications. */}

          <p>
            I have hands-on experience with Node.js, TypeScript, Next.js, and
            PostgreSQL, working across both the frontend and backend to build
            seamless applications.
          </p>

          <p>
            Currently, I’m focusing on building and maintaining a specialized
            e-commerce platform, whiles also collaborating with offshore teams
            and mentoring junior developers.
          </p>

          <p>
            Outside of work, I’m always learning whether it’s exploring new
            technologies, practicing problem-solving on LeetCode, or developing
            side projects.
          </p>
        </div>

        <img src="/profile-modified.png" alt="Profile picture" />
      </section>

      {/*Section for professional experience*/}
      <section
        id="experience"
        className="section"
        style={{
          "--start-color": "rgba(10, 186, 181, 0.7)",
          "--end-color": "rgba(192, 233, 217,0.7)",
          "--start-stop": "70%",
          "--end-stop": "100%",
        }}
      >
        <p className="section-title">Experience</p>

        <div className="experience">
          <div className="experience-box">
            <div className="experience-summary">
              <h4>
                Full Stack Developer -{" "}
                <a href="https://d1notes.com">D1 Notes</a>
              </h4>
              <p>March 2025 - Present</p>
            </div>

            {/* <div className='experience-details'> */}
            <div className="exeperience-description">
              {/* <p>Project: Ecommerce Platform</p> */}
              <h4>Summary:</h4>
              <p>
                Designed a web-based commerce platform focused on connecting
                customers with domain experts to provide structured feedback and
                guidance.
              </p>

              <h4>Impact Highlights: </h4>
              <ul className="experience-bullet">
                <li>
                  Rebuilt and maintained core features in a large, undocumented
                  codebase; delivering production stable deployments.
                </li>

                <li>
                  Built and maintained backend APIs and integrated them with
                  front-end pages to support a seamless user experience.
                </li>

                <li>
                  Built and deployed hourly background jobs using AWS services
                  to support reliable data synchronization.
                </li>

                <li>
                  Reduced infrastructure cost and improve performance by
                  integrating Redis based caching and batch inserts.
                </li>

                <li>
                  Documented internal tools and supported new team members in
                  navigating unfamiliar parts of the codebase.
                </li>
              </ul>

              <h4>Tech: </h4>
              <p>
                PostgreSQL, Drizzle, Next.js, Typescript, Tailwind, Python, AWS,
                Docker
              </p>
            </div>
            {/* </div> */}
          </div>
        </div>
      </section>

      {/*Section for the skills I have*/}
      <section
        id="skill"
        className="section"
        style={{
          "--start-color": "rgba(192, 233, 217,0.7)",
          "--end-color": "rgba(86, 150, 202, 0.7)",
          "--start-stop": "70%",
          "--end-stop": "100%",
        }}
      >
        <p className="section-title">Skills</p>

        <div className="skills">
          <img src="/html5.png" alt="HTML" />
          <img src="/CSS3.png" alt="CSS" />
          <img src="/ts.png" alt="TypeScript" />
          <img src={react} alt="React" />
          <img src="/Next.js.png" alt="Next.js" />
          <img src="/python_logo.svg" alt="Python" />
          <img src="/flask.svg" alt="Flask" />
          <img src="/django.svg" alt="Django" />
          <img src="/Mysql_logo.png" alt="Mysql" />
          <img src="/postgresql-logo.png" alt="Postgresql" />
          <img src="/aws.png" alt="AWS" />
          <img src="/redis.png" alt="Redis" />
        </div>
      </section>

      {/*Section for the projects I have created*/}
      <section
        id="project"
        className="section"
        style={{
          "--start-color": "rgba(86, 150, 202, 0.7)",
          "--end-color": "rgba(56, 109, 152, 0.7)",
          "--start-stop": "70%",
          "--end-stop": "100%",
        }}
      >
        <p className="section-title">Projects</p>

        <div className="projects">
          <div className="projects-item">
            <h2>Shoe Store Website</h2>
            <img src="/portfolio_images/1-1.png" alt="Shoe portfolio" />
            <div className="middle">
              <Link className="next-page" to="/detail">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/*Section for my contact info*/}
      <section id="contact">
        <p className="section-title">Contact</p>

        <div className="contact-flex">
          <div className="contact-info">
            <div className="contact-item">
              <a href="mailto:ryan.haddadi81@gmail.com">
                <img src="/email.png" alt="Email symbol" />
                <p>ryan.haddadi81@gmail.com</p>
              </a>
            </div>

            <div className="contact-item">
              <a href="tel:+17605856775">
                <img src="/smartphone-call.png" alt="Phone symbol" />
                <p>+1 (760)-585-6775</p>
              </a>
            </div>

            <div className="contact-icon">
              <a href="https://www.linkedin.com/in/ryan-haddadi-7768a1227/">
                <img src="/linkedin-logo.png" alt="LinkedIn logo" />
              </a>

              <a href="https://github.com/Wizardzaron">
                <img src="/github-mark.png" alt="Github logo" />
              </a>
            </div>
          </div>

          <form className="message" onSubmit={sendEmail}>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
            ></input>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
            ></input>
            <textarea
              type="text"
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              rows="6"
              cols="60"
            />
            <input
              className="send-button"
              type="submit"
              value="Send Message"
            ></input>
          </form>

          {/* {showModal && createPortal(
                        <div className="modal">
                            <div>The message was sent I'll get back to you as soon as possible!</div>
                            <button onClick={ () => setShowModal(false)}>Close</button>
                        </div>,
                        document.getElementById("contact")
                    )} */}
        </div>
      </section>
    </>
  );
}
