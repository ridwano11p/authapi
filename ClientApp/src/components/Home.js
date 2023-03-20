import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <body>
      <div className="hero">
        <div className="hero__background-image"></div>
        <div className="hero__boxes">
          <div className="hero__box">
            <p className="hero__box-text">
              Discover the Power of APIs! Get Ready to Streamline Your Inventory
              Management.
            </p>
            <Link to="https://localhost:44482/Identity/Account/Register?returnUrl=/authentication/login">
              <button className="hero__button">Get started now</button>
            </Link>
          </div>
          <div className="hero__box">
            <p className="hero__box-text">
              Our cutting-edge inventory management website puts you in control.
              Easily add, manage, and delete items with just a few clicks. Say
              goodbye to manual tracking and hello to effortless organization.
            </p>
            <Link to="https://localhost:44482/Identity/Account/Register?returnUrl=/authentication/login">
              <button className="hero__button">Get started now</button>
            </Link>
          </div>
          <div className="hero__box">
            <p className="hero__box-text">
              Unlock a world of convenience and efficiency with our affordable
              monthly subscription. Just $10 per month gives you access to all
              the features and benefits of our powerful inventory management
              platform.
            </p>
            <Link to="https://localhost:44482/Identity/Account/Register?returnUrl=/authentication/login">
              <button className="hero__button">Get started now</button>
            </Link>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Home;
