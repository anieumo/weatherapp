function returnCity(){
    if (document.getElementById("userInput").value.length === 0) {
        alert("userInput")
    } else {
        city = document.getElementById("userInput").value;
    }
    // city = document.getElementById("userInput").value;
    // alert("userInput");
}
 
// function getweather(city) { 
//         fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=482d2f31dc8b7beafbff108ae04a732")
//         .then(response) => {
//             if (!response.ok) {
//                 alert("No weather found")
//                 throw new Error("no weather found")
//             }
//             response.json()
//         }
//         .then(data) => weatherdisplay(); /* rest API*/

//         fetch("https://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&cnt=" + 7 + "&appid=482d2f31dc8b7beafbff108ae04a732")
// }

/* take a location and return the weather data for that location*/
/*set up a form that lets users input their location and fetches above info*/
// function weatherdisplay(data) {
//     const { name } = data;
//     const { icon, description } = data.weather[0];
//     const { temp, humidity } = data.main;
//     const { speed } = data.wind;
//     console.log(name, icon, description, temp, humidity, speed);

//     document.getElementById("city").innerText = "Weather in " + name;
//     document.getElementById("temp").innerText = temp + "°C";
//     document.getElementById("description").innerText = description;
//     document.getElementById("humidity").innerText = humidity;
//     document.getElementById("wind").innerText = speed;

// }
