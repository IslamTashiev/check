import React from "react";

const Table = ({ data }) => {
  return (
    <div>
      <div
        style={{ display: "flex", backgroundColor: "#67a4ff2a", padding: "12px", borderRadius: "10px 10px 4px 4px " }}
      >
        <div style={{ width: "40%", fontWeight: 600 }}>Название</div>
        <div style={{ width: "20%", textAlign: "center", fontWeight: 600 }}>Кол-во.</div>
        <div style={{ width: "20%", textAlign: "center", fontWeight: 600 }}>Цена</div>
        <div style={{ width: "20%", textAlign: "center", fontWeight: 600 }}>Сумма</div>
      </div>

      <div>
        {data.map((item) => (
          <div key={item.id} style={{ display: "flex", padding: 12, borderBottom: "1px solid #ddd" }}>
            <div style={{ width: "40%", textAlign: "start" }}>{item.title}</div>
            <div style={{ width: "20%", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {item.count}
            </div>
            <div style={{ width: "20%", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {item.price}
            </div>
            <div style={{ width: "20%", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {item.sum}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
