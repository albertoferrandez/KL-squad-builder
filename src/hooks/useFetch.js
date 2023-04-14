import { useState } from "react"
import { useEffect } from "react"

const useFetch = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [playersName, setPlayersName] = useState()

  useEffect(() => {
    fetch("https://6408b5768ee73db92e492cfd.mockapi.io/kingsleagueplayers")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setTimeout(() => setLoading(false), 2000))
  }, [])

  useEffect(() => {
    const namesPlayers = data?.map((d) => 
    d.players.map((name) => name)).flat()
    setPlayersName(namesPlayers)
  }, [data])

  return { data, loading, error, playersName }
}

export default useFetch
