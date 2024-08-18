import { useState } from "react";
import Card from "./components/Card";
import Modal from "./components/Modal";
import Table from "./components/Table";
import Footer from "./components/Footer";
import Check from "./components/Check";

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

function App() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [products, setProducts] = useState([]);
  const [showCheck, setShowCheck] = useState(false);

  const handlePrint = async () => {
    setShowCheck(true);
  };

  return showCheck ? (
    <Check data={products} setShowCheck={setShowCheck} />
  ) : (
    <div className="App">
      <div className="card-list container">
        {arr.map((item) => (
          <div key={item.id}>
            <Card data={item} setSelectedCard={setSelectedCard} products={products} />
          </div>
        ))}
        <div class="card-item add">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 6.6665V25.3332" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.66602 16H25.3327" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {selectedCard && (
        <Modal selectedCard={selectedCard} setSelectedCard={setSelectedCard} setProducts={setProducts} />
      )}

      <Footer products={products} handlePrint={handlePrint} />
    </div>
  );
}

export default App;
