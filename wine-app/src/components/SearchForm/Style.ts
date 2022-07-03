import styled from "styled-components";

const SectionWrapper = styled.section`
  border: solid 1px red;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 30%;
  height: 100vh;
  margin: 40 auto;
  margin-top: 20px;

  form {
    display: flex;
    flex-direction: column;
    clear: none;
    flex-wrap: wrap;
    border: solid 1px red;
    width: 100%;
    * {
      margin: 10px auto 8px 0;
    }

    input {
      margin-left: 50px;
    }
  }

  h2 {
    font-size: 16px;
    font-family: 'Neo Sans Std';
    text-align: left;
  }

  h4 {
    font-family: 'Lato';
    font-size: 14px;
    margin-left: 16px;
    color: #333;
  }

  label {
    border: solid 1px green;
  }

  // * {
  //   border: solid 1px red;
  // }
`

export default SectionWrapper;
