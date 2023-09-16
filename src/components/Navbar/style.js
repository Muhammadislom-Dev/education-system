import styled from "styled-components";

export const NavbarBox = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  position: fixed;
  width: 100%;
  z-index: 100;
  padding: 8px 0;

  .navbar-name {
    color: #000;
    font-size: 25px;
    line-height: 30px;
    font-weight: 600;
    text-transform: uppercase;
    font-family: sans-serif;
  }

  .navbar-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .navbar-item {
    display: flex;
    justify-content: end;
    align-items: center;
    margin: 8px 0;
    gap: 15px;
  }

  .navbar-link {
    padding: 10px;
    color: black;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    transition: 0.1s;

    &:hover {
      color: #00bafc;
    }
  }
  .navbar-links {
    background-color: #00bafc;
    color: white;
    border: 1px solid #00bafc;
    padding: 8px 20px;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: white;
      color: #00bafc;
      transform: scale(0.91);
    }
  }
`;
