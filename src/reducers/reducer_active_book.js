// all reducers get 2 arguments. only called when an action occurs
export default (state = null, action) => {
    switch(action.type) {
    case 'BOOK_SELECTED':
        return action.payload
    }
    return state
}