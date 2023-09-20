import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog, handleBookmarks}) => {
const {id, cover, title, author, author_image, posted_date, reading_time, hashtags} = blog;
  return (
    <div className="w-96">
      <img src={cover} alt="" />

      <div className="flex justify-between my-4">
        <div className='flex gap-4'>
          <img className="w-14" src={author_image} alt="" />
          <div>
            <h3 className="test-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p>{reading_time} min read</p>
          <button
            onClick={()=>handleBookmarks(blog)}
           className="text-stone-600"><FaBookmark></FaBookmark></button>
        </div>
      </div>
      
      <h2 className="text-3xl font-bold">{title}</h2>

      <span className="my-5">{hashtags}</span><br />

      <button className="bg-slate-400 my-10">Mark as read</button>

    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmarks: PropTypes.func
};

export default Blog;