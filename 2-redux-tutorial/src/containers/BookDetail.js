import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

class BookDetail extends Component {
    render() {
        if (!this.props.book) {
            return <div>Select a book</div>;
        }
        return (
            <div>
                <h5>{this.props.book.title}</h5>
                <p>Pages: {this.props.book.pages}</p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);