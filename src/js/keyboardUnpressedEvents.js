import changeToUnpressed from './changeToUnpressed';

function keyboardUnpressedEvents(key) {
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

export default keyboardUnpressedEvents;