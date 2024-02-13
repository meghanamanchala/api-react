// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
function App() {
  const bookUrl = `https://reactnd-books-api.udacity.com/books`;
  const [bookData, setBookData] = useState([]);
  const getData = (url) => {
    axios.get(`${url}`,
      {
        headers: { 'Authorization': 'whatever-you-want' },
      })
      .then((res) => setBookData(res.data.books))
      .catch(() => {
        console.warn("Status Code = 404");
        console.error("Website not found");
      });
  };
  console.log(bookData);
  useEffect(() => {
    getData(bookUrl)
  }, []);
  return (
    <div className="container">
      {bookData.map((el, i) => (
        <div className="contains" key={i}>
          <p className='title'>{el.title}</p>
          <div className='flex'>
            <img src={el.imageLinks.thumbnail} alt={el.title} />
            <p className='des'>{el.description.slice(0, 668)}</p>
          </div>
          <div className='flex'>
            {el.authors.map((author, index) => (
              <p className="author" key={index}>{author}</p>
            ))}
          </div>

        </div>

      ))}
    </div>
  )
}

export default App;