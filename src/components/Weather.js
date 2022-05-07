import React, { useState, useEffect } from 'react'

const Weather = () => {

  const [city, setCity] = useState();
  const [search, setSearch] = useState("Wardha");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=541d94126242e4c236de1f3f899a6e33`

      const response = await fetch(url);
      // console.log(response);
      const resJson = await response.json();
      // console.log(resJson)
      setCity(resJson.main);
    }
    fetchApi();
  },[search])

  return (
    <>
      <div className='box'>
        <div className="inputData">
          <input
            type="search"
            value={search}
            className='inputField'
            onChange={(event) => {
                setSearch(event.target.value)
            }} />
        </div>

        {!city ? (
          <p className='errorMsg'>No Data Found</p>
        ) : (<>
          <div className="info">
          <h2 className='location'>
            <i className="fa-solid fa-street-view"></i> {search}
          </h2>
          <h1 className="temp">
            {city.temp}°C
          </h1>
          <h3 className="tempmin_max"> Min : {city.temp_min}°C | Max : {city.temp_max}°C
          </h3>
        </div>

        <div className="wave-one"></div>
        <div className="wave-two"></div>
        <div className="wave-three"></div>
        </>)

        }

      </div>

    </>
  )
}

export default Weather