const IMG_NUMBER = 3;

const paintImage = (imgNumber) => {
    const image = new Image();
    image.src = `/src/images/${imgNumber + 1}.jfif`;
    image.classList.add('bgImage');
    document.querySelector('body').appendChild(image);
};

const getRandom = () => Math.floor(Math.random() * IMG_NUMBER);

const initBG = () => {
    paintImage(getRandom());
};

initBG();
