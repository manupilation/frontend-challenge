import styled from "styled-components";

const WineDiv = styled.div`
  max-width: 30%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .wine-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    max-width: 90%;
    max-height: 80%;
  }

  img {
    width: 50%;
    height: auto;
  }

  h3 {
    max-height: 15%;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #1D1D1B;
    height: 5%;
  }

  .normal-prices {
    width: 50%;
    max-height: 20%;
    display: flex;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 11px;
    line-height: 16px;
    text-align: center;
    justify-content: space-evenly;

    .normal-price {
      padding: 2px;
      color: #888;
      text-decoration-line: line-through;
    }

    .price-off {
      padding: 2px;
      background: #F79552;
      border-radius: 1.94677px;
      color: #fff;
      text-decoration: none;
    }
  }

  .is-member {
    width: 100%;
    max-height: 5%;
    display: flex;
    justify-content: space-evenly;
    max-height: 12%;

    is-member-title {
      padding: 2px;
      font-family: 'Lato';
      font-style: normal;
      font-weight: 700;
      font-size: 11px;
      line-height: 10px;
      text-align: right;
      text-transform: uppercase;
      color: #1D1D1B;
    }

    .price-member {
      margin-right: 10px;
      font-family: 'Lato';
      font-style: normal;
      font-weight: 700;
      font-size: 15px;
      line-height: 10px;
      color: #B6116E;
    }
  }

  .not-member {
    width: 70%;
    max-height: 5%;
    display: flex;
    justify-content: space-evenly;
    max-height: 12%;

    h5 {
      font-family: 'Lato';
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 14px;
      display: flex;
      align-items: center;
      text-align: center;
      text-transform: uppercase;
      color: #888888;
    }
  }

  button {
    color: #FFFFFF;
    font-family: 'Lato';
    text-align: center;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    background: #7EBC43;
    border-radius: 3.89354px;
    width: 200px;
    height: 39.36px;
    align-items: center;
    border: none;
    justify-content: center;
  }

`

export default WineDiv;
