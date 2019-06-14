import React, { Component } from "react";
import "tachyons";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Card from "./components/Card";
import CardList from "./CardList";
import Scroll from "./components/Scroll";
import Total from "./components/Total";

import SearchBox from "./components/SearchBox";
class App extends Component {
  state = {
    Users: [],
    Searchfield: "",
    Total: "",
    count: 0
  };

  valuebtn = () => {
    this.setState({
      value: this.state.value
    });
    console.log("valueee");
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {
        {
          this.setState({ Users: users });
        }
      });
  }
  //removed extra braces after users => {}
  onSearchChange = event => {
    this.setState({ Searchfield: event.target.value });
  };

  Increment = () => {
    this.setState({ count: this.state.count + 1 });
    console.log("clicked plus btn");
  };
  Decrement = () => {
    this.setState({ count: this.state.count + 1 });
    console.log("clicked minus btn");
  };
  StatusOfCount = () => {
    return this.state.count === 0 ? "Empty" : this.state.count;
    console.log("clicked sts btn");
  };

  render() {
    const searchedUsers = this.state.Users.filter(Users => {
      return Users.name
        .toLowerCase()
        .includes(this.state.Searchfield.toLowerCase());
    });
    if (this.state.Users.length === 0) {
      return <h1>Loading,Please wait..</h1>;
    } else {
      return (
        <div>
          <h1 className="center bg-lightest-blue shadow-4">
            Items List in Cart
          </h1>
          <SearchBox className="shadow-4" SearchChange={this.onSearchChange} />
          <Scroll>
            <CardList
              Users={searchedUsers}
              Increment={this.Increment}
              Decrement={this.Decrement}
              StatusOfCount={this.StatusOfCount}
              count="0"
            />
          </Scroll>
          <Total />
        </div>
      );
    }
  }
}

export default App;
