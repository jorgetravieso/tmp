//Action creator
export default function selectBook(book) {

    //select book is ActionCreator, it needs to return an action, i.e.,
    //an object with a type property
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}