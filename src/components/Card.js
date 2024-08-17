import React, { useEffect, useState } from "react";

const Card = ({ setSelectedCard, data, products }) => {
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const card = products.find((element) => element.id === data.id);
    setIsAdded(!!card);
  }, [products]);

  return (
    <div className={isAdded ? "card-item added" : "card-item"} onClick={() => setSelectedCard(data)}>
      <img className="card-image" src={data.image} />
      <h3 className="card-item-title">{data.title}</h3>
    </div>
  );
};

export default Card;
