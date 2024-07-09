import React from "react";
import { useNavigate } from "react-router-dom";

function HomeAccountDivTransaction({ params }) {
  const navigate = useNavigate();
  return (
    <div
      className={`mainAccountDivBtn ${params.cnm}`}
      onClick={() =>
        navigate("/maccount/transfer/input", {
          state: {
            accountIdx: params.idx,
            accountName: params.acnm,
            accountNumber: params.acnum,
            sender: params.unm
          }
        })
      }
    >
      <div>{params.content}</div>
    </div>
  );
}

export default HomeAccountDivTransaction;
