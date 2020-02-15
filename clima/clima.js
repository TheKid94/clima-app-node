const axios = require('axios');



const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=bd1f7a04919c69fbb575b90b4ec09b73`)

    return resp.data.main.temp;

}


module.exports = {
    getClima
}