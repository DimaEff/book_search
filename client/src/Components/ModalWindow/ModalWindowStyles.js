import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  backdrop-filter: blur(3px);
`

export const ModalWindow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px;
  background-color: white;
  border: 3px solid black;
`

export const BookInfo = styled.div`
  display: flex;
  flex-flow: column;
`

export const InfoString = styled.div`
  display: flex;
  justify-content: space-around;
`