import React, { Component } from "react";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Users from "./Components/Users";
import { getUserInfo } from "./services/accountService";
import { Button } from "reactstrap";

class App extends Component {
  state = {
    userEmail: ""
  };

  componentDidMount() {
    this.onGetCurrentUser();
  }

  onGetCurrentUser = () => {
    getUserInfo()
      .then(resp => {
        this.setState({ userEmail: resp.email });
      })
      .catch(err => {
        this.setState({ userEmail: "Please Log In" });
      });
  };

  render() {
    return (
      <div>
        <h2>{this.state.userEmail}</h2>
        <Button type="button" onClick={this.onGetCurrentUser}>
          Refresh User
        </Button>
        <Login />
        <Register />
        <Users />
      </div>
    );
  }
}

export default App;
