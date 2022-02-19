import React from 'react';
import './login.scss';

function LoginForm() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('logged in');
  }

  return (
    <form onSubmit={handleSubmit} className="form flex flex-ai-c flex-jc-c">
      <div className="form__group flex flex-jc-c">
        <input
          onChange={(e) => {
            console.log(e.target.value);
          }}
          id="emp-login"
          name="empId"
          className="form__control"
          type="text"
          placeholder="Enter employee id"
          autoComplete="off"
        />
        <button className="form__submit__btn" type="submit">
          Login
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
