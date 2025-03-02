import { useState, useEffect } from 'react'
import axios from 'axios'


const App = () => {
  const [input, setInput] = useState('')
  const [countries, setCountries] = useState([])
  const [content, setContent] = useState(<></>)

  const handleInput = (event) => {
    setInput(event.target.value)
  }

  useEffect(() => {
    if (input) {
      axios
        .get('https://studies.cs.helsinki.fi/restcountries/api/all')
        .then( response  => {
          const filteredCountries = response.data.filter(country => 
            country.name.common.toLowerCase().includes(input.toLowerCase())
          )
          setCountries(filteredCountries)
        }) 
        .catch(error => {
          console.log(error)
          setCountries([])
        })
    } else {
      setCountries([])
    }
  }, [input])

  const showCountryDetails = (country) => {
    return (
      <div>
        <h2>{country.name.common}</h2>
        <p>Capital: {country.capital}</p>
        <p>Area: {country.area}</p>
        <h3>Languages:</h3>
        <ul>
          {(Object.values(country.languages)).map(lang => 
            <li key={lang}>
              {lang}
            </li>
          )}
        </ul>
        <img src={country.flags.png} alt={country.flags.alt} />
      </div>
    )
  }

  useEffect(() => {
    if (countries.length > 10){
      setContent(<div>Too many matches, specify another filter</div>)
    } else if (countries.length > 1 && countries.length <= 10){
      setContent(
        <div>
          {countries.map(country => (
            <div key={country.name.common}>
              {country.name.common}
            </div>
          ))}
        </div>
      )
    } else if (countries.length === 1){
      setContent(
        showCountryDetails(countries[0])
      )
    }
  },[countries])

  return (
    <div>
      find countries
      <input value={input} onChange={handleInput} />
      <div>
        {content}
      </div>
    </div>
  )
}


/*

const App = () => {
  const [ input, setInput ] = useState('')
  const [ countries, setCountries ] = useState([])
  const [content, setContent] = useState(<></>)

  useEffect(() => {
    if (input.trim() === ""){
      setCountries([])
      return;
    } 
    axios
      .get(`https://restcountries.com/v3.1/name/${input}`)
      .then((response) => {
        setCountries(response.data)
      })
  },[input])

  const handleInputChange = (event) => {
    setInput(event.target.value)
  }

  const showCountryDetails = (country) => {
    return (
      <div>
        <h2>{country.name.common}</h2>
        <p>Capital: {country.capital}</p>
        <p>Area: {country.area}</p>
        <h3>Languages:</h3>
        <ul>
          {(Object.values(country.languages)).map(lang => 
            <li key={lang}>
              {lang}
            </li>
          )}
        </ul>
        <img src={country.flags.png} alt={country.falgs.alt} />
      </div>
    )
  }

  useEffect(() => {
    if (countries.length > 10){
      setContent(<div>Too many matches, specify another filter</div>)
    } else if (countries.length > 1){
      setContent(
        <div>
          {countries.map(country => {
            <div key={country.name.common}>
              {country.name.common}
            </div>
          })}
        </div>
      )
    } else if (countries.length === 1){
      axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${countries[0].name.common}`)
        .then(response => {
          setContent(showCountryDetails(response.data[0]))
        })
    } else {
      setContent(<></>)
    }

  },[countries])



  return (
    <div>
      find countries 
      <input value={input} onChange={handleInputChange}/>
      <div>
        {content}
      </div>
    </div>
  )
}*/

export default App
