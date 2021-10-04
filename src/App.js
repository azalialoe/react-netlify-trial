import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react'

function App() {

  const [quote, setQuote] = useState([]);

  useEffect(() => {
    axios({
      url: "https://animechan.vercel.app/api/random",
      method: "GET",
      dataResponse: "json",
    }).then((response) => {
        // update 'art' state with response from API:
        setQuote(response.data);
        
    });
    // Add an empty array here to prevent the callback function from running every time our component re-renders!
  }, []);

  return (
    <div className="App">
      
        <h1>trial this is</h1>
       
        <p>
          i mean sure i guess
        </p>

        <p>this is fine</p>

        <p>have an anime quote for a brighter skin:</p>

        <p>{quote.quote}</p>
        <p>from: {quote.anime}</p>
        <p>Who said this? It's {quote.character} !</p>

        <p>API credit: Anime Quotes API</p>

        <p>refresh to get new quote</p>
        
    </div>
  );
}

export default App;
