import styled, {css} from "styled-components";

export const ImgTick = styled.img`
  width: 100px;
  ${props => props.header && css`
    width: 12px;
  `}

`