
const TokenReducer = (state = { token: null, id: null, wildpoints: 0 }, action) => {
    switch (action.type) {
      case 'SETTOKEN':
        // nouveau State
        return { ...state, token: action.newToken, id: action.newId, admin: action.newadmin, wildpoints: action.newWildPoints };
      case 'ADDWILD':
        return 0;
      case 'LESSWILD':
        return { ...state, wildpoints: state.wildpoints - 100}
      case 'LOGOUT':
        return { ...state, token: null, id: null };
      default:
        return state;
    }
  };
  
  
  export default TokenReducer;
  