import React, {FC} from 'react';
import {ActivityPickerWrapper} from "./styled";
import {Activity} from "../../types";
import {WORK} from "../../hooks/useDay";

const ActivityPicker: FC<{ activity: Activity, setActivity:  React.Dispatch<React.SetStateAction<Activity>> }> = ({activity, setActivity}) => {
  return (
    <ActivityPickerWrapper color={activity.color} onClick={() => setActivity(WORK)} />
  );
};

export default ActivityPicker;
