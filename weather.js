function returnCity(){
   city = document.getElementById("userInput").value;
   alert("userInput");
}
 
function getweather(city) { 
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city "&appid=482d2f31dc8b7beafbff108ae04a732");
        .then(response) => response.json(); /* package response as json*/
        .then(data) => console.log(data); /* rest API*/
    }
}

/* take a location and return the weather data for that location*/
/*set up a form that lets users input their location and fetches above info*/
function weatherdisplay(data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    alert(name, icon, description, temp, humidity, speed);
}
