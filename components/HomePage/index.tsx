import React, {FC, useState} from 'react';
import {Day, Hour} from "../../types";
import {Br, HeadingWrapper, PageContent, Title} from "./styled";
import HourView from "../HourView";
import {HOME} from "../../hooks/useDay";
import ActivityPickerIcon from "../ActivityPickerIcon";
import ActivityPicker from "../ActivityPicker";

type HomePageProps = { day: Day; keys: Hour[] }

const HomePage: FC<HomePageProps> = ({day: {id, hours}, keys}) => {
  const [activeActivity, setActivity] = useState(HOME)
  const [pickerOpened, setPickerOpened] = useState(false)

  return (
    <>
      <PageContent>
        <HeadingWrapper>
          <Title>day: Jan 2</Title>
          <ActivityPickerIcon activity={activeActivity} setActivity={() => setPickerOpened(!pickerOpened)}/>
        </HeadingWrapper>
        {pickerOpened && <ActivityPicker activity={activeActivity}/>}
        <Br/>
        {keys.map((hourKey) => <HourView key={`hour-${id}-${hourKey}`} hour={hourKey} activity={hours[hourKey]}/>)}
      </PageContent>
    </>
  );
};

export default HomePage;
