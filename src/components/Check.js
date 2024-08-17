import React, { useEffect } from "react";
import Table from "./Table";
import qrCode from "../assets/plov_alamedin.svg";

const Check = ({ data, setShowCheck }) => {
  useEffect(() => {
    setTimeout(() => {
      window.print();
    }, 100);
    setTimeout(() => {
      setShowCheck(false);
    }, 1000);
  }, []);
  return (
    <div className="container check">
      <div className="line"></div>
      <h2 style={{ textAlign: "center" }}>Чайхана “Аламедин”</h2>
      <div className="line"></div>
      <ul className="list">
        <li>Чек № 433 | 17.08.2024 | 22:31:59</li>
        <li>Кассир: Ислам Ташиев</li>
      </ul>
      <div className="line"></div>
      <Table data={data} />
      <div className="line"></div>
      <div className="total">
        <p>Итого:</p>
        <p>19000сом</p>
      </div>
      <div style={{ textAlign: "center", marginTop: "80px" }}>
        <object type="image/svg+xml" data={qrCode}></object>
      </div>
    </div>
  );
};
const arr = [
  {
    title: "Hello",
    count: "1",
    price: "2020",
    image: "https://bogatyr.club/uploads/posts/2023-06/1686874889_bogatyr-club-p-belii-plov-foni-vkontakte-7.jpg",
    unitOfMeasurement: "кг",
    id: 1,
  },
  {
    title: "Hola",
    count: "1",
    price: "1200",
    image: "https://bogatyr.club/uploads/posts/2023-06/1686874889_bogatyr-club-p-belii-plov-foni-vkontakte-7.jpg",
    unitOfMeasurement: "vv",
    id: 123,
  },
  {
    title: "Privet",
    count: "1",
    price: "1200",
    image: "https://bogatyr.club/uploads/posts/2023-06/1686874889_bogatyr-club-p-belii-plov-foni-vkontakte-7.jpg",
    unitOfMeasurement: "qq",
    id: 121,
  },
  {
    title: "Privet",
    count: "1",
    price: "1200",
    image: "https://bogatyr.club/uploads/posts/2023-06/1686874889_bogatyr-club-p-belii-plov-foni-vkontakte-7.jpg",
    unitOfMeasurement: "кг",
    id: 124,
  },
  {
    title: "Privet",
    count: "1",
    price: "1200",
    image: "https://bogatyr.club/uploads/posts/2023-06/1686874889_bogatyr-club-p-belii-plov-foni-vkontakte-7.jpg",
    unitOfMeasurement: "кг",
    id: 125,
  },
  {
    title: "Privet",
    count: "10",
    price: "12",
    image: "https://bogatyr.club/uploads/posts/2023-06/1686874889_bogatyr-club-p-belii-plov-foni-vkontakte-7.jpg",
    unitOfMeasurement: "кг",
    id: 128,
  },
];
export default Check;
