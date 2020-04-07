import changeToPressed from './changeToPressed';

function keyboardPressedEvents(key) {
    const keyCode = `.${key.code}`;
    const button = document.querySelector(keyCode);

    switch (key.code) {
        case 'CapsLock':
            changeToPressed(button);
            this.capsLockEvent();
            break;
        case 'ShiftLeft':
        case 'ShiftRight':
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



export default keyboardPressedEvents;