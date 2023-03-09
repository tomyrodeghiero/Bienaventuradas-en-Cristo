import React, { useContext, useEffect, useState } from "react";
import "./loginScreen.scss";

import BienaventuradasEnCristo_logotype from "../../assets/BienaventuradasEnCristo_logotype.png";
import i18next from "i18next";
import EnglishFlag from "../../assets/great-britain.png";
import SpainFlag from "../../assets/spain.png";
import Writer from "../../assets/BienaventuradasEnCristo_login.png";
import UserContext from "../../context/UserContext";
import { Navigate, useNavigate } from "react-router-dom";

const LoginScreen = () => {
  // states
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);

  const login = async (event: any) => {
    event.preventDefault();
    const response = await fetch(
      "https://blog-project-red-seven.vercel.app/api/login",
      {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-type": "application/json" },
        credentials: "include",
      }
    );

    console.log("response", response);

    if (response.ok) {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
        // setRedirect(true);
      });
    } else {
      alert("wrong credentials");
    }
  };

  const navigate = useNavigate();
  if (redirect) {
    navigate("/");
  }

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <form className="login__container" onSubmit={login}>
      <header className="login__header">
        <img
          src={BienaventuradasEnCristo_logotype}
          alt="Bienaventuradas en Cristo"
          className="login__logotype"
        />

        <img
          src={i18next.language === "en" ? EnglishFlag : SpainFlag}
          className="login__flag"
          alt="flag"
        />
      </header>

      <section className="login__section">
        {windowWidth > 1024 && (
          <div className="login__left-section">
            <div className="login__top-section">
              <h2 className="login-purpose__text">Writing with a purpose</h2>
              <h1 className="login__title">Glorify You Jesus</h1>
            </div>
            <img src={Writer} alt="Writer" className="login__img" />
          </div>
        )}

        <div className="login__right-section">
          <div>
            <h4 className="login__welcome">Welcome!</h4>

            <div className="login__credentials">
              <h3 className="login__enter-credentials">
                Enter your credentials to access
              </h3>

              <p className="login__start-writing">
                Let's start writing
                <span style={{ marginLeft: "0.75rem" }}>😊</span>
              </p>
            </div>
          </div>

          <div>
            <div className="input__container">
              <h5 className="input__label">User name</h5>
              <input
                type="text"
                className="input__text"
                placeholder="Enter your user name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="input__container">
              <h5 className="input__label">Password</h5>
              <input
                type="password"
                className="input__text"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button className="login__btn">Login</button>
        </div>
      </section>
    </form>
  );
};

export default LoginScreen;
