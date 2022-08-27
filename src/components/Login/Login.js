import React, { useEffect, useState, useContext, useRef } from "react";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";
import InputLogin from "../UI/Input/InputLogin";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const identifier = setTimeout(() => {
      //console.log("check");
      setFormIsValid(
        enteredEmail.includes("@") && enteredPassword.trim().length > 6
      );
    }, 300);

    return () => {
      //console.log("clean");
      clearTimeout(identifier);
    };
  }, [enteredEmail, enteredPassword]);

  const emailRef = useRef();
  const passwordRef = useRef();

  const emailChangeHandler = (event) => {
    console.log("1");
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const Authctx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      Authctx.onLogin(enteredEmail, enteredPassword);
    } else if (!emailIsValid) {
      emailRef.current.focus();
    } else {
      passwordRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <InputLogin
          id="email"
          label="Email"
          type="email"
          isValid={emailIsValid}
          onBlur={validateEmailHandler}
          onChange={emailChangeHandler}
          ref={emailRef}
        ></InputLogin>
        <InputLogin
          id="password"
          label="Password"
          type="password"
          isValid={passwordIsValid}
          onBlur={validatePasswordHandler}
          onChange={passwordChangeHandler}
          ref={passwordRef}
        ></InputLogin>

        <div className={classes.actions}>
          <Button type="submit">Login</Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
