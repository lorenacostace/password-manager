import styled , {css} from "styled-components";

export const Button = styled.button`
  background-color: #002B45;
  color: white;
  padding: 10px 20px 10px 15px;
  border-radius: 0.2em;
  border: #002B45;
  
  ${props => props.feedback && css`
    color: #FF0049;
    background-color: white;
    border: white;
  `}

  ${props => props.disabled && css`
    background-color: #c1bdbe;
    color: #FFF;
    cursor: auto;
  `}

  ${props => props.hiddenButton && css`
    display: none;
  `}
`