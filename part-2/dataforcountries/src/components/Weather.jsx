import { useState, useEffect } from 'react'
import axios from 'axios'
const api_key = import.meta.env.VITE_SOME_KEY

const Weather = ({country}) => {
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        if (country.capital && country.capital.length > 0) {
            const capital = country.capital[0]
            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api_key}&units=metric`
            axios
             .get(weatherUrl)
             .then(response => setWeather(response.data))
             .catch(error => {
                console.error(error)
                setWeather(null)
            }) 
        }
    },[country.capital])

    if (!weather) {
        return <div>Loading weather...</div>
    }

    return (
        <div>
            <h3>Weather in {country.capital}</h3>
            <p>Temperature: {weather.main.temp.toFixed(2)} °C</p>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description} />
            <p>Wind: {weather.wind.speed.toFixed(1)} m/s</p>
        </div>
    )
}

export default Weather