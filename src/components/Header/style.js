import styled from "styled-components";

export const HeaderBox = styled.div`
  padding-top: 160px;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header-name {
    color: #000;
    font-family: Open Sans;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    width: 520px;
  }
  .header-text {
    color: black;
    width: 465px;
    margin: 16px 0;
    margin-bottom: 25px;
  }
  .header-link {
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
  .header-video {
    width: 488px;
    height: 288px;
  }
`;
