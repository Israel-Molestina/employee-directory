import React, { Component } from "react";
import Col from "../components/Col";
import Container from "../components/Container";
import Row from "../components/Row";
import Table from "../components/Table";
import Header from "../components/Header";

class Home extends Component {
  state = {
    result: {},
  };

  render() {
    return (
      <div>
        <Header />
        <body>
          <Container>
            <Row>
              <Col size="md-12">
                <Table />
              </Col>
            </Row>
          </Container>
        </body>
      </div>
    );
  }
}

export default Home;
