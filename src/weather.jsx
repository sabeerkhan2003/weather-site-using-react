import React, { useState } from 'react'
import axios from 'axios'

function Weather() {
  const [details] = useState([
    {
      id: 1,
      column: "Weather:"
    },
    {
      id: 2,
      column: "Temperature:"
    },
    {
      id: 3,
      column: "Description:"
    },
  ])
  const detailsData = useState([
    {
      id: 4,
      data: "Weather"
    },
    {
      id: 5,
      data: "Temperature"
    },
    {
      id: 6,
      data: "Description"
    }
  ])

  const [city, setCity] = useState("")
  const [Weather, setWeather] = useState("")
  const [Temperature, setTemperature] = useState("")
  const [Description, setDescription] = useState("")

  function handlechange(eve) {
    setCity(eve.target.value)
  }

  function weatherdata(event) {
    event.preventDefault()
    var weather = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d969ad255dfd0d7d8f1654b8d5ba986d`)
    weather.then(function (success) {
      console.log(success.data)
      setWeather(success.data.weather[0].main)
      setTemperature(success.data.main.temp)
      setDescription(success.data.weather[0].description)

    })
  }


  return (
    <div>
      <form className=' p-5  bg-teal-400 font-medium items-center'>
        <div className='flex gap-3 '>
          <label><h1 className='font-semibold'>Enter city name :</h1></label>
          <input onChange={handlechange} className='border-2 rounded-lg'></input></div>
        <button onClick={weatherdata} className='border-2  px-4 py-1 font-sans mt-2 ml-1  rounded-lg border-black' >get report</button>
      </form>

      <ul className='p-24 flex flex-col gap-7 font-bold bg-yellow-100'>{
        details.map((col, index) =>
          <li key={col.id}>{col.column}<span>{index === 0 ? Weather : index === 1 ? Temperature : Description}</span></li>)
      }</ul>



    </div>
  )
}

export default Weather