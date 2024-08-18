import { useEffect, useState } from "react";
import Card from "./components/Card";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import Check from "./components/Check";
import CreateProductModal from "./components/CreateProductModal";

function App() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [checkProducts, setCheckProducts] = useState([]);
  const [showCheck, setShowCheck] = useState(false);
  const [products, setProducts] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const handlePrint = async () => {
    setShowCheck(true);
  };

  useEffect(() => {
    const localProducts = localStorage.getItem("products");

    if (!localProducts) {
      return localStorage.setItem("products", JSON.stringify([]));
    }

    setProducts(JSON.parse(localProducts));
  }, [showCreateModal]);

  return showCheck ? (
    <Check data={checkProducts} setShowCheck={setShowCheck} />
  ) : (
    <div className="App">
      <div className="card-list container">
        {products.map((item) => (
          <div key={item.id}>
            <Card data={item} setSelectedCard={setSelectedCard} products={checkProducts} />
          </div>
        ))}
        <div onClick={() => setShowCreateModal(true)} className="card-item add">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 6.6665V25.3332" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.66602 16H25.3327" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {selectedCard && (
        <Modal
          setProducts={setProducts}
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
          setCheckProducts={setCheckProducts}
        />
      )}
      {showCreateModal && <CreateProductModal setShowCreateModal={setShowCreateModal} />}

      <Footer products={checkProducts} handlePrint={handlePrint} setCheckProducts={setCheckProducts} />
    </div>
  );
}

export default App;
