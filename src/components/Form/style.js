import styled from "styled-components";

export const FormBox = styled.div`
  background: var(--blue, #00bafc);
  padding: 55px 0;
  margin-top: 50px;

  .form-name {
    color: #fff;
    text-align: center;
    font-family: Open Sans;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }
  .form-text {
    color: #fff;
    width: 780px;
    margin: 15px auto;
    text-align: center;
  }
  .form-list {
    border-radius: 5px;
    gap: 15px;
    background: #edf3fb;
    padding: 24px;
    width: 500px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  .form-input,
  textarea {
    border-radius: 5px;
    background: var(--light-grey, #f3f3f3);
    padding: 16px;
    border: 3px solid #f3f3f3;
    outline: none;
    margin: 8px 0;

    &:focus {
      border: 2px solid #00bafc;
    }

    &::placeholder {
      color: #000;
      font-family: Open Sans;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
    }
  }
  textarea {
    resize: none;
  }
  .form-button {
    border-radius: 5px;
    margin-top: 10px;
    background: var(--blue, #00bafc);
    color: #fff;
    font-family: Open Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    height: 45px;
    border: 2px solid #00bafc;
    cursor: pointer;
    transition: 0.3s all ease-in-out;

    &:hover {
      background-color: transparent;
      color: #00bafc;
    }
  }
`;
