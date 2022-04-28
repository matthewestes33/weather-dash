//define variables
//var for search box and button
var searchInput = document.getElementById("search-city");
var searchButton = document.getElementById("search-city-button");

//var for forecast items
var currentTemp = document.getElementById("current-temp");
var currentHumidity = document.getElementById("current-humidity");
var currentWindSpeed = document.getElementById("current-wind-speed");
var uvIndex = document.getElementById("uv-index");

//defining main weather elements
var weatherContent = document.getElementById("weather-content");

var city;

var currentCity = document.getElementById("current-city");

var weatherIcon = document.getElementById("weather-icon")

//var for api variables
var apiKey = "9c6baa83d29531f20f93a51414d26bef";

//get city information from search field
function getCity() {
    //capture the city that is put into the search field
    city = searchInput.value
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
    //console.log(temp)
 
    var timeStamp = forecast.current.dt
    var milliseconds = timeStamp * 1000
    var dateObject = new Date(milliseconds)
    var dateFormat = dateObject.toLocaleString()
    dateFormat = dateFormat.split(",")
    var date = dateFormat[0]
    //console.log(dateFormat)

    var humidity = forecast.current.humidity
    console.log(humidity)

    var wind = forecast.current.wind_speed
    console.log(wind)

    var uv = forecast.current.uvi
    console.log(uv)

    // weather icon
    var icon = forecast.current.weather[0].icon
    var iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`
    console.log(icon)

    currentCity.innerText = `${city} - ${date}`
    weatherIcon.setAttribute("src", iconURL)
    currentTemp.innerText = temp
    currentHumidity.innerText = humidity
    currentWindSpeed.innerText = wind
    uvIndex.innerText = uv 


    //remove the hide class
    weatherContent.classList.remove("hide")
}


//attach event listener to search button
searchButton.addEventListener("click", getCity);