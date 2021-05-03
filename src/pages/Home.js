import React, { Component } from "react";
import Col from "../components/Col";
import Container from "../components/Container";
import Row from "../components/Row";
import Table from "../components/Table";

class Home extends Component {
  state = {
    result: {},
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Table />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
