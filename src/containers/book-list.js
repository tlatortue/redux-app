import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
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

// take mapStateToProps; return a container
export default connect(mapStateToProps)(BookList);