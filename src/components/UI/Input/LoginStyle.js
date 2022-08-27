import styled from "styled-components";

const LoginComponent = styled.form`
  margin: 1rem 0;
  display: flex;
  align-items: stretch;
  flex-direction: column;

  & label,
  & input {
    display: block;
  }

  & label {
    font-weight: bold;
    flex: 1;
    color: #464646;
  }

  & input {
    flex: 3;
    font: inherit;
    padding: 0.35rem 0.35rem;
    border-radius: 6px;
    border: 1px solid #ccc;
  }

  & input:focus {
    outline: none;
    border-color: #4f005f;
    background: #f6dbfc;
  }

  &.invalid input {
    border-color: red;
    background: #fbdada;
  }

  @media (min-width: 768px) {
    & {
      align-items: center;
      flex-direction: row;
    }
  }
`;

export default LoginComponent;
