import React from 'react'
import PropTypes from 'prop-types'

const Clima = ({resultado}) => {

    const { name, main, weather } = resultado

    if(!name) return null

    const kelvin = 273.15

    return (  
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>The weather of {name} is: </h2>
                <p className="temperatura">
                    {parseFloat(main.temp - kelvin, 10).toFixed(2)} <span> &#x2103; </span>
                </p>
                <p>
                    Max temp: {parseFloat(main.temp_max - kelvin, 10).toFixed(2)} <span> &#x2103; </span>
                </p>
                <p>
                    Min temp: {parseFloat(main.temp_min - kelvin, 10).toFixed(2)} <span> &#x2103; </span>
                </p>
                <p className="weather"> {weather[0].description}  
                    <img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt="weather"/>
                </p>
                
            </div>

        </div>
    );
}

Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}
export default Clima;