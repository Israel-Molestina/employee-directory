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
    employees: {},
  };

  componentDidMount() {
    this.SearchEmp();
  }

  SearchEmp = () => {
    employeeAPI
      .employeeSearch()
      .then((res) => this.setState({ employees: res.data.results })) 
      .catch((err) => this.setState({ error: err.message }));
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
                <Table employees={this.state.employees} />
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}

export default Home;
