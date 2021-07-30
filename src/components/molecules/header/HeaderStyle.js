import styled, { css } from "styled-components";

export const StepPosition = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: stretch;
  align-items: center;
  margin-top:20px;
  margin-bottom:20px;
`

export const Line = styled.div`
  background-color: #e2e1e1;
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