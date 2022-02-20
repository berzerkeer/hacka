import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useUserStore } from 'store/user';

import './login.scss';

function LoginForm() {
  const [empId, setEmpId] = useState('');
  const history = useHistory();
  const handleInput = (e) => {
    e.preventDefault();
    setEmpId(e.target.value);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:8000/user');
      const resJson = await res.json();
      const user = resJson.find((emp) => emp.empId === empId);
      if (user) {
        history.push('/all');
        useUserStore.getState().setIsLoggedIn(true);
        useUserStore.getState().setCurrentUser(user);
      } else {
        console.log('No user found');
      }
    } catch (error) {
      console.error('Error fetching user data for login', error);
    }
  }

  const handleClick = () => {
    history.push('/signup');
  };

  return (
    <form onSubmit={handleSubmit} className="form flex flex-ai-c flex-jc-c">
      <div className="form__group flex flex-jc-c">
        <input
          onChange={handleInput}
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
      <span className="create__account" onClick={handleClick}>
        Create an account
      </span>
    </form>
  );
}

export default LoginForm;
