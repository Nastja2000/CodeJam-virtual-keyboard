function changeToPressed(button, forceShiftToggle = false) {
    const shiftLeft = document.querySelector('.ShiftLeft');
    const shiftRight = document.querySelector('.ShiftRight');

    if (button.classList.contains('ShiftLeft') || button.classList.contains('ShiftLeft') || forceShiftToggle) {
        shiftLeft.classList.toggle('keyboard__button_activate');
        shiftRight.classList.toggle('keyboard__button_activate');
    } else if (button.classList.contains('CapsLock')) {
        button.classList.toggle('keyboard__button_activate');
    } else {
        button.classList.add('active');
    }
    return false;
}

function keyboardPressedEvents(key) {
    const keyCode = `.${key.code}`;
    const button = document.querySelector(keyCode);

    switch (key.code) {
        case 'CapsLock':
            changeToPressed(button);
            this.capsLockEvent(button);
            break;
        case 'ShiftLeft':
        case 'ShiftRight':
            changeToPressed(button);
            this.shiftPressedEvent(button);
            break;

        case 'ArrowUp':
        case 'ArrowRight':
        case 'ArrowDown':
        case 'ArrowLeft':
            this.moveCursorEvent(button);
            break;
        default:
            changeToPressed(button);
            this.writeSymbolEvent(button);
            break;
    }

    this.pressedButton.add(key.code);
    if (this.pressedButton.has('ShiftLeft') && this.pressedButton.has('AltLeft')) this.changeLanguageEvent();
    key.preventDefault();
}



export default { keyboardPressedEvents, changeToPressed };