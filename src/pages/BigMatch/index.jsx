import React from "react";
import "./style.scss";
import Button from "@/components/Button";

const ships = [
  {
    id: 1,
    company: "두산",
    users: ["젼", "쥬", "찬", "민", "곤"]
  },
  { id: 2, company: "롯데", users: ["찬", "민", "곤"] },
  { id: 3, company: "두산", users: ["젼", "쥬"] },
  { id: 4, company: "롯데", users: ["찬", "민", "곤"] },
  { id: 5, company: "두산", users: ["젼", "쥬"] },
  { id: 6, company: "롯데", users: ["찬", "민", "곤"] }
  // 더 많은 배를 추가할 수 있습니다.
];

function Bigmatch() {
  return (
    <>
      <div className="BeforeVote-container">
        <div className="header">
          <div className="back">&lt;</div>
          <div>빅매치 겨루기</div>
          <div className="row-dummy"></div>
        </div>

        <div className="title-container">
          <div>두산 VS 롯데</div>
          <div>오늘의 승자는?</div>
          <div
            style={{
              width: "100%",
              textAlign: "center",
              borderBottom: "2px solid black",
              margin: "10px 0 20px"
            }}
          />
        </div>

        <div className="content-container">
          {ships.map((ship, index) => (
            <div
              key={ship.id}
              className={`ship-container ${index % 2 === 0 ? "odd" : "even"}`}
            >
              <div className="choose-info">
                <div className="choose">
                  {/* <label for="agree1" class="radio_box">
                    <input
                      type="radio"
                      id="agree1"
                      name="agree"
                      value="동의"
                      checked="checked"
                    />
                    <span class="on"></span>
                    동의
                  </label>
                  <label for="agree2" class="radio_box">
                    <input
                      type="radio"
                      id="agree2"
                      name="agree"
                      value="미동의"
                    />
                    <span class="on"></span>
                    미동의
                  </label> */}
                  
                  <input
                    type="radio"
                    id={`ship-${ship.id}`}
                    name="ship"
                    value={ship.company}
                  />
                  <div className="radio-row-dummy" />
                  <label htmlFor={`ship-${ship.id}`}>{ship.company}</label>
                </div>
                <div className="choose-container">
                  <div className="ship-img" />
                  <div className="user-names">
                    {ship.users.map((user, idx) => (
                      <div className="user-container">
                        <div className="user-profile" />
                        <div className="user-name" key={idx}>
                          {user}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <Button className="btn" onClick={() => {}}>
            한배타기
          </Button>
        </div>
      </div>
    </>
  );
}

export default Bigmatch;
