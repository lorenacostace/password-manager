import styled, { css } from "styled-components";

export const ImgTick = styled.img`
  width: 100%;
  ${props => props.header && css`
    width: 12px;
  `}

`