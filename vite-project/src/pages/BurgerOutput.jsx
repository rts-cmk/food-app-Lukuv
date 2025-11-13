import React, { useEffect, useState } from "react";
import { Routes, Route, Link, NavLink, useNavigate } from "react-router";

const BurgerOutput = () => {
  const [burgers, setBurgers] = useState([]);

  useEffect(() => {
    fetch("/burgere.json")
      .then((response) => response.json())
      .then((data) => setBurgers(data.burgers));
  }, []);

  return (
    <div className="burgerGrid">
      {burgers.map((burger, index) => (
        <Link to={`product/${index}`} key={burger.type} className="burgerCard">
          <img className="burgerImg" src={burger.img + ".png"} alt={burger.type + " Img"} />
          <h2 className="burgerName">{burger.name}</h2>
          <p className="burgerType">{burger.type}</p>
          <p className="burgerRating"><img src="/star.png" alt="star" />{burger.rating}</p>
        </Link>
      ))}
    </div>
  );
};

export default BurgerOutput;
