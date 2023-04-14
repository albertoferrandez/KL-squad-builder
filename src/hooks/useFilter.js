import { searchPlayerReducer, initialState } from '../reducer/filterReducer'
import useFetch from '../hooks/useFetch'
import React from 'react'

const useFilter = () => {
  const { playersName } = useFetch()
  const [state, dispatch] = React.useReducer(searchPlayerReducer, initialState)
  
  React.useEffect(() => {
    dispatch({ type: 'SET_PLAYERS', payload: playersName })
  }, [playersName])

  const handleChange = (e) => {
    const query = e.target.value.toLowerCase()
    dispatch({ type: 'HANDLE_CHANGE', payload: query })
  }

  return {
    state,
    handleChange
  }
}

export default useFilter
