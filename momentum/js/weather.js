const API_KEY = "26c3593a91d863a5f810ee72e1e9398b"

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:last-child");
            const city = document.querySelector("#weather span:first-child");
            city.innerText = data.name;
            weather.innerText = `\n${data.weather[0].main} / ${data.main.temp}`;

    });

}

function onGeoFail() {
    alert("Cannot find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess,onGeoFail);