import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import selectBook  from '../actions/index'


class BookList extends Component {

    renderList() {
        return this.props.books.map((book) => {
           return (
               <li
                   key={book.title}
                   onClick={() => this.props.selectBook(book)}
                   className="list-group-item">
                   {book.title}
               </li>
           )
        });
    }

    render() {
        return <ul className="list-group col-sm-4">{this.renderList()}</ul>
    }
}

//whatever is returned will show up as props inside of BookList
function mapStateToProps(state) {
    return {
        books: state.books,
    };
}

//anything returned from this function will end up as props inside of BookList
function mapDispatchToProps(dispatch) {
    //whenever selectBook is called, the result should be passed to (flow through) all of our reducers
    return bindActionCreators({selectBook: selectBook}, dispatch)
}

//Promote BookList from a component to a container - it needs to know
//about this new dispatch method, selectBook. Make it available to be called
//as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);