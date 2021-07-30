import styled from "styled-components";

export const Information = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;
  align-items: center;
`

export const InformationWidth = styled.div`
  order: 0;
  flex: 1 1 50%;
  align-self: auto;
`

export const Line = styled.div`
  background-color: #FF0049;
  height: 2px;
  width: 20px;
  max-width: 100%;
  margin-top: 0.2em;
  margin-bottom: 0.5em;
  margin-left: 15px;
`

export const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin: 10px;
`

export const Subtitle = styled.div`
  font-weight: bold;
  font-size: 15px;
  margin: 10px;
`

export const Margin = styled.div`
  margin: 10px;
`
