import styled , {css} from "styled-components";

export const ButtonHidden = styled.div`
  ${configButtonLeft => configButtonLeft.hiddenButton && css`
    display: none
  `}
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: stretch;
  align-items: center;
  margin-right:60px;
  margin-left:60px;
  margin-top:50px;
`

export const Line = styled.div`
  background-color: #e2e1e1;
  height: 2px;
  width: 100%;
  max-width: 100%;
  margin-top: 0.2em;
  margin-bottom: 0.5em;
`