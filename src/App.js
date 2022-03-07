import React from "react";
import { GoogleLogin } from "react-google-login";

import "./App.css";

const responseGoogle = (response) => {
  console.log(response);
};

function App() {
  return (
    <div className="App">
      <h1>Gogle Oauth</h1>
      <h2>Login with google</h2>

      <GoogleLogin
        clientId="669907935099-4l8frdlfpv1j82eajmomjv4uvlqp5ade.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    </div>
  );
}

export default App;