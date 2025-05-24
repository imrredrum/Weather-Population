import axios from 'axios'

const validateToken = async (_: unknown, { arg: token }: { arg: string }) => {
  await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${token}`
  )
  return token
}

export default validateToken
