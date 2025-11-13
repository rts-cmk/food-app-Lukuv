import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Search, ArrowLeft } from "lucide-react";
import { Routes, Route, Link, NavLink, useNavigate } from "react-router";

function Product() {
  const { id } = useParams();
  const [burgers, setBurgers] = useState(null);

  useEffect(() => {
    fetch("/burgere.json")
      .then((res) => res.json())
      .then((data) => setBurgers(data.burgers)); // gem i state
  }, []);

  if (!burgers) return <p>Indlæser...</p>;

  const burger = burgers[parseInt(id)];

  if (!burger) return <p>Burger ikke fundet 😢</p>;

  return (
    <>
      <header className="productHeader">
        <Link to="/">
          <ArrowLeft />
        </Link>
        <Link to="/">
          <Search />
        </Link>
      </header>
      <img
        className="detailBurgerImg"
        src={"/" + burger.img + ".png"}
        alt={burger.name}
      />
      <h2 className="detailBurgerName">{burger.name}</h2>
      <p>
        {burger.rating} - {burger.time} mins
      </p>
      <br />
      <p>{burger.description}</p>
      <br />
      <p>spicy</p>
      <input className="detailRange" type="range" min={1} value={burger.spicy} max={5} />
    <span className="mild-hot">
      <p>mild</p><p>hot</p>
    </span>
    </>
  );
}

export default Product;
