import PropTypes from 'prop-types';
import Bookmark from './Bookmark';
const Bookmarks = (bookmarks) => {
  const Book = bookmarks.bookmarks;
  return (
    <div className="md:w-1/3">
      <h2>Bookmarks: {Book.length}</h2>
      {
        Book.map(book => <Bookmark bookmark={book} key={book.id} />)
      }
    </div>
  );
};
Bookmarks.propTypes = {
  Bookmarks: PropTypes.object.isRequired
}

export default Bookmarks;