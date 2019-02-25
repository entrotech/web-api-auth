import React from "react";
import { Card, CardHeader, CardBody } from "reactstrap";
import { getAll } from "../services/userService";
import { Button } from "reactstrap";

class Users extends React.Component {
  state = {
    users: [{ firstName: "John", lastName: "Smith", id: 7 }]
  };

  componentDidMount() {
    this.onSearch();
  }

  onSearch = () => {
    getAll()
      .then(users => {
        this.setState({ users });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { users } = this.state;
    return (
      <div className="container">
        <div className="row" style={{ marginTop: "1em" }}>
          <div className="col-md-3" />
          <div className="col-md-6">
            <Card style={{ border: "1px solid black" }}>
              <CardHeader>
                <h3>Users</h3>
              </CardHeader>
              <CardBody>
                <Button type="button" onClick={this.onSearch}>
                  Search
                </Button>
                {users.map(user => (
                  <div key={user.id}>
                    <h5>{user.email}</h5>
                    <p>{user.id}</p>
                  </div>
                ))}
              </CardBody>
            </Card>
          </div>
          <div className="col-md-3" />
        </div>
      </div>
    );
  }
}

export default Users;
