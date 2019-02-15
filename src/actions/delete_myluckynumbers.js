export function delete_myluckynumbers(id, winning_numbers, bonus) {
//debugger

const url = 'http://localhost:3000/api/v1/myluckynumbers/' + id
console.log(url)
    return (dispatch) => {
        return fetch(url, {
            method: "DELETE",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({winning_numbers, bonus}),
        })
        .then(response => response.json())
        .then(winners => {
            dispatch({ type: 'DELETE_MYLUCKYNUMBERS', payload: winners})})
     };
};

