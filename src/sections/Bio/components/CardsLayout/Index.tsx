import React from "react";
import Card from "./Card/Index";
import { cardsData } from "../../../../data/cardsData";

const CardsLayout: React.FC = () => {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 sm-lg:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-center">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          icon={card.icon}
          subtitle={card.subtitle}
          body={card.body}
        />
      ))}
    </div>
  );
};

export default CardsLayout;
