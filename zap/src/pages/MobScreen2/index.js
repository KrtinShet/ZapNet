import React from "react";
import "./index.css";

const index = () => {
  return (
    <div className="container mob-container">
      <div className="mob-frame">
        <div className="top-frame">
          <div>
            <p style={{ fontSize: "1.25rem", fontWeight: "400" }}>Uid No:</p>
            <p style={{ fontSize: "2rem" }}>0x123@zap.pay</p>
          </div>
        </div>

        <div className="bottom-frame">
          <div className="bf-header flex flex-cloumn">
            <div className="green-circle"></div>
            <p>Charging ⚡</p>
          </div>

          <div className="bf-available-units">
            <div style={{ marginRight: "1.15rem" }}>
              Amount of units Borrowed
            </div>
            <div>6 Units</div>
          </div>

          <div className="loader"></div>
          <div className="bf-units-left">{4} Left</div>
          <div className="bf-sub-heading">Remaining</div>
          <div className="bf-lender-addr">
            <p>from</p>
            {/* <span>`${}`</span> */}
            <div>0x23jhqowy19519qyhlfh4u5</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
