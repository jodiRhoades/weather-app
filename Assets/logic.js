var authKey = "226f834d9dfda6f6ca07f24bb876b82d"

//SEARCH PARAMETERS
//var city=""

var queryUrl = "https://api.openweathermap.org/data/2.5/weather?id=524901&APPID=" + authKey;

//FUNCTIONS
function runQuery(queryUrl) {
    $.ajax({ url: queryUrl, method: "GET" })
        .then(function (weatherData) {
            console.log(queryUrl);
            console.log(weatherData);
            var div = $('<div>')
            div.addClass('card mb-1 p-3')
            var city = $('<h2>')
            console.log(weatherData.name)
            city.text(weatherData.name + " (" + moment().format('l') + ")")
            var icon = $("<img>")
            icon.attr("src", "https://openweathermap.org/img/wn/" + weatherData.weather[0].icon + ".png")
            icon.attr("alt", "icon")
            city.append(icon)
            var humidity = $('<div>').text('Humidity: ' + weatherData.main.humidity + '%')

            var wind = $('<div>').text("Wind Speed: " + weatherData.wind.speed + 'mph')
            var temp = $('<div>')
            temp.text('Tempature: ' + weatherData.main.temp + "°F")
            div.append(city, temp, humidity, wind)
            $('#weatherData').append(div)

        })
        .catch((err) => {
            if (err) throw err
        })
}
//on the search button onclick have the city requested populate in the field to the right
$('#btnsearch').on('click', function (event) {
    event.preventDefault()
    var theCity = $('#city').val()
    runQuery("https://api.openweathermap.org/data/2.5/weather?q=" + theCity + "&units=imperial&APPID=226f834d9dfda6f6ca07f24bb876b82d");

    //return false;
})


//MAIN PROCESSES

//data to be pulled from open weather: Do AJAX

   //* City

  //* Date

  //* Icon image (visual representation of weather conditions)

  //* Temperature

  //* Humidity

  //* Wind speed

//Have each city remain on the search page and clickable for them to re-check(localStorage)




//1. Retreive user inputs and convert to variables
//2. Use those variables to run AJAX call to the Open Weather
//3. Break down the weather object into useable fields
//4. Dynamically generate html content

