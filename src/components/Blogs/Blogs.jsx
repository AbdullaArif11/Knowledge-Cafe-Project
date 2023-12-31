import { useEffect, useState } from "react";
import Blog from "./Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleBookmarks}) => {
  const [blogs,setBlogs] = useState([]);
  useEffect(() => {
    fetch('Api-data.json')
    .then(res => res.json())
    .then(data => setBlogs(data))
  },[])


  return (
    <div className="md:w-2/3">
      <h2>Blogs: {blogs.length}</h2>
      {
        blogs.map(blog => <Blog
           key={blog.id}
           blog={blog}
           handleBookmarks={handleBookmarks}>
           </Blog>)
      }
    </div>
  );
};

Blogs.propTypes = {
  handleBookmarks: PropTypes.func
}

export default Blogs;