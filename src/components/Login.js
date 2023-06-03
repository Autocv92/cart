import React from 'react';

function Login() {
  return (
    <div className="login">
      <form>
        <div>
          <label>User Name</label>
          <input type="text" placeholder="Enter name" />
        </div>

        <div>
          <label>Password</label>
          <input type="password" placeholder="Enter password" />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
