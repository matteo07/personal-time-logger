import React, {Dispatch, FC, SetStateAction} from 'react';
import {Activity} from "../../types";
import {ActivityPickerWrapper, Heading, ActivityChoiceWrapper, Color} from "./styled";
import {EXERCISE, FOOD, HOME, OUT, WORK} from "../../hooks/useDay";
type ActivityPickerProps = {
  activity: Activity
  opened: boolean
  setActivity: Dispatch<SetStateAction<Activity>>
}

const activites: Activity[] = [EXERCISE, FOOD, HOME, OUT, WORK]

const ActivityPicker: FC<ActivityPickerProps> = ({opened, setActivity}) => {
  return (
    <ActivityPickerWrapper opened={opened}>
      <Heading>select activity:</Heading>
      {activites.map((activity) =>
        <ActivityChoiceWrapper key={`pick-${activity.name}`} onClick={() => setActivity(activity)} color={activity.color} >
          <p>{activity.name}</p><Color color={activity.color} />
        </ActivityChoiceWrapper>
      )}
    </ActivityPickerWrapper>
  );
};

export default ActivityPicker;
