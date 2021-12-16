import React, { useEffect, useRef, useState } from 'react';
import Switch from 'react-switch';
import { FaBars, FaYarn } from 'react-icons/fa';
import './styles.css';

const Login = ({ collapsed, handleToggleSidebar, handleCollapsedChange }) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    localStorage.getItem('email') && setEmail(localStorage.getItem('email'));
    localStorage.getItem('password') &&
      setPassword(localStorage.getItem('password'));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value, passwordRef.current.value);
    localStorage.setItem('email', emailRef.current.value);
    localStorage.setItem('password', passwordRef.current.value);
  };
  return (
    <>
      <main className="main_container">
        <nav className="navbar">
          <Switch
            height={16}
            width={30}
            checkedIcon={false}
            uncheckedIcon={false}
            onChange={handleCollapsedChange}
            checked={collapsed}
            onColor="#219de9"
            offColor="#bbbbbb"
          />
          <FaYarn style={{ fontSize: '40px', color: 'gold' }} />
        </nav>
        <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
          <FaBars />
        </div>

        <div className="login_container">
          <div className="login_wrapper card">
            <h2 className="card-title">ACCOUNT LOGIN</h2>
            <form className="main_login mt-3 mb-3" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label for="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  id="email"
                  placeholder="name@example.com"
                  ref={emailRef}
                />
              </div>
              <div className="mb-3">
                <label for="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  id="password"
                  placeholder="********"
                  ref={passwordRef}
                />
              </div>
              <div className="login_checkContainer">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="checkBox"
                  />
                  <label class="form-check-label" for="checkBox">
                    Remember Me
                  </label>
                </div>
                <div>
                  <p style={{ margin: 0 }}>
                    <em>Forgot Your Password?</em>
                  </p>
                </div>
              </div>
              <button className="btn btn-dark w-100" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
