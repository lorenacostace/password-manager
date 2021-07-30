import styled, {css} from "styled-components";

export const Background = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: stretch;
  align-items: center;
  border-radius: 50%;
  background-color: #6b8c99;
  min-width: 1.5em;
  min-height: 1.5em;
  text-align: center;
  color: white;
  font-size: 17px;

  ${props => props.stepCompleted && css`
    background-color: #FF0049;
    width: 5px;
  `}

  ${props => props.featured && css`
    width: 40px;
    height: 40px;
    background-color: #002B45
  `}
`