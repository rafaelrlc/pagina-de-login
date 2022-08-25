import React, { useContext } from "react";
//import classes from "./Navigation.module.css";
import AuthContext from "../../store/auth-context";
import styled from "styled-components";

const Nav__bar = styled.nav`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  li {
    margin: 0;
    margin-left: 2rem;
  }

  a {
    text-decoration: none;
    color: white;
  }

  a:hover,
  a:active {
    color: #f3cafb;
  }

  .button-logout {
    font: inherit;
    background: #dd0db0;
    border: 1px solid #dd0db0;
    padding: 0.5rem 1.5rem;
    color: white;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.26);
    border-radius: 20px;
  }

  .button-logout:focus {
    outline: none;
  }

  .button-logout:hover,
  .button-logout:active {
    color: #f3cafb;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.26);
  }
`;

const Navigation = (props) => {
  const ctx = useContext(AuthContext);
  return (
    <Nav__bar>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button className="button-logout" onClick={ctx.onLogout}>
              Logout
            </button>
          </li>
        )}
      </ul>
    </Nav__bar>
  );
};

export default Navigation;
