import {Activity, Day, Hour} from "../types";
import {useState} from "react";

const getHourKeys = (start: Hour, end: Hour) => {
  const res: Hour[] = []
  let i: Hour = start
  while (i !== end + 1) {
    res.push(i)
    i = ((i + 1) % 24) as Hour
  }
  return res
}

export const EXERCISE: Activity = {name: 'exercise', color: '#018E42'}
export const FOOD: Activity = {name: 'food', color: '#8A2BE2'}
export const HOME: Activity = {name: 'home', color: '#ADFF2F'}
export const OUT: Activity = {name: 'out', color: '#FB4D3D'}
export const WORK: Activity = {name: 'work', color: '#5FB0B7'}


const DAY: Day = {
  end: 2,
  id: 2,
  start: 10,
  hours: {
    10: HOME,
    11: HOME,
    12: OUT,
    13: FOOD,
    14: OUT,
    15: WORK,
    16: WORK,
    17: WORK,
    18: EXERCISE,
    19: EXERCISE,
  }
}

type SetDayActivity = (hour: Hour, activity: Activity | undefined, dayId?: number) => void

const useDay = () => {
  const [day, setDay] = useState(DAY)
  const [keys] = useState(getHourKeys(day.start, day.end))

  const setDayActivity: SetDayActivity = (hour, activity, dayId) => {
    setDay({
      ...day,
      hours: { ...day.hours, [hour]: activity },
    })
  }
  return {day, keys, setDayActivity}
}

export default useDay
