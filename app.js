const request =  require('request');

request({ url:'https://maps.googleapis.com/maps/api/geocode/json?address=Rajiv%20Nagar%20Gurgaon' }, (error, response, body) => {
    console.log(body);
});