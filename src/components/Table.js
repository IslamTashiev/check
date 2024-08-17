import React from "react";

const Table = ({ data }) => {
  return (
    <table className="main-table">
      <thead className="main-thead">
        <tr>
          <th>Название</th>
          <th>Кол-во.</th>
          <th>Цена</th>
          <th>Сумма</th>
        </tr>
      </thead>
      <tbody className="main-tbody">
        {data.map((item) => (
          <tr key={item.id}>
            <td style={{ width: "40%" }}>{item.title}</td>
            <td style={{ textAlign: "center" }}>{item.count}</td>
            <td style={{ textAlign: "center" }}>{item.price}</td>
            <td style={{ textAlign: "center" }}>{item.sum}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
