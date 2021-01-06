import React, { Component } from "react";
import SigninForm from "./components/signin_form";
import "./Login.css";

class App extends Component {
  render() {
    return(
      <div className="card">
        <img src="https://drive.google.com/file/d/1qsvlH1AkFNiCCEXvU7jC-eJ5CFHj1HJr/view?usp=sharing" alt="KidsLoop logo" />
        <h4> Sign In</h4>
        <SigninForm>
      </div>
    );
  }
}

export default App;
