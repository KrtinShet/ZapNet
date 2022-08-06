import React from "react";
import Container from "react-bootstrap/Container";

function BasicExample({ transactionsList }) {
  return (
    <Container fluid>
      {transactionsList.map((obj) => {
        return (
          <div style={{ border: "1px #aeaeae solid" }} className="my-3 p-3">
            <div>Lender: {obj.lender}</div>
            <div>Borrower: {obj.Borrower}</div>
            <div>units : {obj.units} </div>
            <div>price: {obj.price} </div>
            <div>time: {obj.time} </div>
            <div>Transaction Hash:{obj.hash}</div>
            <div>Transaction Type: {obj.type} </div>
          </div>
        );
      })}
    </Container>
  );
}

export default BasicExample;
