const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img')


const updateUI = (data)=>{
// -1     console.log(data);
// const cityDets = data.cityDets;
// const weather = data.weather;

// -2  destructure properties
// the constants name must be same as the propreties we are getting from the object
// it means that from this data object get cityDets property and store it in a constant called  cityDets and alse
// get the weather property from this data object and store it in a constant called weather
// code -1 and -2 are same
const {cityDets,weather} = data;


// update details template
details.innerHTML = `
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText }</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>`;

// update the night/day & icon images
const iconsSrc = `img/icons/${weather.WeatherIcon}.svg`;
icon.setAttribute('src',iconsSrc);

// ternary operator
let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg ';

// the above ternary operator and below the if check both do the same work

// let timeSrc= null;
// if(weather.IsDayTime){
//     timeSrc = 'img/day.svg';
// }else{
//     timeSrc = 'img/night.svg';
// };
time.setAttribute('src',timeSrc)

    // remove the d-none class if present
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
}


const updateCity = async (city)=>{
    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);


    return {cityDets,weather}
};


cityForm.addEventListener('submit', (e)=>{
// prevent default action
e.preventDefault();

// get city value
const city = cityForm.city.value.trim();
cityForm.reset();

// update ui with new city 
updateCity(city).then((data)=>{
    console.log(data);
    updateUI(data);
}).catch((err)=>{
    console.log(err);
});
});