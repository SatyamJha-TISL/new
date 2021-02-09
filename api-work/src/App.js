import React, { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [weather, setWeather] = useState(null);
  const [input , setInput] = useState(" ");

  useEffect(() => {
    const location = axios
      .get(
        "http://api.weatherapi.com/v1/current.json?key=70ae1cf4355544939b6133526212901&q=London"
      )
      .then((result) => {
        setWeather(result.data);
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const inputHandler = (e) => {
    setInput(e.target.value);
  }

  const searchHandler = () => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=70ae1cf4355544939b6133526212901&q=${input}`
      )
      .then((result) => {
         setWeather(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
  <div id="root">
       <input onChange = {inputHandler} type="text"/>
    <button onClick = {searchHandler}>Check</button>
    {weather && <div>
      <h1>{weather.location.country}</h1>
      <h2>{weather.location.region}</h2>
      <div className="condition">
        <h2>{weather.current.condition.text}
        <img src= {weather.current.condition.icon} alt="" srcset=""/></h2>
      </div>
      
      </div>}
     
 
    </div>);
}

export default App;
