import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router";

export const CardPage = ({ cards }) => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h1>{cards[params.id - 1].title}</h1>
      <p>{cards[params.id - 1].price}$</p>
      <div>
        <Link to="/">
          <button>Home</button>
        </Link>
        <button>Buy</button>
      </div>
    </div>
  );
};
