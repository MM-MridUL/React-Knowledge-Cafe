
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'



function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime,setReadingTime]=useState(0)

  const handleAddToBookmark= blog =>{
    const newBookmarks=[...bookmarks,blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead=(id,time)=>{
    const newReadingTime=readingTime+time;
    setReadingTime(newReadingTime);
    // remove the red blog from bookmark
    console.log('Remove bookmark:',id)
    const remainingBookmark=bookmarks.filter(bookmark=>bookmark.id!==id)
    setBookmarks(remainingBookmark);

  }


  return (
    <>
     <Header></Header>
     <div className='md:flex max-w-7xl mx-auto'>
     <Blogs handleAddToBookmark={handleAddToBookmark}
     handleMarkAsRead={handleMarkAsRead}></Blogs>
     <Bookmarks bookmarks={bookmarks}
     readingTime={readingTime}></Bookmarks>
     
     </div>
      
    </>
  )
}

export default App
