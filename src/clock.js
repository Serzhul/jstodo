const clockContainer = document.querySelector('.js-clock'),
    clockTitle = clockContainer.querySelector('h1');

const getTime = () => {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes
    }:${seconds < 10 ? `0${seconds}` : seconds} `;
};

const initClock = () => {
    getTime();
    setInterval(getTime, 1000);
};

initClock();
