import React from "react";
import pwfootball from "@/assets/images/meetaccountinfo/pwfootball.svg";
import pwbaseball from "@/assets/images/meetaccountinfo/pwbaseball.svg";
import pwbasketball from "@/assets/images/meetaccountinfo/pwbasketball.svg";
import pwvolleyball from "@/assets/images/meetaccountinfo/pwvolleyball.svg";

function MaskingPwArea({ digit }) {
  const getImgSrc = (digit) => {
    switch (digit) {
      case 0:
        return pwfootball;
      case 1:
        return pwbaseball;
      case 2:
        return pwbasketball;
      case 3:
        return pwvolleyball;
    }
  };
  return (
    <div className="maskingPwArea">
      <img src={getImgSrc(digit)} />
    </div>
  );
}

export default MaskingPwArea;
