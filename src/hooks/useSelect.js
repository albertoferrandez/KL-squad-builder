import React from 'react'
import { SelectedPlayersContext } from '../context/selectedContext'
import { selectPlayerReducer, initialState } from '../reducer/selectPlayerReducer'

const useSelect = (setShowModal) => {

  const [select, dispatch] = React.useReducer(selectPlayerReducer, initialState)
  const { setSelectedPlayers } = React.useContext(SelectedPlayersContext)

  React.useEffect(() => (
    setSelectedPlayers(select.selectedPlayer)
  ), [select])

  const handleSelect = (e, player) => {
    dispatch({ type: 'SELECT_PLAYER', payload: player })
    setShowModal(false)
  }

  const handleDelete = () => {
    dispatch({ type: 'DELETE_SELECTED_PLAYER', payload: [] })
  }

  console.log(select)

  return {
    handleSelect,
    handleDelete
  }
}

export default useSelect
