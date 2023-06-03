import React, { useEffect, useState} from 'react';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faTumblr } from '@fortawesome/free-brands-svg-icons'
import {faQuoteLeft} from '@fortawesome/free-solid-svg-icons'
import COLOR_ARRAY from './colorArray.js';


let quotesDBUrl = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
function App() {
  const [quote, setQuote] = useState("If you want to lift yourself up, lift up someone else.")
  const [author, setAuthor] = useState("Booker T. Washington")
  const [randomNumber, setRandomNumber] = useState(0)
  const [quotesArray, setQuotesArray] = useState(null)
  const [randomColor, setRandomColor] = useState('#CCCC00')
  const fetchQuotes = async (url) => {
  const response = await fetch(url)
  const parsedJSON = await response.json()
  setQuotesArray(parsedJSON.quotes)
  console.log(parsedJSON)
}
useEffect(() => {
  fetchQuotes(quotesDBUrl)
}, [quotesDBUrl])
  const getRandomQuote = () => {
    let randomInteger = Math.floor(quotesArray.length * Math.random());
    setRandomNumber(randomInteger)
    setRandomColor(COLOR_ARRAY[randomInteger])
    setQuote(quotesArray[randomInteger].quote)
    setAuthor(quotesArray[randomInteger].author)
  }
 
  return (
    <div className="App" style = {{backgroundColor : randomColor}}>
      <header className="App-header" id="quote-box"style = {{color : randomColor}} >
        <p id="text">
         <span id="quote-icon" ><FontAwesomeIcon icon={faQuoteLeft} size="4x" /></span> {quote}"
        </p>
        <p id="author">
         - {author}
        </p>
        <div id= "buttonBar">
          <div id = "socials">
          <div id= "twitter" style = {{backgroundColor : randomColor, color: randomColor}}>
            <a className = "socials" href={encodeURI(`http://www.twitter.com/intent/tweet?text="${quote}"  - ${author}`)} id="tweet-quote"> <FontAwesomeIcon icon={faTwitter}/></a>
            </div>
            <div id= "tumbler" style = {{backgroundColor : randomColor}}>
            <a className = "socials" href="www.tumbler.com" id="tumblr-quote"><FontAwesomeIcon icon={faTumblr}/></a>
            </div>
          </div>
          <div id = "newQuoteDiv">
        <button id = "new-quote" onClick={() => getRandomQuote()} style = {{backgroundColor : randomColor}}> New Quote </button>
          </div>
        </div>
      </header>
    </div>
  );
}
export default App;
