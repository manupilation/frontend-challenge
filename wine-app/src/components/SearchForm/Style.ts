import styled from "styled-components";

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: end;
  max-width: 27%;
  height: 100vh;
  margin: 40 auto;
  margin-top: 20px;

  form {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;

    input {
      margin-left: 100px;
      margin-right: 10px;
    }

    div {
      margin-bottom: 20px;
    }
  }

  label {
    font-family: 'Lato';
    font-size: 14px;
    line-height: 17px;
    color: #1D1D1B;
  }

  h2 {
    width: 256px;
    height: 22px;
    font-family: 'Neo Sans Std';
    font-size: 16px;
    text-align: center;
  }

  h4 {
    font-family: 'Lato';
    text-align: center;
    font-size: 18px;
    color: #333;
  }
`

export default SectionWrapper;
