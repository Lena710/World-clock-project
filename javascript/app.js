function displayDateTime() {

    let stPCityElement = document.querySelector('#stP');
    let stPDateElement = stPCityElement.querySelector('.date');
    let stPTimeElement = stPCityElement.querySelector('.time');
    stPDateElement.innerHTML=moment.tz('Europe/Moscow').format('MMMM Do YYYY');
    stPTimeElement.innerHTML=moment.tz('Europe/Moscow').format('hh:mm:ss [<small>]A[</small>]');


    let honoluluCityElement = document.querySelector('#honolulu');
    let honoluluDateElement = honoluluCityElement.querySelector('.date');
    let honoluluTimeElement = honoluluCityElement.querySelector('.time');
    honoluluDateElement.innerHTML=moment.tz('Pacific/Honolulu').format('MMMM Do YYYY');
    honoluluTimeElement.innerHTML=moment.tz('Pacific/Honolulu').format('hh:mm:ss [<small>]A[</small>]');
}


setInterval(displayDateTime, 1000);