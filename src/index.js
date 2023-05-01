const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ]

const refs = {
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]'),
    body: document.querySelector('body'),
}

let index = undefined;
let colorChanger = undefined;

refs.stopBtn.hidden = true;
refs.startBtn.addEventListener('click', onClickStart);
refs.stopBtn.addEventListener('click', onClickStop);

function onClickStart() {
    refs.startBtn.hidden = true;
    refs.stopBtn.hidden = false;
    colorChanger = setInterval(changeBackgroundColor, 1000);
}

function onClickStop() {
    refs.startBtn.hidden = false;
    refs.stopBtn.hidden = true;
    clearInterval(colorChanger);
    refs.body.style.backgroundColor = '';
}

function changeBackgroundColor() {
    index = Math.floor(Math.random() * colors.length);
    refs.body.style.backgroundColor = colors[index];
}