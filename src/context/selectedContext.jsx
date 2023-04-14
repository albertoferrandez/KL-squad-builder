import React from 'react'

export const SelectedPlayersContext = React.createContext()

const SelectedPlayersProvider = ({ children }) => {
    const [selectedPlayers, setSelectedPlayers] = React.useState([])

    return (
      <SelectedPlayersContext.Provider value={{ selectedPlayers, setSelectedPlayers }}>
        {children}
      </SelectedPlayersContext.Provider>
    )
  }
  
  export default SelectedPlayersProvider