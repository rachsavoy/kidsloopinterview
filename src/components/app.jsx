import React, { Component } from 'react';

import SigninForm from './signin_form.jsx';

class App extends Component {
  render() {
    return(
      <div>
        <div className="card">
          <img src={"https://drive.google.com/file/d/1qsvlH1AkFNiCCEXvU7jC-eJ5CFHj1HJr/view?usp=sharing"} alt="KidsLoop logo" className="card"/>
          <SigninForm />
        </div>
      </div>
    );
  }
}


export default App;
