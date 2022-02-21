import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { nanoid } from 'nanoid';

import { useUserStore } from 'store/user';

import './register.scss';
import { useAppstore } from 'store/globalStore';

function RegisterForm() {
  const [empId, setEmpId] = useState('');
  const [empName, setEmpName] = useState('');
  const [showErr, setShowErr] = useState(false);
  const history = useHistory();

  useEffect(() => {
    useAppstore.getState().getUsers();
  }, []);

  const { users } = useAppstore((state) => state);

  const handleEmpIdInput = (e) => {
    const { value } = e.target;
    setEmpId(value);
    const isDuplicate = users?.find((user) => user.empId === value);
    if (isDuplicate) {
      setShowErr(true);
    } else {
      setShowErr(false);
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const formData = {
        id: nanoid(),
        empId,
        name: empName,
        posts: [],
        upvotes: []
      };
      const res = await fetch('http://localhost:8000/user', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (res.ok) {
        const resJson = await res.json();
        useUserStore.getState().setCurrentUser(resJson);
        useUserStore.getState().setIsLoggedIn(true);
        history.push('/all');
      }
    } catch (error) {
      console.error('Error fetching user data for login', error);
    }
  }

  const handleClick = () => {
    history.push('/login');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="register__form flex flex-ai-c flex-jc-c"
    >
      <div className="register__form__group flex flex-jc-c">
        <input
          onChange={handleEmpIdInput}
          id="emp-signup-id"
          name="empId"
          className="register__form__control"
          type="text"
          placeholder="Employee Id"
          autoComplete="off"
          required
        />
        {showErr && <span className="error__msg">User already present</span>}
        <input
          onChange={(e) => setEmpName(e.target.value)}
          id="emp-signup-name"
          name="empName"
          className="register__form__control"
          type="text"
          placeholder="Name"
          autoComplete="off"
          required
        />
        <div className="register__form__footer flex flex-ai-c">
          <button
            disabled={showErr}
            className="register__form__footer__submit__btn"
            type="submit"
          >
            Sign up
          </button>
          {/* <button className="register__form__footer__signin__btn">
            Sign in
          </button> */}
        </div>
      </div>
      <span className="login__redirect" onClick={handleClick}>
        Already have an account ? Sign In.
      </span>
    </form>
  );
}

export default RegisterForm;
