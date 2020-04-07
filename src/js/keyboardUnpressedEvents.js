const changeToUnpressed = (button) => {
    const shiftLeft = document.querySelector('.ShiftLeft');
    const shiftRight = document.querySelector('.ShiftRight');

    if (button.classList.contains('ShiftLeft') || button.classList.contains('ShiftLeft')) {
        shiftLeft.classList.toggle('keyboard__button_activate');
        shiftRight.classList.toggle('keyboard__button_activate');
    } else if (button.classList.contains('CapsLock')) {
        button.classList.toggle('keyboard__button_activate');
    } else {
        button.classList.remove('active');
        // SetTimeout ?
    }
    return false;
}


const keyboardUnpressedEvents = (key) => {
    const keyCode = `.${key.code}`;
    const button = document.querySelector(keyCode);
    switch (key.code) {
        case 'ShiftLeft':
        case 'ShiftRight':
            this.shiftUnpressedEvent(button);
            break;
        default:
            changeToUnpressed(button);
            break;
    }
    this.pressedButton.delete(key.code);
}

export default { changeToUnpressed, keyboardUnpressedEvents };