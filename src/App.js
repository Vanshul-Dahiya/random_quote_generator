import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetch("http://api.quotable.io/random")
      .then((res) => res.json())
      .then((quote) => {
        setQuote(quote.content);
      });
  }, []);
  let newQuote = () => {
    fetch("http://api.quotable.io/random")
      .then((res) => res.json())
      .then((quote) => {
        setQuote(quote.content);
      });
  };
  return (
    <div className="App">
      <div className="quote">
        <h2> {quote} </h2>
      </div>
      <br />
      <button className="btn" onClick={newQuote}>
        Next quote
      </button>
    </div>
  );
}

export default App;
