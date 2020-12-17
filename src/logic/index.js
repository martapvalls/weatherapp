const appId = '031b0d6c3075b5182aa8080c1c01d616'

const getWeather = async (ciudad, pais) => {
    
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`
    const response = await fetch(url)

    const resultado = await response.json()
    console.log(resultado)
    return resultado
    
}

export default getWeather