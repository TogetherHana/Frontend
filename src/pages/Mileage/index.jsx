import React from "react";
import "./style.scss";
import MileageProductCategory from "../../components/Mileage/mileage-product-category";
// @ts-ignore
import carousel1 from "@/assets/images/mileage/carousel1.svg";
// @ts-ignore
import harange from "@/assets/images/mileage/harange.svg";
// @ts-ignore
import oldschoolbolcap from "@/assets/images/mileage/oldschoolbolcap.svg";
// @ts-ignore
import jjangguuniform from "@/assets/images/mileage/jjangguuniform.svg";
import MileageProductDiv from "../../components/Mileage/mileage-product-div";

function Mileage() {
  const categoryParams = [
    {
      content: "야구"
    },
    {
      content: "축구"
    },
    {
      content: "E-스포츠"
    }
  ];

  const itemParams = [
    {
      img: harange,
      team: "[기아 타이거즈]",
      pnm: "하랑이 홈런 인형",
      pmile: "7,000M"
    },
    {
      img: oldschoolbolcap,
      team: "[롯데 자이언츠]",
      pnm: "올드스쿨 코튼 볼캡",
      pmile: "8,500M"
    }
  ];

  const newitemParams = [
    {
      img: jjangguuniform,
      team: "[롯데 자이언츠]",
      pnm: "짱구 유니폼 2024",
      pmile: "7,000M"
    }
  ];
  return (
    <div>
      <div className="mileageTitle">스포츠 마일리지 굿즈샵</div>
      <div className="mileageCarousel">
        <img src={carousel1} alt="carousel1" />
      </div>
      <div className="mileageProduct">
        {categoryParams.map(
          (
            item,
            // @ts-ignore
            index
          ) => (
            <MileageProductCategory key={index} content={item.content} />
          )
        )}
      </div>
      {/* 인기 상품 */}
      <div className="mileagePopularProduct">
        <div>
          <div>인기 상품</div>
          <div className="more">더보기 &gt;</div>
        </div>
        <div className="maincontent">
          {itemParams.map(
            (
              item,
              // @ts-ignore
              index
            ) => (
              <MileageProductDiv params={item} />
            )
          )}
        </div>
      </div>
      {/* New Arrival */}
      <div className="mileagePopularProductBelow">
        <div>
          <div>New Arrival</div>
          <div className="more">전체 상품 보기 &gt;</div>
        </div>
        <div className="maincontent">
          {newitemParams.map(
            (
              item,
              // @ts-ignore
              index
            ) => (
              <MileageProductDiv params={item} />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Mileage;
