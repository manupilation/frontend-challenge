import styled from "styled-components";

const HeaderWrapper = styled.header`
  height: 13vh;
  display: flex;
  text-align: center;
  flex-direction: row;
  justify-content: space-around;
  background-color: #fff;
  box-shadow: gray 0px 1px 5px;
  align-items: center;

  nav {
    display: grid;
  }

  ul {
    display: flex;
    font-family: Neo Sans Std;
    font-style: normal;
    font-weight: 400;
    height: 70%;

    & li {
      margin-right: 50px;
      height: 100%;
      list-style-type: none;
      height: auto;
      a {
        color: #555;
        text-decoration: none;
        height: 100%;
        font-size: 18px;
      } & a:hover {
        color: #D14B8F;
      }
    } & li:hover {
      border-bottom: 1px solid #D14B8F;
      background-color: #FFD;
    }
  }

  span {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50%;
    margin-left: 40px;
      & img {
        width: 90px;
        height: 50px;
        margin-right: 20px;
        margin-left: 20px;
      }
  }

  div {
    display: flex;
    justify-content: space-evenly;
    width: 20%;
      & img {
      width: 25%;
      height: 25%;
    }
  }
`

export default HeaderWrapper;
