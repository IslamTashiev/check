import React, { useState } from "react";
import Table from "./Table";
import Check from "./Check";

const Footer = ({ products, handlePrint }) => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-table">
          <Table data={products} />
        </div>

        <button onClick={handlePrint} className="ready-button">
          Готово
        </button>
      </div>
    </div>
  );
};

export default Footer;
