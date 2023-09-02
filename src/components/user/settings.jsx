// controll setting open / close
export function setting () {
    var clientRectangle = document.getElementById("setting-icon").getBoundingClientRect();
    const top = clientRectangle.top + 55;
    const left = clientRectangle.left - 155;

    const controll = document.querySelector('.close')
    if(controll) {
        controll.classList.remove('close')
        controll.classList.add('open')
        const style = 'display: block; top: ' + top + 'px;left: ' + left + 'px;';
        document.getElementById('setting-menu').style = style;
    }
    else {
        document.querySelector('.open').classList.add('close')
        document.querySelector('.open').classList.remove('open')
        const style = 'display: none';
        document.getElementById('setting-menu').style = style;
    }
}