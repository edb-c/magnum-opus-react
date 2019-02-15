export default function nylotteryapiReducer(state = {
    loading: false,
    nylotteryapiPayload: []
  }, action) { 
    switch (action.type) {
      
        case 'FETCH_NYLOTTERYAPI':
        
            return {...state, loading: false, nylotteryapiPayload: action.payload}
           
        default:
            return state;
    } 
  }
  