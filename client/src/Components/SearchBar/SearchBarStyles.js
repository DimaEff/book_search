import styled, {css, keyframes} from "styled-components";

const searchAnimation = keyframes`
  0% {
    box-shadow:0 0 15px 4px rgba(0,0,0,0.2);
  }
  //70% {
  //  box-shadow:0 0 15px 4px rgba(0,0,0,0.08);
  //}
  100% {
    box-shadow:0 0 15px 4px rgba(0,0,0,0.05);
  }
`

export const SearchBar = styled.form`
  z-index: 2;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  margin-left: 5px;
  margin-right: 5px;
  box-shadow:0 0 15px 4px rgba(0,0,0,0.2);
  border-radius: 30px;
  background-color: white;
  
  ${props => props.inSearch && css`
    animation: ${searchAnimation} linear 1s infinite alternate;
  `}
  
  
  input {
    width: 100%;
    outline: none;  
    border: none;
    background-color: transparent;
    margin-left: 5px;
    margin-right: 5px;
    text-align: center;
    font-size: large;
    font-weight: bold;
  }
  
  div {
    position: absolute;
    right: 0;
    height: 100%;
    width: 40px;
    background-color: inherit;
    border: none;
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;
  }
`

export const SearchButton = styled.button`
  z-index: 3;
  position: absolute;
  right: 6px;
  max-height: 100%;
  outline: none;
  border: none;
  border-left: 1px solid black;
  background-color: white;
  cursor: pointer;
  
  img {
    height: 20px;
    width: 20px;
  }
`