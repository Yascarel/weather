import { useState } from "react"
import './WeatherCard.css'

const WeatherCard = ({weather, temp}) => {
  
  const [isCelsius, setIsCelsius] = useState(true)
  const changeTemp = () => {
    setIsCelsius(state => !state)
  }
  
  return (
    
    <>
    <section className="section">

    <h1>Weather App</h1>

    <h2>{weather?.name}, {weather?.sys.country}</h2>

    <article className="articleOne">
      <header>
        <img src={ weather && `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt="" />
      </header>
      <article className="articleTwo">
        <h3>"{weather?.weather[0].description}"</h3>
        <ul>
          <li><span className="spanOne">Wind Speed </span><span className="spanTwo">{weather?.wind.speed}m/s</span></li>
          <li><span className="spanOne">Clouds </span><span className="spanTwo">{weather?.clouds.all} %</span></li>
          <li><span className="spanOne">Pressure </span><span className="spanTwo">{weather?.main.pressure} hPa</span></li>
        </ul>
      </article>
    </article>
    <footer>
      <h2>{isCelsius ? 
      `${temp?.celsius} °C`
      :`${temp?.fahrenheit} °F`}</h2>
      <button onClick={changeTemp}>Change temperture</button>
    </footer>
    </section>
    </>
  )
}

export default WeatherCard