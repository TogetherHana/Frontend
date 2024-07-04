import React from "react";

function StockDiv({ params }) {
  const { svg, name, onClick } = params;
  return (
    <div className="stockDiv" onClick={onClick}>
      <img src={svg} alt="img" width="60" height="60" className="stockImg" />
      <div className="stockName">{name}</div>
    </div>
  );
}

export default StockDiv;
