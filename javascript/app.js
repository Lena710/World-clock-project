function displayDateTime() {

    let stPCityElement = document.querySelector('#stP');
    if(stPCityElement ) {
        let stPDateElement = stPCityElement.querySelector('.date');
        let stPTimeElement = stPCityElement.querySelector('.time');
        stPDateElement.innerHTML=moment.tz('Europe/Moscow').format('MMMM Do YYYY');
        stPTimeElement.innerHTML=moment.tz('Europe/Moscow').format('hh:mm:ss [<small>]A[</small>]');

    }
    
    let honoluluCityElement = document.querySelector('#honolulu');
    if(honoluluCityElement) {
        let honoluluDateElement = honoluluCityElement.querySelector('.date');
        let honoluluTimeElement = honoluluCityElement.querySelector('.time');
        honoluluDateElement.innerHTML=moment.tz('Pacific/Honolulu').format('MMMM Do YYYY');
        honoluluTimeElement.innerHTML=moment.tz('Pacific/Honolulu').format('hh:mm:ss [<small>]A[</small>]');
    }
}

function changeCity(event) {

    let cityValue = event.target.value;
    if (cityValue === 'currentLocation') {
        cityValue = moment.tz.guess();
    }
    if (cityValue.length !==0) {
    let citiesElement = document.querySelector('.cities');
    
    let city = cityValue.replace('_', ' ').split('/')[1];
    let cityDate = moment.tz(event.target.value).format('MMMM Do YYYY');
    let cityTime = moment.tz(event.target.value).format('hh:mm:ss [<small>]A[</small>]');
    citiesElement.innerHTML = `<div class="city">
        <div>
        <h2>${city}</h2>
        <div class="date">${cityDate}</div>
        </div>
        <div class="time">${cityTime}</div>
    </div> 
    <a class="homepageLink" href='index.html'>Homepage</a>`;
    }
    
}


setInterval(displayDateTime, 1000);

let selectCityElement = document.querySelector('#cities');
selectCityElement.addEventListener('change', changeCity);