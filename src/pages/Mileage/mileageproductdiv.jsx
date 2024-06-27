import React from "react";
// @ts-ignore
import sports from "@/assets/images/mileage/sports.svg";

function MileageProductDiv({ params }) {
  const { img, team, pnm, pmile } = params;
  return (
    <div className="mileagePopularProductMainContent">
      <img src={img} alt="img" />
      <div className="mileageProductDivTxt">{team}</div>
      <div className="mileageProductDivTxt pnm">{pnm}</div>
      <div className="mileageProductDivTxt pmile">
        <img src={sports} alt="sports" width={20} height={20} />
        {pmile}
      </div>
    </div>
  );
}

export default MileageProductDiv;
