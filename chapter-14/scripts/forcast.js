// forcast.js is for interacting with API's
const key = '4MFaO7ncWrchSwXqCKXVcFf5KUBW1olh';


// get weather information
const getWeather = async (id)=>{
    // current condition API
const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
const query = `${id}?apikey=${key}`;
const response = await fetch(base + query);
const data = await response.json();
 return data[0];
}


// get city information
const getCity = async (city)=>{
    // city search API
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;
    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
}
// getCity('Landon').then((data)=>{
//     return getWeather(data.Key);
// }).then((data)=>{
// console.log(data);
// }).catch((err)=>{
//     console.log(err);
// });

// getWeather('329260');

