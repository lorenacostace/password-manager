import styled, { css } from "styled-components";

export const StepPosition = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: stretch;
  align-items: center;
  background-color: #c2cdd4;
  padding: 10px 0;
`

export const Line = styled.div`
  background-color: #6b8c99;
  height: 2px;
  width: 40px;
  max-width: 100%;

  ${props => props.isHidden && css`
    display: none;
  `}

  ${props => props.featured && css`
    background-color: #FF0049;
  `}

`