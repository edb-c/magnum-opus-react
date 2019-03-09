//Action creator returns the action
export function create_myluckynumbers(winning_numbers, bonus) {

    return (dispatch) => {
 //       return fetch('https://magnum-opus-api.herokuapp.com/api/v1/myluckynumbers', {
    return fetch('http://localhost:3000/api/v1/myluckynumbers', {
 method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({winning_numbers, bonus}),
        })
        .then(response => response.json())
        .then(winners => {
            dispatch({ type: 'CREATE_MYLUCKYNUMBERS', payload: winners})})
     };
};

