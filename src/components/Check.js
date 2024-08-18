import React, { useEffect, useState } from "react";
import Table from "./Table";
import qrCode from "../assets/plov_alamedin.svg";

const Check = ({ data, setShowCheck }) => {
  const [totalSum, setTotalSum] = useState(0);
  const [newData, setNewData] = useState(data);

  useEffect(() => {
    // setTotalSum(data.map((el) => el.sum).reduce((acc, el) => acc + el, 0));
    const res = [
      ...data,
      {
        title: "Услуга",
        price: "15%",
        id: 1345,
        sum: Math.floor(data.map((el) => el.sum).reduce((acc, el) => acc + el, 0) * 0.15),
      },
    ];
    setNewData(res);
    setTotalSum(res.map((el) => el.sum).reduce((acc, el) => acc + el, 0));
    setTimeout(() => {
      window.print();
    }, 100);
    // setTimeout(() => {
    //   setShowCheck(false);
    // }, 1000);
  }, []);
  return (
    <div className="container check" id="check">
      <div className="line"></div>
      <h2 style={{ textAlign: "center" }}>Чайхана “Аламедин”</h2>
      <div className="line"></div>
      <ul className="list">
        <li>Чек № 433 | 17.08.2024 | 22:31:59</li>
        <li>Кассир: Ислам Ташиев</li>
      </ul>
      <div className="line"></div>
      <Table data={newData} />
      <div className="line"></div>
      <div className="total">
        <p>Итого:</p>
        <p>{totalSum}сом</p>
      </div>
      <div style={{ textAlign: "center", marginTop: "80px" }}>
        <object type="image/svg+xml" data={qrCode}></object>
      </div>
    </div>
  );
};
export default Check;
