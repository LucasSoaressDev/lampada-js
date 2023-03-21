const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1;
}

function lampOn() {
    if (!isLampBroken()) {
        lamp.src = './image/acessa.png'
    }
}


function lampOff() {
    if (!isLampBroken()) {
        lamp.src = './image/lampada.png'
    }




}

function lampBroken() {
    lamp.src = './image/queebrada.jpg'
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);

lamp.addEventListener('dblclick', lampBroken);

