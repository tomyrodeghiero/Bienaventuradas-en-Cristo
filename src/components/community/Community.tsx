import React from "react";
import "./community.scss";

const Community = () => {
  return (
    <div className="community__container">
      <h1 className="community__title">¡Únete a nuestra comunidad!</h1>
      <h5 className="community__subtitle">
        No te pierdas la oportunidad de encontrar artículos Cristianos
        reflexivos e inspiradores.
      </h5>

      <div className="community__input__container">
        <input
          type="text"
          className="community__input"
          placeholder="Tu Email"
        />
        <div className="community__subscribe--btn">Subscribirse</div>
      </div>
    </div>
  );
};

export default Community;
