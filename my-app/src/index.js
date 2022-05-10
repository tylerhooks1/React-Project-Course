//Import and Export are ES6 Modules
import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";
import { books } from "./books";
import Book from "./Book";
import greeting from "./testing/testing";

function BookList() {
  console.log(greeting);
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>; //Spreading out all the properties in book[]
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
/* Stateless function component
   Always return JSX 

function Greeting() {
  return <h4>This is Tyler and This is my first component.</h4>;
}

 JSX Rules:
 - return single element 
 - div/ section/ article 
 - use camelCase instead of class
 - close every element 
 - formatting  

*/
