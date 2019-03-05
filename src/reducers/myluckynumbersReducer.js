export default function myluckynumbersReducer(state = {
    loading: false,
    winnersPayload: []
  }, action) { 
    switch (action.type) {

        case 'LOADING_MYLUCKYNUMBERS':
       
          return {...state, loading: true}
  
        case 'FETCH_MYLUCKYNUMBERS':
        
            return {...state, loading: false, winnersPayload: action.payload}
        
        case 'CREATE_MYLUCKYNUMBERS':

            return {...state, winnersPayload:[...state.winnersPayload, action.payload]}
            
        case 'DELETE_MYLUCKYNUMBERS':

            return {...state, winnersPayload:[...state.winnersPayload, action.payload]}
            
        default:
            return state;
    }
  }
  