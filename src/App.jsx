import { useState } from 'react'
import './App.css'
import Header from './components/Header/header'
import Blogs from './components/Blogs/blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleBookmarks = blog =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  return (
    <div className="flex flex-col  items-center">
      <Header></Header>
      <div className='flex justify-between'>

      <div className=" md:flex max-w-6xl mx-auto">
        <Blogs handleBookmarks={handleBookmarks}></Blogs>
        
      </div>

      <div>
        <h2>Book Mark List</h2>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>

      </div>
      
      
    </div>
  )
}

export default App
