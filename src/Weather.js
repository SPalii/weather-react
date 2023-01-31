import React from "react";
import axios from "axios";
import { Bars } from 'react-loader-spinner'
export default function Weather(props){
   function handleResponce(responce){
      alert
      (`The weather in Kyiv is ${responce.data.main.temp}°C`);
   }
    let apiKey = "1ef7d7e2ff03d274cb2d1bf82cc249b8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponce);
return(
<Bars
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
   );
}