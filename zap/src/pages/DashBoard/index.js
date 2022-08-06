import React from "react";
import Container from "react-bootstrap/Container";
import CardList from "../../components/CardList";
import NavBar from "./../../components/NavBar";

const index = () => {
  const jsondata = [
    {
      lender: "0x3541671c69EE42C20821209D1B3B93c8Cc06a332",
      Borrower: "0x3541671c69EE42C20821209D1B3B93c8Cc06a332",
      units: 32,
      time: 168880232342,
      hash: "0x3541671c69EE42C20821209D1B3B93c8Cc06a332F",
      type: "lend",
    },
    {
      lender: "0x3541671c69EE42C20821209D1B3B93c8Cc06a332",
      Borrower: "0x3541671c69EE42C20821209D1B3B93c8Cc06a332",
      units: 32,
      time: 168880232342,
      hash: "0x3541671c69EE42C20821209D1B3B93c8Cc06a332F",
      type: "lend",
    },
    {
      lender: "0x3541671c69EE42C20821209D1B3B93c8Cc06a332",
      Borrower: "0x3541671c69EE42C20821209D1B3B93c8Cc06a332",
      units: 32,
      time: 168880232342,
      hash: "0x3541671c69EE42C20821209D1B3B93c8Cc06a332F",
      type: "lend",
    },
    {
      lender: "0x3541671c69EE42C20821209D1B3B93c8Cc06a332",
      Borrower: "0x3541671c69EE42C20821209D1B3B93c8Cc06a332",
      units: 32,
      time: 168880232342,
      hash: "0x3541671c69EE42C20821209D1B3B93c8Cc06a332F",
      type: "lend",
    },
    {
      lender: "0x3541671c69EE42C20821209D1B3B93c8Cc06a332",
      Borrower: "0x3541671c69EE42C20821209D1B3B93c8Cc06a332",
      units: 32,
      time: 168880232342,
      hash: "0x3541671c69EE42C20821209D1B3B93c8Cc06a332F",
      type: "lend",
    },
    {
      lender: "0x3541671c69EE42C20821209D1B3B93c8Cc06a332",
      Borrower: "0x3541671c69EE42C20821209D1B3B93c8Cc06a332",
      units: 32,
      time: 168880232342,
      hash: "0x3541671c69EE42C20821209D1B3B93c8Cc06a332F",
      type: "lend",
    },
  ];
  return (
    <>
      <NavBar />
      <Container>
        <div className="mt-5">
          <h2>User: 0x3541671c69EE42C20821209D1B3B93c8Cc06a332</h2>
          <h5>Total Units lent: 1000</h5>
          <h5>max Units Transfer Quota: 5</h5>
          <h5>Current Units Left: 3</h5>
          <h5>Can lend Energy: false</h5>
          <div className="mt-3"> </div>
        </div>
        <h5>Transactions: </h5>
        <div
          style={{
            width: "100%",
            height: "40rem",
            overflow: "scroll",
          }}
        >
          <CardList transactionsList={jsondata} />
        </div>
      </Container>
    </>
  );
};

export default index;
