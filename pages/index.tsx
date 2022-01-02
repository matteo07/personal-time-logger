import type { NextPage } from 'next'
import { Day } from "../types";

const Home: NextPage = () => {
  const currentDay: Day = { id: 2, start: 10, end: 2, hours: { 10: "home", 11: 'home', 12: 'out' } }

  return (
    <a >{JSON.stringify(currentDay)}</a>
  )
}

export default Home
