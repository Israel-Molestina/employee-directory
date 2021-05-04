import React, { Component } from "react";
import Col from "../components/Col";
import Container from "../components/Container";
import Row from "../components/Row";
import Table from "../components/Table";
import Header from "../components/Header";
import SearchFrom from "../components/SearchFrom";
import employeeAPI from "../utils/employeeAPI";

class Home extends Component {
  state = {
    result: {},
  };

  componentDidMount() {
    this.SearchEmp();
  }

  SearchEmp = () => {
    employeeAPI
      .employeeSearch()
      .then((res) => this.setState({ result: res.data.results }));
  };
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <section>
          <Container>
            <Row>
              <Col size="md-3">
                <SearchFrom />
              </Col>
            </Row>
            <Row>
              <Col size="md-12">
                <Table 
                result={this.result}/>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}

export default Home;
