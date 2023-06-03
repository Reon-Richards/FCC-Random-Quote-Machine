import React, { useEffect, useState} from 'react';
import './App.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faTumblr} from '@fortawesome/free-brands-svg-icons'
let quotesDBUrl = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"

function App() {
  const [quote, setQuote] = useState("If you want to lift yourself up, lift up someone else.")
  const [author, setAuthor] = useState("Booker T. Washington")
  const [randomNumber, setRandomNumber] = useState(0)
  const [quotesArray, setQuotesArray] = useState(null)
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
    setQuote(quotesArray[randomInteger].quote)
    setAuthor(quotesArray[randomInteger].author)
  }
  return (
    <div className="App" >
      <header className="App-header" id="quote-box">
        {/*<h1>Random Number : {randomNumber}</h1>*/}
        <p id="text">
         "{quote}"
        </p>
        <p id="author">
         - {author}
        </p>
        <div id = "buttonBar">
          <div id = "socials">
  <a className = "socials" href="www.twitter.com" id="tweet-quote"><FontAwesomeIcon icon={faTwitter}/></a> 
  <a className = "socials" href="www.tumbler.com" ><FontAwesomeIcon icon={faTumblr}/></a>
          </div>
          <div id = "newQuote">
        <button onClick={() => getRandomQuote()}> New Quote </button>
          </div>
        </div>
      </header>
    </div>
  );
}
export default App;