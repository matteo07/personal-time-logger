import React, {FC, useState} from 'react';
import {Br, HeadingWrapper, HoursWrapper, PageContent, Title} from "./styled";
import HourView from "../HourView";
import useDay, {HOME} from "../../hooks/useDay";
import ActivityPickerIcon from "../ActivityPickerIcon";
import ActivityPicker from "../ActivityPicker";


const HomePage: FC = () => {
  const { day: {id, hours}, keys, setDayActivity } = useDay()
  const [activeActivity, setActivity] = useState(HOME)
  const [pickerOpened, setPickerOpened] = useState(false)

  return (
    <>
      <PageContent>
        <HeadingWrapper>
          <Title>day: Jan 2</Title>
          <ActivityPickerIcon activity={activeActivity} setActivity={() => setPickerOpened(!pickerOpened)}/>
        </HeadingWrapper>
        <ActivityPicker opened={pickerOpened} activity={activeActivity} setActivity={(activity) => {
          setActivity(activity)
          setPickerOpened(false)
        }}/>
        <Br/>
        <HoursWrapper>
          {keys.map((hourKey) => (
            <HourView cancelActivity={() => setDayActivity(hourKey, undefined, id)}  addActivity={() => setDayActivity(hourKey, activeActivity, id)} key={`hour-${id}-${hourKey}`} hour={hourKey} activity={hours[hourKey]}/>))}
        </HoursWrapper>
      </PageContent>
    </>
  );
};

export default HomePage;
