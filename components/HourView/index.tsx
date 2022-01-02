import {FC} from "react";
import {Activity, Hour} from "../../types";
import {Action, HourWrapper, Color, FlexSpacer, Cancel, Spaced} from './styled'

type HourViewProps = {
  activity?: Activity
  addActivity: () => void
  cancelActivity: () => void
  hour: Hour
}

const HourView: FC<HourViewProps> = ({activity, addActivity, cancelActivity, hour}) => {
  const formattedHour = hour.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  })

  if (!activity) {
    return <HourWrapper><p>  {formattedHour}{'  '}</p><Action onClick={addActivity}>+ add activity + </Action></HourWrapper>
  }
  return (<HourWrapper>
    {'  '}{formattedHour}: {activity.name.toUpperCase()}
    <FlexSpacer />
    <Color color={activity.color} />
    <Spaced><Cancel onClick={() => cancelActivity()}>X</Cancel></Spaced>
  </HourWrapper>)
}

export default HourView
