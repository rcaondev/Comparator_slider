let isClicked = false;

const image = document.querySelector('.compare__overlay');
const width = image.offsetWidth;
const height = image.offsetHeight;
const slider = document.createElement('div');
compare( );

function compare() {
    image.parentElement.insertBefore(slider, image);

    slider.classList.add('compare__slider');
    slider.style.top = (height / 2) - (slider.offsetHeight / 2) + 'px';
    slider.style.left = (width / 2) - (slider.offsetWidth / 2) + 'px';
    image.style.width = '50%';

    slider.addEventListener('mousedown', onSlideStart);
    slider.addEventListener('touchstart', onSlideStart);

    window.addEventListener('mouseup', () => isClicked = false);
    window.addEventListener('touchstop', () => isClicked = false);

    window.addEventListener('mousemove', onSlideMove);
    window.addEventListener('touchmove', onSlideMove);
}

function onSlideStart(event) {
    event.preventDefault();
    isClicked = true;
}
function onSlideMove(event) {
    if (!isClicked) return;
    doSlide(currentPosition(event));
}
function currentPosition(event = window.event){
    let xImage = image.getBoundingClientRect();
    let x = 0;

    x = event.pageX - xImage.left;

    if (x < 0) x = 0;
    if (x > width) x = width;

    return x;
}
function doSlide(x) {
    image.style.width = x + 'px';
    slider.style.left = image.offsetWidth - (slider.offsetWidth / 2) + 'px';
}