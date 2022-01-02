import {Day, Hour} from "../types";

const getHourKeys = (start: Hour, end: Hour) => {
  const res: Hour[] = []
  let i: Hour = start
  while (i !== end + 1) {
    res.push(i)
    i = ((i + 1) % 24) as Hour
  }
  return res
}

const useDay = () => {
  const day: Day = {id: 2, start: 10, end: 2, hours: {10: "home", 11: 'home', 12: 'out'}}
  const keys = getHourKeys(day.start, day.end)
  return  {day, keys}
}

export default useDay
