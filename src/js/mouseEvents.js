import changeToPressed from './keyboardPressedEvents';
import changeToUnpressed from './keyboardUnpressedEvents';

function mouseEvents(event) {
    let button = event.target;
    let codeOfButton = '';

    if (event.target.classList.contains('keyboard__button')) button = event.target;
    else if (event.target.classList.contains('on')) button = event.target.parentNode.parentNode;
    else return false;

    [, codeOfButton] = button.classList;

    switch (codeOfButton) {
        case 'ShiftLeft':
        case 'ShiftRight':
            this.shiftPressedByMouse = true;
            if (!this.shiftPressed) this.shiftPressedEvent(button);
            this.shiftUnpressedEvent(button);
            break;
        case 'CapsLock':
            changeToPressed(button);
            this.capsLockEvent(button);
            break;
        case 'ArrowUp':
        case 'ArrowRight':
        case 'ArrowDown':
        case 'ArrowLeft':
            this.moveCursorEvent(button);
            break;
        default:
            changeToPressed(button);
            changeToUnpressed(button);
            this.writeSymbolEvent(button);
            if (!this.shiftPressed) this.shiftUnpressedEvent(button);
            break;
    }
    return true;
}

export default mouseEvents;