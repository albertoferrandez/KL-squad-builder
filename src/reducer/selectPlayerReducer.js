export const initialState = {
   selectedPlayer: []
}

export const selectPlayerReducer = (select, action) => {
    const reducers = {
      SELECT_PLAYER: () => ({
        ...select,
        selectedPlayer: [...select.selectedPlayer, action.payload]
      }),
  
      DELETE_SELECTED_PLAYER: () => ({
        ...select,
        selectedPlayer: select.selectedPlayer.filter(player => player.id !== action.payload)
      })        
    }
  
    return reducers[action.type]?.() || select
  }
  