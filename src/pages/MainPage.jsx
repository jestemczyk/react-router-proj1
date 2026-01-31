import React from "react";
import { Link } from "react-router";
import { Card } from "../components/Card";
import cards from "../cards.json";

export const MainPage = () => {
  return (
    <div>
      <h1>Cards</h1>
      {cards.map((card) => (
        <Card
          key={card.index}
          id={card.index}
          title={card.title}
          price={card.price}
        />
      ))}
    </div>
  );
};
