import React, { Component } from "react";

import { Button } from "@material-ui/core";

class StateExample extends Component {
  constructor() {
    super();
    this.changeName = this.changeName.bind(this);
    this.state = { name: "pakke", age: "24", email: "pakke@gmail.com" };
  }

  changeName() {
    this.setState({ name: "sp", age: "22", email: "sp@gmail.com" });
  }
  render() {
    return (
      <div>
        <h4>Hello{this.state.name}</h4>
        <h4>Hello{this.state.age}</h4>
        <h4>Hello{this.state.email}</h4>

        <Button colour="primary" variant="contained" onClick={this.changeName}>
          CHAGE
        </Button>
      </div>
    );
  }
}
export default StateExample;
