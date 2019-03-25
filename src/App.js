import React, { Component } from 'react';

import './App.css';
import Titles from  "./components/Tttles"
import Form from './components/Form'
import Weather from './components/weather'
import Swal from 'sweetalert2' ;
import * as moment from 'moment';


const API_KEY = "7fabf2d1ab43bc74376c02dfef03173d";
class App extends Component {
 
state =  {
  temperature:undefined ,
  city :undefined ,
  country:undefined ,
  humidity:undefined ,
  description:undefined ,
  day:undefined ,
  dayAndMonth:undefined ,
  time:undefined ,
  error:undefined
  
}


componentDidMount() {
  fetch("https://swapi.co/api/people/1")
      .then(response => response.json())
      .then(data => console.log(data))
}
  getWeather = async (e)=>{
    
    e.preventDefault()
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    

    console.log(city)
    console.log(country)
    if(city == '' && country == ''){
      Swal.fire({
        title: 'Error!',
        text: 'Please enter city and the cpuntry',
        type: 'error',
        confirmButtonText: 'Ok'
      })
    }else {
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
      const data = await api_call.json();
      let d = new Date () ;

      let s = d.toString()
     let dt = moment(d).format('MMMM Do YYYY, h:mm:ss a');
     console.log(dt)
  
      //Tue Mar 19 2019 00:10:23 GMT+0200 (South Africa Standard Time)
      console.log(s.substr(0, 3))
      console.log(s.substr(4, 7))
      console.log(s.substr(15, 16))
      this.setState({
        temperature:data.main.temp ,
        city:data.name ,
        country:data.sys.country ,
        humidity:data.main.humidity ,
        description:data.weather[0].description ,
        day:dt ,
        error:""
  
  
  
      })

    }
   
  }
  render() {
    return (
     <div className="mainContainer">
      
       <Titles/>
       <Form getWeather={this.getWeather}/>
       <Weather temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                description={this.state.description}
                day={this.state.day}
                />
     </div>
    );
  }
}

export default App;
