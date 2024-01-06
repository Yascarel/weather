
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import WeatherCard from './components/WeatherCard'


function App() {
  
  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temp, setTemp] = useState()
  const [isLoading, setIsLoading] = useState(true)
 
  const success = pos => {
    const obj = {
      lat: pos.coords.latitude,
      lon: pos.coords.longitude
    }
   setCoords(obj)
  }

  useEffect(() => {
    setIsLoading(true)
    navigator.geolocation.getCurrentPosition(success)
   
  }, [])

  useEffect(() => {
    if(coords) {
      const apt_Key = '7d79ae364cf7d71ef3986710b87dd2d8'
      const {lat, lon} = coords
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apt_Key}`

    axios.get(url)
    .then(res => {
    setWeather(res.data)
    const obj = {
      celsius: (res.data.main.temp - 273.15).toFixed(1),
      fahrenheit: ((res.data.main.temp - 273.15) * 9 / 5 + 32).toFixed(1)
    }
      setTemp(obj)
            
    })
    .catch(err => (console.log(err)))

    .finally (() => { setTimeout(() => {
      setIsLoading (false)
    }, 2000)});
    
    
  }

  }, [coords])


  return (
    
    <div className='app'>
      {
         isLoading
        ? <h1 className='loading'>En espera de tu ubicacion....</h1>
        :(
      <WeatherCard 
     weather={weather} 
     temp={temp} />
     
        )
        }
    </div>
  )
}

export default App
