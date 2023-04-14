
export const initialState = {
    playersName: [],
    filteredPlayers: []
  }
  
  export const searchPlayerReducer = (state, action) => {
    const reducers = {
      SET_PLAYERS: () => ({
        ...state,
        playersName: action.payload,
        filteredPlayers: action.payload
      }),
      HANDLE_CHANGE: () => {
        const query = action.payload;
        const filteredData = state.playersName.filter((player) =>
          player.fullName.toLowerCase().includes(query)
        );
        return {
          ...state,
          filteredPlayers: filteredData
        }
      }
    }
  
    return reducers[action.type]?.() || state
  }