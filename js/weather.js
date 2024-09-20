const API_KEY = "4a9a2de86defcf6415366cf6a19d2250";

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in ", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    console.log(url);
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const city = document.querySelector("#weather span:first-child");
            const forecast = document.querySelector(
                "#weather span:nth-child(2)"
            );
            city.innerText = data.name;
            forecast.innerText = data.weather[0].main;
        });
}
function onGeoError() {
    alert("Can't find you!");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
