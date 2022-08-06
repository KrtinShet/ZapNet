import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Header from "../../components/NavBar";

const index = () => {
  return (
    <>
      <Header />
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="formAddress">
            <Form.Label>Lender</Form.Label>
            <Form.Control type="text" placeholder="Enter Lender's address" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formUnits">
            <Form.Label>Units</Form.Label>
            <Form.Control type="text" placeholder="Enter Units" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default index;
