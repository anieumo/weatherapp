
function myFunction() {
    var x = document.getElementById("userInput").value;
    async function getWeather() {
        const response =
        await fetch("https://api.openweathermap.org/data/2.5/weather?q="
        + x
        + "&appid=482d2f31dc8b7beafbff108ae04a732b", {mode: 'cors'})
        const myData = await response.json()
                console.log(myData)
                displayWeather(myData)

            }
        getWeather()
        } 

//append d

function displayWeather(myData) {
    
    const city = myData.name;
    const  cityDiv = document.getElementById("city");
    cityDiv.innerHTML = city;


    const temp = Math.round(myData.main.feels_like - 273.15);
    const  tempDiv = document.getElementById("temp");
    tempDiv.innerHTML = temp + "°C";


    const description = myData.weather[0].description;
    const  descriptionDiv = document.getElementById("description");
    descriptionDiv.innerHTML = description;


    const humidity = myData.main.humidity;
    const  humidityDiv = document.getElementById("humidity");
    humidityDiv.innerHTML = "humidity: " + humidity + "%";


    const wind = myData.wind.speed;
    const  windDiv = document.getElementById("wind");
    windDiv.innerHTML = "windspeed: " + wind + "mph";
}