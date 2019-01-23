import React from 'react';
 
const LoginPage = ({isLoggedIn, toggleLogin}) => {
  if (isLoggedIn) {
    return (
      <div className="jumbotron">
        <p>You are loged in.</p>
        <p>Secret page is available now.</p>
        <button
          className="btn btn-primary"
          onClick={toggleLogin}>
          Log out
        </button>
      </div>
    )
  } 

  return (
    <div className="jumbotron">
      <p>Login to see secret page!</p>
      <button
        className="btn btn-primary"
        onClick={toggleLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;
