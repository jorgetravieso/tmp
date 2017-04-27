//State argument is not application state, only the state this reducer is responsible
export default function (state = null, action) {
    console.log('action', action);
    switch (action.type) {
        case 'BOOK_SELECTED': return action.payload;
    }
    return state;
}