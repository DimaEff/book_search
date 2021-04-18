import styled, {css, keyframes} from "styled-components";


const slAnimation = keyframes`
  0% {
    top: -100%;
  }
  100% {
    top: 15px;
  }
`

export const SearchList = styled.div`
  z-index: 1;
  position: relative;
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  flex-flow: column;
  width: 100%;
  max-height: 55vh;
  border-radius: 30px;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.2);
  overflow: auto;
  
  animation: ${slAnimation} 1s forwards;
`

export const SearchListItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 75px;
  cursor: pointer;
  margin: 5px;

  div {
    display: flex;
    flex-flow: column;
    margin-left: 5px;
  }

  span {
    position: absolute;
    height: 70%;
    width: 66.5px;
    border-right: 1px solid black;
  }
`

export const BookInfo = styled.div`

  div {
    font-size: small;
    color: gray;
  }
`