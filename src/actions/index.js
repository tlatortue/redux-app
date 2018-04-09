export function selectBook(book) {
    // selectBook is an ActionCreator, must return an action (obj with type property)
    return {
        // action always contains a type (usually uppercase), and sometimes a payload
        type: 'BOOK_SELECTED',
        payload: book
    };
    
    //console.log('A book has been selected:', book.title);
}