import React, { useEffect, useState } from "react";
import Table from "./Table";
// import qrCode from "../assets/plov_alamedin.svg";
import qrCode from "../assets/mbank_qr.png";

const Check = ({ data, setShowCheck }) => {
  const [totalSum, setTotalSum] = useState(0);
  const [newData, setNewData] = useState(data);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
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
    }, 1000);
  }, []);
  return (
    <div className="container check" id="check" onClick={() => setShowCheck(false)}>
      <div className="line"></div>
      <h2 style={{ textAlign: "center" }}>Чайхана “Аламедин”</h2>
      <div className="line"></div>
      <ul className="list">
        <li>
          Чек № 1 | {date.toLocaleDateString("ru-Ru", { day: "2-digit", month: "2-digit", year: "numeric" })} |{" "}
          {date.toLocaleTimeString("ru-RU", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
          })}
        </li>
        <li>Кассир: Кайыргуль</li>
      </ul>
      <div className="line"></div>
      <Table data={newData} />
      <div className="line"></div>
      <div className="total">
        <p>Итого:</p>
        <p>{totalSum}сом</p>
      </div>
      <div style={{ textAlign: "center", marginTop: 20 }}>
        <img src={qrCode} style={{ objectFit: "cover", maxWidth: "80%", width: "100%", textAlign: "center" }} />
      </div>
    </div>
  );
};
export default Check;
