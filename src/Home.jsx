import { useState } from 'react'
import { createPortal } from 'react-dom';
import react from "./assets/react.svg"
import emailjs from '@emailjs/browser'
import {Link, useParams} from 'react-router-dom';
import './App.css'

export default function Home(){

    {/*State hooks used for sending an email */}
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    
    // const [showModal, setShowModal] = useState(false);

    // const testModal = () =>{

    //     setShowModal(true);

    // }

    {/* Sends an email to me */}
    const sendEmail = () => {
      emailjs
        .send(import.meta.env.VITE_APP_SERVICE, import.meta.env.VITE_APP_TEMPLATE, {name, email, message}, {
          publicKey:import.meta.env.VITE_APP_EMAIL,
        })
        .then(
          (response) => {

            // setShowModal(true);
            console.log('SUCCESS!', response.status, response.text);
          },
          (err) => {
            // setShowModal(true);
            console.log('FAILED...', err);
          },
        );
    }

    return(
        <>
            {/*Section for navigating the website */}
            <section id="navigation">
                <div className="header">
                <nav>
                    <p>Ryan Haddadi</p>

                    <div className="navbar">
                        <a className="links" href="#about">About</a>
                        <a className="links" href="#skill">Skills</a>
                        <a className="links" href="#project">Projects</a>
                        <a className="links" href="#contact">Contacts</a>
                    </div>
                </nav>
                </div>
            </section>

            {/*Section for explaining who I am*/}
            <section id="about">
                <img src = "/profile-modified.png" alt="Profile picture"/>

                <div className="description">

                    <p>Hi, I'm Ryan!</p>

                    <p>I graduated from California State University, Fullerton with a major in Computer Science. I’m currently trying to pursue a role where I can expand and grow my skills by learning from more experienced team members while also learning from project development. In the meantime I'm constantly developing new projects, grinding LeetCode, and staying up to date with industry trends.</p>

                </div>
            </section>

            {/*Section for the skills I have*/}
            <section id="skill">
                <p className="section-title">Skills</p>

                <div className="skills">

                    <img src="/html5.png" alt='HTML' />
                    <img src="/CSS3.png" alt='CSS' />
                    <img src="/js.png" alt='JavaScript' />
                    <img src={react} alt='React' />
                    <img src="/redux.svg" alt='Redux'/>
                    <img src="/python_logo.svg" alt='Python'/>
                    <img src="/flask.svg" alt='Flask' />
                    <img src="/django.svg" alt='Django'/>
                    <img src="/Mysql_logo.png" alt='Mysql' />
                    <img src="/postgresql-logo.png" alt='Postgresql' />

                </div>
            </section>
            
            {/*Section for the projects I have created*/}
            <section id="project">
                <p className="section-title">Projects</p>

                <div className="projects">

                    <div className="projects-item">
                    <h2>Shoe Store Website</h2>
                    <img src="/portfolio_images/1-1.png" alt='Shoe portfolio'/>
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
                            <span>
                                <a href="mailto:ryan.haddadi81@gmail.com"> 
                                <img src="/email.png" alt="Email symbol" /> ryan.haddadi81@gmail.com
                                </a>
                            </span>
                        </div>

                        <div className="contact-item">
                            <span>
                                <a href="tel:+17605856775">
                                <img src="/smartphone-call.png" alt="Phone symbol"/> +1 (760)-585-6775
                                </a>
                            </span>
                        </div>

                        <div className="contact-icon">
                            <a href="https://www.linkedin.com/in/ryan-haddadi-7768a1227/"><img src="/linkedin-logo.png" alt="LinkedIn logo"/></a>

                            <a href="https://github.com/Wizardzaron"><img src="/github-mark.png" alt="Github logo"/></a>
                        </div>

                    </div>

                    <form className="message" onSubmit={sendEmail}>
                        <input type="text" onChange={(e) => setName(e.target.value)} placeholder='Your Name'></input>
                        <input type="text" onChange={(e) => setEmail(e.target.value)}  placeholder='Your Email'></input>
                        <textarea type="text" onChange={(e) => setMessage(e.target.value)} placeholder="Message" rows="6" cols="60"></textarea>
                        <input className="send-button" type="submit" value="Send Message" ></input>
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


    )
}