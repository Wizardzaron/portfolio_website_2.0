import './Detail.css'
import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';

export default function Detail() {

    const navigate = useNavigate();
    const [mainImage, setMainImage] = useState("/portfolio_images/1-1.png");

    {/* Opens a new tab to either my github repos or live project website when one of the buttons in the page are clicked*/}
    function redirectPage(event){
        'use strict';

        var githubUrl = event.target.getAttribute("data-project-url");
        window.open(githubUrl,"_blank");
    }

    {/* Changes the main image when one of the images in the gallery are clicked */}
    function hearClick(event){
        'use strict';
        var imageUrl = event.target.getAttribute("data-image-url");
        if (imageUrl != null) {
            setMainImage(imageUrl);
        }
        else {
            console.log("issue with image url: " + imageUrl);
        }

    }


    return (
        <div className="project">

            <img className="main-image" src={mainImage} alt="Main Image"/>

            <div className="image-gallery">

                {/* Images used for the gallery */}

                <a data-image-role="trigger" onClick={hearClick}>
                    <img src="/portfolio_images/1-1.png" alt="Home Page" data-image-url="/portfolio_images/1-1.png"/>
                </a>
                <a data-image-role="trigger" onClick={hearClick}>
                    <img src="/portfolio_images/1-2.png" alt="Account Modal" data-image-url="/portfolio_images/1-2.png"/>
                </a>
                <a data-image-role="trigger" onClick={hearClick}>
                    <img src="/portfolio_images/1-3.png" alt="Login Modal" data-image-url="/portfolio_images/1-3.png"/>
                </a>
                <a data-image-role="trigger" onClick={hearClick}>
                    <img src="/portfolio_images/1-4.png" alt="Shoe Page" data-image-url="/portfolio_images/1-4.png"/>
                </a>
                <a data-image-role="trigger" onClick={hearClick}>
                    <img src="/portfolio_images/1-5.png" alt="Order Page" data-image-url="/portfolio_images/1-5.png"/>
                </a>

                {/* Description of the project, how long it took, what the tech stack was, and what I learned through the experience */}

                <p>
                    This was my first independent project made outside of class, development began on December 2023 and ended November 2024. It's designed to mimic e-commerce websites designed to sell shoes. Features included are user account creation, login functionality, password recovery, adding items to a cart, and placing shoe orders. It was built from the ground up using PostgreSQL, Python, Flask for the Back End, and HTML, CSS, JavaScript, and Next.js for the Front End. Throughout the development process I gained valuable experience in project planning, deploying applications onto Platforms as a Service providers such as Heroku and Vercel, and improved my Full Stack development skills. 
                </p>
            
                {/*Buttons used to open a new tab to my github repos or live website */}

                <div className="github-links">
                    <button data-project-url="https://github.com/Wizardzaron/shoe-st-api" onClick={(event) => redirectPage(event)}>
                        Back End
                    </button>

                    <button data-project-url="https://github.com/Wizardzaron/shoe-st" onClick={ (event) => redirectPage(event)}>
                        Front End
                    </button>

                    <button data-project-url="https://shoe-st.vercel.app/home" onClick={ (event) => redirectPage(event)}>
                        View Live
                    </button>

                </div>

            
            </div>

            <button className="back-page" onClick={() => navigate(-1)}>
                Go Back
            </button>
        </div>
    )
}