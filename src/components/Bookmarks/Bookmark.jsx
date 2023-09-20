import PropTypes from 'prop-types';

const Bookmark = ({ bookmark }) => {
  console.log(bookmark);
  return (
    <div>
      <h2 className='text-3xl font-bold m-3'>Title {bookmark.title}</h2>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired
};

export default Bookmark;

//rafc