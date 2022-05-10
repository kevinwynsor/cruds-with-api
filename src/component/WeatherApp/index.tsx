import React, { useEffect, useState } from "react";

function Index() {
  interface weather {
    name: string;
    weather: 
      {
        description: string;
      }
    main: 
      {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
      }
    sys:
    {
      country: string;
    }
    coord:
    {
      lat: number;
      lon: number;
    }
  }

  const [lat, setLat] = useState<number | null>(null);
  const [long, setLong] = useState<number | null>(null);
  const [unit, setUnit] = useState<string>("metric");
  const [data, setData] = useState<weather>();

  const apiKey = process.env.REACT_APP_OPENWEATHER_APIKEY;

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=${unit}`
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [unit, lat]);

  const handeKelvinOnclick = () => {
    setUnit("Default");
  };

  const handeCelsiusnOnclick = () => {
    setUnit("Metric");
  };

  const handeFahrenheitOnclick = () => {
    setUnit("Imperial");
  };

  const handleCheckLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
    
  }

  return (
    <>
      <h1>WEATHER APP</h1>
      <button onClick={handeKelvinOnclick}>Kelvin</button>
      <button onClick={handeCelsiusnOnclick}>Celsius</button>
      <button onClick={handeFahrenheitOnclick}>Fahrenheit</button>
      <button onClick={handleCheckLocation}>Click to determine your current location and check out your weather</button>
      <p>Temperature: {data?.main?.temp}</p>
      <p>Feels like: {data?.main?.feels_like}</p>
      <p>Minimum Temperature: {data?.main?.temp_min}</p>
      <p>Maximum Temperature: {data?.main?.temp_max}</p>
      <p>Pressure: {data?.main?.pressure}</p>
      <p>Humidity: {data?.main?.humidity}</p>
      <p>Country: {data?.sys?.country} </p>
      <p>Area: {data?.name}</p>
      <p>Longitude: {data?.coord?.lon}</p>
      <p>Latitude: {data?.coord?.lat}</p>
    </>
  );
}

export default Index;
