import {FC} from "react";
import {Activity, Hour} from "../../types";
import {Action, HourWrapper} from './styled'

const HourView: FC<{ activity?: Activity, hour: Hour }> = ({activity, hour}) => {
  const formattedHour = hour.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  })

  if (!activity) {
    return <HourWrapper><p>  {formattedHour}: <Action>add+ </Action></p></HourWrapper>
  }
  return (<HourWrapper>
    {'  '}{formattedHour}: {activity.toUpperCase()}
  </HourWrapper>)
}

export default HourView
