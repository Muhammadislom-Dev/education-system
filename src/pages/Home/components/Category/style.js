import styled from "styled-components";

export const CategoryBox = styled.div`
  padding: 30px 0;
  margin-top: 25px;

  .category-name {
    font-family: Open Sans;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
    color: #000;
    text-align: center;
    margin: 0 0 40px;
  }

  .category-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .category-img {
    width: 100%;
    height: 204px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 20px;
  }
  .category-item {
    width: 350px;
    padding: 12px 12px 20px;
    box-sizing: border-box;
    border-radius: 10px;
    border: 1px solid rgb(217, 217, 217);

    &:not(:last-child) {
      margin-right: 20px;
    }
  }
  .category-text {
    font-size: 14px;
    line-height: 150%;
    font-weight: 400;
    max-width: 100%;
    margin: 0 0 20px;
    opacity: 0.8;
  }
  .category-subname {
    font-family: Open Sans;
    font-size: 22px;
    line-height: 30px;
    margin: 0 0 10px;
    font-weight: 600;
    color: black;
  }
  .category-link {
    font-size: 18px;
    line-height: 22px;
    color: #00bafc;
    border: 1px solid #00bafc;
    padding: 8px 16px;
    border-radius: 10px;
    display: flex;
    width: 100%;
    justify-content: center;
    transition: 0.3s all ease-in-out;

    &:hover {
      background-color: #00bafc;
      color: white;
    }
  }
`;
