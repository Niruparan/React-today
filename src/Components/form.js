import React, { Component } from "react";
import { Button, Input } from "@material-ui/core/";

class Form extends Component {
  render() {
    return (
      <div align="center">
        <h2>form Material</h2>
        <form>
          <input
            placeholder="id00110211212"
            disabled
            style={{ width: "500px", margin: "10px" }}
          />
          <br />
          <Input
            placeholder="Enter Your Name"
            style={{ width: "500px", margin: "10px" }}
          />
          <br />

          <Input
            placeholder="Enter your mobile "
            style={{ width: "500px", margin: "10px" }}
          />
          <br />

          <Input
            placeholder="Enter Your Address"
            style={{ width: "500px", margin: "10px" }}
          />
          <br />

          <Button
            variant="contained"
            color="primary"
            type="SUBMIT"
            style={{ width: "500px", padding: "15px", margin: "5px" }}
          >
            SUBMIT
          </Button>
        </form>
      </div>
    );
  }
}
export default Form;
