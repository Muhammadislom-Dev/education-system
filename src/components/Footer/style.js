import styled from "styled-components";

export const FooterBox = styled.div`
  background: var(--black, #191919);
  padding: 50px 0;

  .footer-name {
    font-family: Open Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    color: white;
    margin-bottom: 16px;
  }

  .footer-text {
    color: white;
    width: 320px;
  }

  .footer-list {
    display: flex;
    justify-content: space-between;
  }

  .footer-link {
    font-family: Open Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    color: #fff;
    padding: 6px 0;
    transition: 0.3s all ease-in-out;

    &:hover {
      color: #00bafc;
    }
  }
  .footer-items {
    display: flex;
    flex-direction: column;
  }
`;
