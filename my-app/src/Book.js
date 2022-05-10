import React from "react";
/*This is an example of destructuring objects in JavaScript  */

const Book = (props) => {
  const { img, title, author } = props;
  //What is needed to setup an event in React:  attribute, eventHandler
  //onClick, onMouseOver
  const clickHandler = () => {
    alert("Hello World");
  };
  const complexExample = (e) => {
    console.log(author);
  };
  return (
    <article className="book" onMouseOver={() => {}}>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        reference example
      </button>
      <button type="button" onClick={complexExample}>
        more complex example
      </button>
    </article>
  );
};

export default Book;
