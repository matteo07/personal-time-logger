import React, {FC} from 'react';
import { Day, Hour } from "../../types";
import {PageContent, Title, Br} from "./styled";
import HourView from "../HourView";

type HomePageProps = { day: Day; keys: Hour[] }

const HomePage: FC<HomePageProps> = ({day: {id, hours}, keys}) => {
  return (
    <PageContent>
      <Title>Current day: {id}</Title>
      <Br/>
      {keys.map((hourKey) => <HourView key={`hour-${id}-${hourKey}`} hour={hourKey} activity={hours[hourKey]}/>)}
    </PageContent>
  );
};

export default HomePage;
