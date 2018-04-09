import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

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
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

// purpose of this function is to take our application state as an argument
function mapStateToProps(state) {
    // what gets returned from here will show up as props inside of BookList (object)
    return {
        books : state.books
    };
}

// Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
    // whenever selectbook is called, the result should be passed to all reducers
    return bindActionCreators({ selectBook : selectBook}, dispatch);
}

// Promote BoOkList from a component to a container - it needs to know about this new
// dispatch method, selectBook. Make it available as a prop
// (take mapStateToProps; return a container)
export default connect(mapStateToProps, mapDispatchToProps)(BookList);