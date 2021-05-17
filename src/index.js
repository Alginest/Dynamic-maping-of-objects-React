import React from 'react'
import ReactDom from 'react-dom'
// Css Import
import './index.css'
// Setup Vars
const books = [
  {
    id: 1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX482_BO1,204,203,200_.jpg',
    title: 'I love u to the moon and back.',
    author: 'Amelia Hepworth',
  },
  {
    id: 2,
    img: 'https://images-na.ssl-images-amazon.com/images/I/510g8NLbpNL._SX384_BO1,204,203,200_.jpg',
    title: '0ur class is a Family.',
    author: 'Sam Dendruf',
  },
  {
    id: 3,
    img: 'https://images-na.ssl-images-amazon.com/images/I/41EzNnr4YUL._SX329_BO1,204,203,200_.jpg',
    title: 'The Vanishing Half: A Novel',
    author: 'Brit Bennet',
  },
]

// APP
function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>
      })}
    </section>
  )
}

// Main Component
const Book = ({ img, title, author }) => {
  //Props is alrdy there just add the items.
  // const { img, title, author } = props // Destructoring props into pieces.

  return (
    <article className='book'>
      <img src={img} alt='1' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
