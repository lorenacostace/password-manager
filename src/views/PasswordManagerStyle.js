import styled from "styled-components";

export const Container = styled.div`
  max-width: 900px;
  margin: 1rem auto;
  border: 1px solid #e0e0e0;
  position: relative;
`

export const SpinnerCover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(250, 248, 248, 0.25);
  top: 0;
  left: 0;
`

export const SpinnerContainer = styled.div`
  margin: 3rem auto;
  width: 100px;
  top: 40%;
`