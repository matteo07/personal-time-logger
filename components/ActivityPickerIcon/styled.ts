import styled from "styled-components";
import {Activity} from "../../types";

export const ActivityPickerWrapper = styled.div<{color: Activity['color']}>`
  cursor: pointer;
  height: 48px;
  width: 48px;
  background: ${({color}) => color};
  border-radius: 24px;
  border: solid 6px white;
`
