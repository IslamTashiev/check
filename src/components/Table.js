import React from "react";

const Table = ({ data }) => {
  return (
    <div className="table">
      <div
        style={{ display: "flex", backgroundColor: "#67a4ff2a", padding: "12px", borderRadius: "10px 10px 4px 4px " }}
      >
        <div style={{ width: "60%", fontWeight: 700 }}>Название</div>
        {/* <div style={{ width: "20%", textAlign: "center", fontWeight: 700 }}>Кол-во.</div> */}
        <div style={{ width: "20%", textAlign: "center", fontWeight: 700 }}>Цена</div>
        <div style={{ width: "20%", textAlign: "center", fontWeight: 700 }}>Сумма</div>
      </div>

      <div>
        {data.map((item) => (
          <div key={item.id} style={{ display: "flex", padding: 12, borderBottom: "1px solid #ddd" }}>
            <div
              style={{
                fontWeight: 400,
                fontSize: 20,
                width: "60%",
                textAlign: "start",
                display: "flex",
                gap: 10,
                alignItems: "center",
              }}
            >
              <p>{item.title}</p> <p>{item.count && " x "}</p>{" "}
              <p>{`${item.count ?? ""}${item.unitOfMeasurement ?? ""}`}</p>
            </div>
            {/* <div
              style={{ fontWeight: 400, fontSize: 20, width: "20%", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              {`${item.count ?? ""}${item.unitOfMeasurement ?? ""}`}
            </div> */}
            <div
              style={{
                fontWeight: 400,
                fontSize: 20,
                width: "20%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {item.price}
            </div>
            <div
              style={{
                fontWeight: 400,
                fontSize: 20,
                width: "20%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {item.sum}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
