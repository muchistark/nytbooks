import React from 'react';
import Book from './book';


const Output = props => {
  return (
    <div >
      <ol>
        {props.books.map((book, index) => (
          <div key={index}>
            <Book
              author={book.book_details[0].author}
              bookTitle={book.book_details[0].title}
              publisher={book.book_details[0].publisher}
              description={book.book_details[0].description}
              rank={book.rank}
              weeksOnList={book.weeks_on_list}
              amazon_product_url={book.amazon_product_url}
              rank_last_week={book.rank_last_week}
              primary_isbn13={book.book_details[0].primary_isbn13}
              
            />
          </div>
        ))}
      </ol>

    </div>
  );
};

export default Output;
