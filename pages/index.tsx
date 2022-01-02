import type {NextPage} from 'next'
import HomePage from "../components/HomePage";
import useDay from "../hooks/useDay";

const Home: NextPage = () => {
  const { day, keys } = useDay()

  return (
    <HomePage day={day} keys={keys} />
  )
}

export default Home
