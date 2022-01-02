import React, {FC} from 'react';
import {Activity} from "../../types";
import {ActivityPickerWrapper} from "./styled";


type ActivityPickerProps = { activity: Activity}
const ActivityPicker: FC<ActivityPickerProps> = ({activity}) => {
  return (
    <ActivityPickerWrapper>

    </ActivityPickerWrapper>
  );
};

export default ActivityPicker;
