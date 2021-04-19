import React, { Component } from "react";
import BookListItem from "../book-list-item";
import Spinner from "../spinner";
import { connect } from "react-redux";
import { booksLoaded, booksRequested } from "../../actions";
import { withBookstoreService } from "../hoc";
import { compose } from "../../utils";
import "./book-list.css";

class Booklist extends Component {
  componentDidMount() {
    const { bookstoreService, booksLoaded, booksRequested } = this.props;
    booksRequested();
    bookstoreService.getBooks().then((data) => booksLoaded(data));
  }

  render() {
    const { books, loading } = this.props;

    if (loading) return <Spinner />;

    return (
      <ul className="book-list">
        {books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItem book={book} />
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = ({ books, loading }) => {
  return { books, loading };
};

const mapDispatchToProps = { booksLoaded, booksRequested };

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(Booklist);
