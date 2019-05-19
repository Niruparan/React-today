import React, { Component } from "react";
import { Button, Input } from "@material-ui/core/";

class Login extends Component {
  render() {
    return (
      <div align="center">
        <h3>Login</h3>
        <form>
          <Input
            placeholder="Emailid"
            disabled
            style={{ width: "250px", margin: "10px" }}
          />
          <br />

          <Input
            placeholder="Password"
            disabled
            style={{ width: "250px", margin: "10px" }}
          />
          <br />

          <Button
            variant="contained"
            color="primary"
            type="SUBMIT"
            style={{ width: "250px", padding: "15px", margin: "5px" }}
          >
            LOGIN
          </Button>
        </form>
      </div>
    );
  }
}

export default Login;
