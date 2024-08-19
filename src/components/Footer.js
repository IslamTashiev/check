import React, { useState } from "react";
import Table from "./Table";
import Check from "./Check";

const Footer = ({ products, handlePrint, setCheckProducts }) => {
  const handleReset = () => {
    if (!window.confirm("Вы действительно хотите очистить чек?")) return;
    setCheckProducts([]);
  };

  return (
    <div className="footer">
      <div className="container">
        <div className="footer-table">
          <Table data={products} />
        </div>

        <button disabled={products.length <= 0} onClick={handlePrint} className="ready-button">
          Готово
        </button>
        {products.length > 0 && (
          <button onClick={handleReset} className="ready-button reset">
            Сбросить
          </button>
        )}
      </div>
    </div>
  );
};

export default Footer;
