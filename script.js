//define variables for display items
var searchInput = document.getElementById("search-city");
var searchButton = document.getElementById("search-city-button");

var weatherContent = document.getElementById("weather-content");
var currentCity = document.getElementById("current-city");

var weatherIcon = document.getElementById("weather-icon")
var currentTemp = document.getElementById("current-temp");
var currentHumidity = document.getElementById("current-humidity");
var currentWindSpeed = document.getElementById("current-wind-speed");
var uvIndex = document.getElementById("uv-index");

var currentDate1 = document.getElementById("current-date-1")
var weatherIcon1 = document.getElementById("weather-icon-1")
var currentTemp1 = document.getElementById("current-temp-1");
var currentHumidity1 = document.getElementById("current-humidity-1");
var currentWindSpeed1 = document.getElementById("current-wind-speed-1");

var currentDate2 = document.getElementById("current-date-2")
var weatherIcon2 = document.getElementById("weather-icon-2")
var currentTemp2 = document.getElementById("current-temp-2");
var currentHumidity2 = document.getElementById("current-humidity-2");
var currentWindSpeed2 = document.getElementById("current-wind-speed-2");

var currentDate3 = document.getElementById("current-date-3")
var weatherIcon3 = document.getElementById("weather-icon-3")
var currentTemp3 = document.getElementById("current-temp-3");
var currentHumidity3 = document.getElementById("current-humidity-3");
var currentWindSpeed3 = document.getElementById("current-wind-speed-3");

var currentDate4 = document.getElementById("current-date-4")
var weatherIcon4 = document.getElementById("weather-icon-4")
var currentTemp4 = document.getElementById("current-temp-4");
var currentHumidity4 = document.getElementById("current-humidity-4");
var currentWindSpeed4 = document.getElementById("current-wind-speed-4");

var currentDate5 = document.getElementById("current-date-5")
var weatherIcon5 = document.getElementById("weather-icon-5")
var currentTemp5 = document.getElementById("current-temp-5");
var currentHumidity5 = document.getElementById("current-humidity-5");
var currentWindSpeed5 = document.getElementById("current-wind-speed-5");


//makes defined variable available to global scope
var city;

//makes OpenWeather api key available
var apiKey = "9c6baa83d29531f20f93a51414d26bef";

//get city information from search field
function getCity() {
    //capture the city that is put into the search field
    city = searchInput.value
    console.log(city)
    // mdn docs for using fetch to call api 
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => getWeather(data));
}

//create a function to get the weather
function getWeather(cityInfo) {
    console.log(cityInfo[0])
    //declare variables for lat and lon info in order to use OpenWeather api
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
    var temp = Math.round(((forecast.current.temp - 273.15) * 9) / 5 + 32)

    var timeStamp = forecast.current.dt
    var milliseconds = timeStamp * 1000
    var dateObject = new Date(milliseconds)
    var dateFormat = dateObject.toLocaleString()
    dateFormat = dateFormat.split(",")
    var date = dateFormat[0]

    var humidity = forecast.current.humidity
    var wind = forecast.current.wind_speed
    var uv = forecast.current.uvi

    currentCity.innerText = `${city} - ${date}`

    // displays appropriate weather icon from OpenWeather weather icons api
    var icon = forecast.current.weather[0].icon
    var iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`
    weatherIcon.setAttribute("src", iconURL)

    //displays today's weather information
    currentTemp.innerText = temp
    currentHumidity.innerText = humidity
    currentWindSpeed.innerText = wind
    uvIndex.innerText = uv

    //displays day 1 icon
    var icon1 = forecast.daily[1].weather[0].icon
    var iconURL = `http://openweathermap.org/img/wn/${icon1}@2x.png`
    weatherIcon1.setAttribute("src", iconURL)

    //displays day 1 time
    var timeStamp1 = forecast.daily[1].dt
    var milliseconds1 = timeStamp1 * 1000
    var dateObject1 = new Date(milliseconds1)
    var dateFormat1 = dateObject1.toLocaleString()
    dateFormat1 = dateFormat1.split(",")
    var date1 = dateFormat1[0]
    currentDate1.innerText = `${date1}`
    
    //displays day 1 info
    var temp1 = Math.round(((forecast.daily[1].temp.max - 273.15) * 9) / 5 + 32)
    var humidity1 = forecast.daily[1].humidity
    var wind1 = forecast.daily[1].wind_speed

    currentTemp1.innerText = temp1
    currentHumidity1.innerText = humidity1
    currentWindSpeed1.innerText = wind1

    //displays day 2 icon
    var icon2 = forecast.daily[2].weather[0].icon
    var iconURL = `http://openweathermap.org/img/wn/${icon2}@2x.png`
    weatherIcon2.setAttribute("src", iconURL)

    //displays day 2 time
    var timeStamp2 = forecast.daily[2].dt
    var milliseconds2 = timeStamp2 * 1000
    var dateObject2 = new Date(milliseconds2)
    var dateFormat2 = dateObject2.toLocaleString()
    dateFormat2 = dateFormat2.split(",")
    var date2 = dateFormat2[0]
    currentDate2.innerText = `${date2}`

    //displays day 2 info
    var temp2 = Math.round(((forecast.daily[2].temp.max - 273.15) * 9) / 5 + 32)
    var humidity2 = forecast.daily[2].humidity
    var wind2 = forecast.daily[2].wind_speed

    currentTemp2.innerText = temp2
    currentHumidity2.innerText = humidity2
    currentWindSpeed2.innerText = wind2

    //displays day 3 icon
    var icon3 = forecast.daily[3].weather[0].icon
    var iconURL = `http://openweathermap.org/img/wn/${icon3}@2x.png`
    weatherIcon3.setAttribute("src", iconURL)

    //displays day 3 time
    var timeStamp3 = forecast.daily[3].dt
    var milliseconds3 = timeStamp3 * 1000
    var dateObject3 = new Date(milliseconds3)
    var dateFormat3 = dateObject3.toLocaleString()
    dateFormat3 = dateFormat3.split(",")
    var date3 = dateFormat3[0]
    currentDate3.innerText = `${date3}`

    //displays day 3 info
    var temp3 = Math.round(((forecast.daily[3].temp.max - 273.15) * 9) / 5 + 32)
    var humidity3 = forecast.daily[3].humidity
    var wind3 = forecast.daily[3].wind_speed

    currentTemp3.innerText = temp3
    currentHumidity3.innerText = humidity3
    currentWindSpeed3.innerText = wind3

    //displays day 4 icon
    var icon4 = forecast.daily[4].weather[0].icon
    var iconURL = `http://openweathermap.org/img/wn/${icon4}@2x.png`
    weatherIcon4.setAttribute("src", iconURL)

    //displays day 4 time
    var timeStamp4 = forecast.daily[4].dt
    var milliseconds4 = timeStamp4 * 1000
    var dateObject4 = new Date(milliseconds4)
    var dateFormat4 = dateObject4.toLocaleString()
    dateFormat4 = dateFormat4.split(",")
    var date4 = dateFormat4[0]
    currentDate4.innerText = `${date4}`

    //displays day 4 info
    var temp4 = Math.round(((forecast.daily[4].temp.max - 273.15) * 9) / 5 + 32)
    var humidity4 = forecast.daily[4].humidity
    var wind4 = forecast.daily[4].wind_speed

    currentTemp4.innerText = temp4
    currentHumidity4.innerText = humidity4
    currentWindSpeed4.innerText = wind4

    //displays day 5 icon
    var icon5 = forecast.daily[5].weather[0].icon
    var iconURL = `http://openweathermap.org/img/wn/${icon5}@2x.png`
    weatherIcon5.setAttribute("src", iconURL)

    //displays day 5 time
    var timeStamp5 = forecast.daily[5].dt
    var milliseconds5 = timeStamp5 * 1000
    var dateObject5 = new Date(milliseconds5)
    var dateFormat5 = dateObject5.toLocaleString()
    dateFormat5 = dateFormat5.split(",")
    var date5 = dateFormat5[0]
    currentDate5.innerText = `${date5}`

    //displays day 5 info
    var temp5 = Math.round(((forecast.daily[5].temp.max - 273.15) * 9) / 5 + 32)
    var humidity5 = forecast.daily[5].humidity
    var wind5 = forecast.daily[5].wind_speed

    currentTemp5.innerText = temp5
    currentHumidity5.innerText = humidity5
    currentWindSpeed5.innerText = wind5

    //remove the hide classes
    weatherContent.classList.remove("hide")
    //is this one working?
    searchInput.classList.remove("hide")
    //
}

//attach event listener to search button
searchButton.addEventListener("click", getCity);

//to do
//unhide search to be stored in local storage (check out attempt)
//store search results locally