import React, { Component } from "react";

class Update extends React.Component {
  constructor() {
    super();
    this.state = {
      person: { name: "", city: "" }
    };
  }

  componentDidMount() {
    this.setState({
      person: { name: "sp", city: "jaffna" }
    });
  }

  componentDidUpdate() {
    console.log("the service is working");
    console.table(this.state);
  }
  render() {
    return (
      <div>
        <p>Name :{this.state.person.name}</p>
        <p>City:{this.state.person.address}</p>
      </div>
    );
  }
}

export default Update;
