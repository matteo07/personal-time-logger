import React, {FC, useState} from 'react';
import { Day, Hour} from "../../types";
import {HeadingWrapper, PageContent, Title, Br} from "./styled";
import HourView from "../HourView";
import {HOME} from "../../hooks/useDay";
import ActivityPicker from "../ActivityPicker";

type HomePageProps = { day: Day; keys: Hour[] }

const HomePage: FC<HomePageProps> = ({day: {id, hours}, keys}) => {
  const [activeActivity, setActivity] = useState(HOME)

  return (
    <PageContent>
      <HeadingWrapper>

      <Title>day: Jan 2</Title>
      <ActivityPicker activity={activeActivity} setActivity={setActivity} />
      </HeadingWrapper>
      <Br/>
      {keys.map((hourKey) => <HourView key={`hour-${id}-${hourKey}`} hour={hourKey} activity={hours[hourKey]}/>)}
    </PageContent>
  );
};

export default HomePage;
