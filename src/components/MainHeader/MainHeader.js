import React from "react";

import Navigation from "./Navigation";
import styled from "styled-components";

const MainHeader = (props) => {
  const Header_main = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #741188;
    padding: 0 2rem;

    h1 {
      color: white;
    }
  `;

  return (
    <Header_main>
      <h1>React Hooks Pratice</h1>
      <Navigation />
    </Header_main>
  );
};

export default MainHeader;
