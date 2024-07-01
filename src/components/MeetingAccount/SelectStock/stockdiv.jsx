import React from "react";

function StockDiv({ params }) {
  const { svg, name } = params;
  return (
    <div className="stockDiv">
      <img src={svg} alt="img" width="60" height="60" className="stockImg" />
      <div className="stockName">{name}</div>
    </div>
  );
}

export default StockDiv;
