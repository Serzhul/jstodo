const weather = document.querySelector('.js-weather');

const API_KEY = '097682fb274662ff0d5a73a5a002eb5f';
const COORDS = 'coords';

const getWeather = (lat, lon) => {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    )
        .then((res) => res.json())
        .then((data) => {
            const temperature = data.main.temp;
            const place = data.name;
            weather.innerText = `${temperature} @ ${place}`;
        });
};

const saveCoords = (coordsObj) => {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
};

const handleGeoSuccess = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude,
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
};

const handleGeoError = () => {
    console.log("Can't access geo location");
};

const askForCoords = () => {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
};

const loadCoords = () => {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
};

const initWeather = () => {
    loadCoords();
};

initWeather();
