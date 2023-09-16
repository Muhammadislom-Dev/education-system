import styled from "styled-components";

export const InformationBox = styled.div`
  padding: 30px 0;
  padding-top: 120px;
  .information-img {
    width: 100%;
    max-height: 100%;
    height: 600px;
    border-radius: 30px;
  }
  .information-box {
    border: 2px solid #efefef;
    border-radius: 32px;
    margin: 0 auto;
    backdrop-filter: blur(12.5px);
    padding: 32px 40px;
    background-color: rgba(255, 255, 255, 0.8);
    width: 90%;
    transform: translateY(-45%);
    display: flex;
    justify-content: space-between;
  }
  .information-card {
    padding-left: 32px;
    padding-right: 32px;
  }
  .information-right {
    width: 300px;
    padding: 20px;
    border: 2px solid #efefef;
    backdrop-filter: blur(12.5px);
    border-radius: 24px;
    background-color: rgba(255, 255, 255, 0.8);

    span {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 16px;
    }
    p {
      font-size: 14px;
      line-height: 19px;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.6);
    }
    h3 {
      font-size: 20px;
      font-weight: 700;
      margin: 0;
    }
  }
  .information-text {
    white-space: normal;
    overflow: hidden;
    font-size: 20px;
    line-height: 30px;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    font-weight: 400;
  }
  .information-name {
    font-weight: 600;
    font-size: 36px;
    line-height: 30px;
    margin-bottom: 24px;
    margin-top: 0;
    color: #000;
  }
`;
