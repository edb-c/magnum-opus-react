/*Redux Thunk allows us to return a function inside of our action creator instead of a plain JavaScript object. That returned function receives the store's dispatch function, and with that we are able to dispatch multiple actions: one to place the state in a loading state, and another to update our store with the returned data.
*/
export function fetch_myluckynumbers() {

  return (dispatch) => {  
      dispatch({ type: 'LOADING_MYLUCKYNUMBERS'})

  return fetch('https://magnum-opus-api.herokuapp.com/api/v1/myluckynumbers')

//  return fetch('https://data.ny.gov/resource/6nbc-h7bj.json')    
  
  .then(response => response.json())

  .then(winners => 
    dispatch({ 
     type: 'FETCH_MYLUCKYNUMBERS', payload: winners
     })    
    )    
  }
}
