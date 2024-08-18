import React, { useEffect, useState } from "react";
import Table from "./Table";

const Modal = ({ selectedCard, setSelectedCard, setProducts }) => {
  const { price, count, unitOfMeasurement, title, image } = selectedCard;

  const [newPrice, setPrice] = useState(price);
  const [newCount, setCount] = useState(count);
  const [tableData, setTableData] = useState([]);

  const increaseCount = () => {
    setCount((prevState) => +prevState.split(unitOfMeasurement)[0] + 1 + unitOfMeasurement);
  };
  const decreaseCount = () => {
    setCount((prevState) => +prevState.split(unitOfMeasurement)[0] - 1 + unitOfMeasurement);
  };
  const onCloseModal = () => {
    setSelectedCard(null);
    setProducts((prevState) => [...(prevState ?? []), ...tableData]);
  };
  const handleOutsideClick = (e) => {
    if (e.target.className === "modal") {
      setSelectedCard(null);
    }
  };

  useEffect(() => {
    setCount((prevState) => prevState + unitOfMeasurement);

    setTableData([{ ...selectedCard, sum: selectedCard.price * selectedCard.count }]);
  }, []);

  useEffect(() => {
    setTableData([
      {
        ...selectedCard,
        price: parseFloat(newPrice),
        count: parseFloat(newCount),
        sum: parseFloat(newPrice) * parseFloat(newCount),
      },
    ]);
  }, [newPrice, newCount]);

  return (
    <div className="modal" onClick={handleOutsideClick}>
      <div className="modal-content">
        <div className="modal-card">
          <img className="moadl-card-image" src={image} />
          <div className="modal-card-content">
            <div className="card-content-header">
              <h3>{title}</h3>
            </div>
            <div className="modal-card-price">
              <input className="input" type="text" value={newPrice} onChange={(e) => setPrice(e.target.value)} />
              <p>сом.</p>
            </div>
            <div className="card-counter">
              <button className="counter-button" onClick={decreaseCount} disabled={parseInt(newCount) <= 0}>
                -
              </button>
              <input className="input" type="text" value={newCount} onChange={(e) => setCount(e.target.value)} />
              <button className="counter-button" onClick={increaseCount} disabled={parseInt(newCount) >= 100}>
                +
              </button>
            </div>
          </div>
        </div>
        <Table data={tableData} />
        <button onClick={onCloseModal} className="ready-button">
          Готово
        </button>
      </div>
    </div>
  );
};

export default Modal;
