import React, { useState } from "react";

const CreateProductModal = ({ setShowCreateModal }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("https://draeger-mo.com/media/products/notfound.png");

  const handleOutsideClick = (e) => {
    if (e.target.className === "modal") {
      setShowCreateModal(false);
    }
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const saveProductData = () => {
    const products = localStorage.getItem("products");
    const newProduct = {
      image,
      title,
      count: 1,
      price,
      id: new Date(),
      unitOfMeasurement: " ",
    };
    if (!products) {
      return localStorage.setItem("products", JSON.stringify([newProduct]));
    }
    const parseProducts = JSON.parse(products);

    localStorage.setItem("products", JSON.stringify([...parseProducts, newProduct]));
    setShowCreateModal(false);
  };

  return (
    <div className="modal" onClick={handleOutsideClick}>
      <div className="modal-content">
        <div className="modal-card">
          <label>
            <input type="file" style={{ display: "none" }} onChange={handleFileChange} />
            <img className="moadl-card-image" src={image} />
          </label>
          <div className="modal-card-content">
            <div className="card-content-header">
              <input
                className="input"
                type="text"
                style={{ textAlign: "start", paddingLeft: 12 }}
                placeholder="Название продукта"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>
            <div className="modal-card-price">
              <input
                className="input"
                type="number"
                style={{ textAlign: "start", paddingLeft: 12 }}
                placeholder="Цена продукта"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              />
              <p>сом.</p>
            </div>
          </div>
        </div>
        <button className="ready-button" onClick={saveProductData}>
          Готово
        </button>
      </div>
    </div>
  );
};

export default CreateProductModal;
