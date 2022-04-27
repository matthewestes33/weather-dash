//define variables
//var for dom elements
var searchInput = document.getElementById("search-city");
var searchButton = document.getElementById("search-city-button");

//var for api variables
var apiKey = "9c6baa83d29531f20f93a51414d26bef";

//get city information from search field
function getCity() {
    //capture the city that is put into the search field
    var city = searchInput.value
    console.log(city)
    // mdn docs for using fetch to call api https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch 
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => getWeather(data));
}

//create a function to get the weather
function getWeather(cityInfo) {
    console.log(cityInfo[0])
    //declare variables for lat and lon info in order to use open weather api
    var lat = cityInfo[0].lat;
    var lon = cityInfo[0].lon;
    console.log(lat, lon);
    //second api request with lat and lon information
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => renderWeather(data));
}

//function to render the weather to accept parameter of forecast
function renderWeather(forecast) {
    console.log(forecast)
    // declare variables for all relevant weather information
    var temp = Math.round(((forecast.current.temp - 273.15)*9) /5 + 32)
    console.log(temp)
    // not sure of 40-43
    var date = new date(1649906865 *1000);
    var dateObject = new date(milliseconds)
    var dateFormat = dateObject.toLocaleString()
    console.log(date)

}
//K to F (0K − 273.15) × 9/5 + 32

//attach event listener to search button
searchButton.addEventListener("click", getCity);