import React from "react";

class Weather  extends React.Component {
    render(){
        let d = new Date () ;
        return (
         
           <div>

               {
                   this.props.temperature !=undefined ?
                    <div class="row">
                    <div class="col">
                        <div className="weather-card one">
                            <div className="top">
                                <div class="wrapper">
                                    <div className="mynav">
                                        {/* <a href="javascript:;"><span class="lnr lnr-chevron-left"></span></a> */}
                                        {/* <a href="javascript:;"><span class="lnr lnr-cog"></span></a> */}
                                    </div>
                                    <h1 className="heading">{this.props.description}</h1>
                                    <h3 className="location">{this.props.city}</h3>
                                    <h3 className="location">{this.props.day}</h3>
                                    <p className="temp">
                                        <span class="temp-value">{this.props.temperature}</span>
                                        <span class="deg">0</span>
                                        <a href="javascript:;"><span class="temp-type">C</span></a>
                                    </p>
                                </div>
                            </div>
                            <div class="bottom">
                                <div className="wrapper">
                                    <ul className="forecast">
                                        <a href="javascript:;"><span class="lnr lnr-chevron-up go-up"></span></a>
                                        <li class="active">
                                            <span className="date">Yesterday</span>
                                            <span className="lnr lnr-sun condition">
                                                <span className="temp">23<span class="deg">0</span><span class="temp-type">C</span></span>
                                            </span>
                                        </li>
                                        <li>
                                            <span className="date">Tomorrow</span>
                                            <span className="lnr lnr-cloud condition">
                                                <span class="temp">21<span class="deg">0</span><span class="temp-type">C</span></span>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>:<div></div>
               }
           
            </div>
        )
    }

}

export default Weather;