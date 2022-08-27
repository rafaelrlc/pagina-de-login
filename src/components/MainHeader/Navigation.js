import React, { useContext } from "react";
//import classes from "./Navigation.module.css";
import AuthContext from "../../store/auth-context";
import styled from "styled-components";
import Button from "../UI/Button/Button";

const Nav__bar = styled.nav`
  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  & li {
    margin: 0;
    margin-left: 2rem;
  }

  & a {
    text-decoration: none;
    color: white;
  }

  & a:hover,
  & a:active {
    color: #4477d6;
  }
`;

const Navigation = (props) => {
  const ctx = useContext(AuthContext);
  return (
    <Nav__bar cor={"white"}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <div>
              <a href="/">Users</a>
              <div className="below-line"></div>
            </div>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <Button className="button-logout" onClick={ctx.onLogout}>
              Logout
            </Button>
          </li>
        )}
      </ul>
    </Nav__bar>
  );
};

export default Navigation;
