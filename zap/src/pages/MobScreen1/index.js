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
          <div
            style={{
              alignSelf: "center",
              marginTop: "0.75rem",
            }}
          >
            or
          </div>
          <div className="qr-code-section">
            <img src="/img/qr.png" />
          </div>
        </div>
        <div className="bottom-frame">
          <div className="bf-header">Scan it to Zap it ⚡</div>
          <div className="bf-available-units">
            <div style={{marginRight: '1.15rem'}}>Amount of units available</div>
            <div>100</div>
          </div>
          {/* <div className="loading-bar">bar</div> */}
          <div
            className="flex flex-cloumn"
            style={{
              margin: "1rem 0",
            }}
          >
            <div className="circle"></div>
            <p>Charge</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
