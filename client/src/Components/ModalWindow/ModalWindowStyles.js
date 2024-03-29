import styled from "styled-components";

export const ModalWrapper = styled.div`
  z-index: 5;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  backdrop-filter: blur(1.5px);
`

export const ModalWindow = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  justify-content: center;
  width: 300px;
  max-width: 100%;
  max-height: 85%;
  padding: 15px;
  background-color: white;
  border-radius: 30px;
  box-shadow:0 0 15px 4px rgba(0,0,0,0.2);
`

export const BookInfo = styled.div`
  display: grid;
  grid-template-rows:  repeat(1fr, 2);
  grid-template-columns: 3fr 2fr;
  grid-template-areas:
          'author publicDate' 
          'publisher isbn';
  grid-gap: 5px;
  max-width: 100%;
  margin: 10px;
`

export const BookInfoItem = styled.div`
  grid-area: ${props => props.area};
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  div {
    font-weight: bold;
  };
`

export const Title = styled.div`
  font-weight: bolder;
  font-size: large;
  margin: 5px;
`