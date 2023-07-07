import React from "react";
import Logo from "../assets/img/svg/free_logo.svg";
import App_1 from "../assets/img/svg/app_1.svg";
import app_2 from "../assets/img/svg/app_2.svg";
import App_3 from "../assets/img/svg/app_3.svg";
const MyNav = () => {
  return (
    <>
      <section>
        <nav className="py-4">
          <div className="custom_container_nav">
            <div className="d-flex align-items-center justify-content-between">
              <a href="#">
                <img className="nav_logo_w" src={Logo} alt="Logo" />
              </a>
              <div className="d-flex align-items-center gap-2 gap-sm-4">
                <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Flogin%3Flang%3Den">
                  <img className="nav_app_w" src={App_1} alt="App_1" />
                </a>
                <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Flogin%3Flang%3Den">
                  <img className="nav_app_w" src={app_2} alt="App_1" />
                </a>
                <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Flogin%3Flang%3Den">
                  <img className="nav_app_w" src={App_3} alt="App_1" />
                </a>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default MyNav;
