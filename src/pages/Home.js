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
    employees: [],
    userEmployees: "",
    filterEmployees: [],
    isAlph: false,
  };

  componentDidMount() {
    this.SearchEmp();
  }

  SearchEmp = () => {
    employeeAPI
      .employeeSearch()
      .then((res) =>
        this.setState({
          employees: res.data.results,
          filterEmployees: res.data.results,
        })
      )
      .catch((err) => this.setState({ error: err.message }));
  };

  handleInputChange = (event) => {
    // event.preventDefault();
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      () => this.filter(event.target.value)
    );
    console.log(this.state.userEmployees);
  };

  filter = () => {
    if (!this.state.userEmployees) {
      this.setState({ filterEmployees: this.state.employees });
    } else {
      let newEmp = this.state.employees.filter((emp) =>
        emp.name.first.includes(this.state.userEmployees)
      );
      console.log(newEmp);

      this.setState({ filterEmployees: newEmp });
      console.log(this.state.filterEmployees);
    }
  };

  handleBtnClick = () => {
    if (this.state.isAlph) {
      // google a sorting function to do over filterEmployees array
      // use .sort() on filterEmployees
      // if else statemnt within .sort() a.name.sort > b.name.sort if true return 1 if false return -1
    } else {
      // a.name.first < b.name.first
      // fun the oppposite of the above sort funcntion
    }

    //once i sort it change state to true
    this.setState({ isAlph: true });
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
                <SearchFrom
                  handleInputChange={this.handleInputChange}
                  input={this.state.userEmployees}
                />
              </Col>
            </Row>
            <Row>
              <Col size="md-12">
                <Table employees={this.state.filterEmployees} />
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}

export default Home;
