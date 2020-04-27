import changeToPressed from './changeToPressed';

function keyboardPressedEvents(key) {
  const keyCode = `.${key.code}`;
  const button = document.querySelector(keyCode);

  switch (key.code) {
    case 'CapsLock':
      changeToPressed(button, true);
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
      changeToPressed(button, true);
      changeToPressed(button, false);
      this.moveCursorEvent(button);
      break;
    default:
      changeToPressed(button, true);
      this.writeSymbolEvent(button);
      break;
  }

  this.pressedButton.add(key.code);
  if (this.pressedButton.has('ShiftLeft') && this.pressedButton.has('AltLeft')) this.changeLanguageEvent();
  key.preventDefault();
}

function keyboardUnpressedEvents(key) {
  const keyCode = `.${key.code}`;
  const button = document.querySelector(keyCode);
  switch (key.code) {
    case 'ShiftLeft':
    case 'ShiftRight':
      this.shiftUnpressedEvent(button);
      break;
    default:
      changeToPressed(button, false);
      break;
  }
  this.pressedButton.delete(key.code);
}


export default { keyboardPressedEvents, keyboardUnpressedEvents };
