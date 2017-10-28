const request= require('request');

var getWeather = (latitude, longitude, callback) =>{
    request({
        url: `https://api.darksky.net/forecast/7f318e5528b9d6cbd939aad05c12a166/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {
        if(!error && response.statusCode === 200){
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            })
        }
        else {
            callback('Unable to fetch weather');
        }
    })
};

module.exports.getWeather = getWeather;
