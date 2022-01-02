import styled from "styled-components";
import {Activity} from "../../types";

export const FlexSpacer = styled.span`
  flex: 1;
`

export const Action = styled.span`
  cursor: pointer;
  width: 100%;
  border: solid 1px white;
  flex: 1;
  font-size: 40px;
  text-align: center;
  
  &:hover {
    border: solid 1px black;
    background-color: white;
    color: black;
  }
`

export const Color = styled.div<{color: Activity['color']}>`
  background: ${({color}) => color};
  height: 48px;
  width: 48px;
`

export const HourWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 16px;
`

export const Spaced = styled.div`
  padding-left: 16px; 
`

export const Cancel = styled.div`
  align-items: center;
  border: solid 2px red;
  color: red;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 44px;
  justify-content: center;
  width: 44px;

  &:hover {
    border: solid 1px black;
    background-color: red;
    color: black;
  }
`
