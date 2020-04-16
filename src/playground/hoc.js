// Higher Order Component
//reuse code
//render hijacking
//prop manipulation
//abstract state


import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>INFO</h1>
    <p>The info is: {props.info}</p>
  </div>
);
const withAdminWarning = (WrapperComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info</p>}
      <WrapperComponent {...props} />
    </div>
  );
}

const requireAuthentication = (WrapperComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (<WrapperComponent {...props} />) : (<p>Please login to see info</p>)}
    </div>
  );
}

const AuthInfo = requireAuthentication(Info);
ReactDOM.render(<AuthInfo isAuthenticated={false} info="The detail is as below " />, document.getElementById('app'));