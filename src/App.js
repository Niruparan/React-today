import React from "react";
//import FirstComponent from "./Components/test";
//import Another from "./Components/another";
import SearchAppBar from "./Components/Material/Navbar";
import Layout from "./Components/Material/Layout";
//import Inputs from "./Components/Material";
import Form from "./Components/form";
import StateExample from "./Components/Material/stateExample";
import Update from "./Components/Material/update";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Wel Come</h1>

      <SearchAppBar />
      <Layout />
      <Form />
      <StateExample />
      <Update />
    </div>
  );
}

export default App;
