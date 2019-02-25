import React from "react";
import { Card, CardBody, CardHeader, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { login } from "../services/accountService";

class Login extends React.Component {
  state = {
    email: "",
    password: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = () => {
    login(this.state)
      .then(resp => {
        console.log("Login success");
        console.log("token" + resp.access_token);
        window.sessionStorage.setItem("token", resp.access_token);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { password, email } = this.state;
    return (
      <div className="container">
        <div className="row" style={{ marginTop: "1em" }}>
          <div className="col-md-3" />
          <div className="col-md-6">
            <Card style={{ border: "1px solid black" }}>
              <CardHeader>
                <h3>Login</h3>
              </CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label forhtml="email">Email</Label>
                    <Input type="email" name="email" id="email" value={email} onChange={this.onChange} />
                  </FormGroup>
                  <FormGroup>
                    <Label forhtml="password">Password</Label>
                    <Input type="password" name="password" id="password" value={password} onChange={this.onChange} />
                  </FormGroup>
                  <Button type="button" onClick={this.onSubmit}>
                    Submit
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </div>
          <div className="col-md-3" />
        </div>
      </div>
    );
  }
}

export default Login;
