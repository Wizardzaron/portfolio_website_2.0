import "./Detail.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Detail() {
  const navigate = useNavigate();
  const [mainImage, setMainImage] = useState("/portfolio_images/1-1.png");

  const images = [
    { src: "/portfolio_images/1-1.png", alt: "Home Page" },
    { src: "/portfolio_images/1-2.png", alt: "Account Modal" },
    { src: "/portfolio_images/1-3.png", alt: "Login Modal" },
    { src: "/portfolio_images/1-4.png", alt: "Shoe Page" },
    { src: "/portfolio_images/1-5.png", alt: "Order Page" },
  ];

  function handleThumbnailClick(e) {
    const url = e.currentTarget.getAttribute("data-image-url");
    if (url) setMainImage(url);
  }

  function openLink(e) {
    const url = e.currentTarget.getAttribute("data-project-url");
    window.open(url, "_blank");
  }

  return (
    <div className="project">
      <button className="back-page" onClick={() => navigate(-1)}>
        ← Go Back
      </button>

      <div className="detail-inner">
        <h1 className="detail-title">Shoe Store Website</h1>

        <img className="main-image" src={mainImage} alt="Project screenshot" />

        <div className="gallery-thumbnails">
          {images.map(({ src, alt }) => (
            <a
              key={src}
              data-image-url={src}
              onClick={handleThumbnailClick}
              className={mainImage === src ? "thumb active" : "thumb"}
              role="button"
              tabIndex={0}
              aria-label={`View ${alt}`}
            >
              <img src={src} alt={alt} />
            </a>
          ))}
        </div>

        <p className="detail-description">
          This was my first independent project made outside of class.
          Development began in December 2023 and ended November 2024. It's
          designed to mimic e-commerce websites built to sell shoes. Features
          include user account creation, login functionality, password recovery,
          adding items to a cart, and placing orders. Built from the ground up
          using PostgreSQL, Python, and Flask for the back end, and HTML, CSS,
          JavaScript, and Next.js for the front end. Throughout the process I
          gained valuable experience in project planning, deploying to PaaS
          providers like Heroku and Vercel, and improved my full-stack
          development skills.
        </p>

        <div className="github-links">
          <button
            data-project-url="https://github.com/Wizardzaron/shoe-st-api"
            onClick={openLink}
          >
            Back End
          </button>
          <button
            data-project-url="https://github.com/Wizardzaron/shoe-st"
            onClick={openLink}
          >
            Front End
          </button>
          <button
            data-project-url="https://shoe-st.vercel.app/home"
            onClick={openLink}
          >
            View Live
          </button>
        </div>
      </div>
    </div>
  );
}
