
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace('px', '');
        const left = parseInt(leftNumbers, 10);

        if (left > 0) {
        dodger.style.left = `${left - 4}px`;
    }
}
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumbers, 10);

    if (left < 360) {
        dodger.style.left = `${left + 4}px`;
    }
}
function moveDodgerUp() {
    const bottomNumbers = dodger.style.bottom.replace('px', '');
    const bottom = parseInt(bottomNumbers, 10);

    if (bottom < 380) {
        dodger.style.bottom = `${bottom + 2}px`;
    }
}
function moveDodgerDown() {
    const bottomNumbers = dodger.style.bottom.replace('px', '');
    const bottom = parseInt(bottomNumbers, 10);

    if (bottom > 0) {
        dodger.style.bottom = `${bottom - 2}px`;
    }
}
function jumpToTop() {
    dodger.style.bottom = '380px';
}
function jumpToBottom() {
    dodger.style.bottom = '0px';
}
function jumpLeft() {
    dodger.style.left = '0px';
}
function jumpRight() {
    dodger.style.left = '360px';
}
function jumpToCenter() {
    dodger.style.left = '180px';
    dodger.style.bottom = '190px';

}
function red() {
    dodger.style.backgroundColor = 'red';
}
function blue() {
    dodger.style.backgroundColor = 'blue';
}
function yellow() {
    dodger.style.backgroundColor = 'yellow';
}
function green() {
    dodger.style.backgroundColor = 'green';
}
function tomato() {
    dodger.style.backgroundColor = 'tomato';
}
function dodgerBlue() {
    dodger.style.backgroundColor = 'dodgerBlue';
}
function gold() {
    dodger.style.backgroundColor = 'gold';
}
document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') {
        moveDodgerLeft();
    } else if (event.key === 'ArrowRight') {
        moveDodgerRight();
    } else if (event.key === 'ArrowUp') {
        moveDodgerUp();
    } else if (event.key === 'ArrowDown') {
        moveDodgerDown();
    } else if (event.key === 't') {
        jumpToTop();
    } else if (event.key === 'b') {
        console.log('i hear you');
        jumpToBottom();
    } else if (event.key === 'a') {
        jumpLeft();
    } else if (event.key === 'l') {
        jumpRight();
    } else if (event.key === ' ') {
        jumpToCenter();
    } else if (event.key === '1') {
        red();
    } else if (event.key === '2') {
        blue();
    } else if (event.key === '3') {
        yellow();
    } else if (event.key === '4') {
        green();
    } else if (event.key === '5') {
        tomato();
    } else if (event.key === '6') {
        dodgerBlue();
    } else if (event.key === '7') {
        gold();
    } else { 
        console.log(`The ${event.key} button has no function`);
    }
});

