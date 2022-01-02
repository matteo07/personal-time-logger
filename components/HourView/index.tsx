import {FC} from "react";
import {Activity, Hour} from "../../types";
import {Action, HourWrapper, Color, FlexSpacer, Cancel, Spaced} from './styled'

const HourView: FC<{ activity?: Activity, hour: Hour }> = ({activity, hour}) => {
  const formattedHour = hour.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  })

  if (!activity) {
    return <HourWrapper><p>  {formattedHour}{'  '}</p><Action>+ add activity + </Action></HourWrapper>
  }
  return (<HourWrapper>
    {'  '}{formattedHour}: {activity.name.toUpperCase()}
    <FlexSpacer />
    <Color color={activity.color} />
    <Spaced><Cancel>X</Cancel></Spaced>
  </HourWrapper>)
}

export default HourView
