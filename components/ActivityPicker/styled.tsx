import styled from "styled-components";
import {Activity} from "../../types";


export const ActivityPickerWrapper = styled.div<{opened: boolean}>`
  background-color: #222;
  position: fixed;
  max-width: 420px;
  width: 100%;
  z-index: 1;
  padding: 8px 8px 48px 8px;
  display: flex;
  top: 48px;
  flex-direction: column;
  transform: translateY(${({ opened }) => opened ? '24px' : 'calc(-100% - 96px)'});
  transition: transform .2s ease-in;
`

export const Heading = styled.div`
  font-size: 24px;
`

export const ActivityChoiceWrapper = styled.div<{color: Activity['color']}>`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  border: 1px solid ${({color}) => color};
  
  &:hover {
    background-color: ${({color}) => color};
  }
  
`

export const Color = styled.div<{color: Activity['color']}>`
  background: ${({color}) => color};
  height: 48px;
  width: 48px;
`
