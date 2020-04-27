import changeToPressed from './changeToPressed';

function keyboardPressedEvents(key) {
  const keyCode = `.${key.code}`;
  const button = document.querySelector(keyCode);

  switch (key.code) {
    case 'CapsLock':
      changeToPressed(button, true);
      this.handleCapsLockEvent();
      break;
    case 'ShiftLeft':
    case 'ShiftRight':
      this.handleShiftPressedEvent(button);
      break;

    case 'ArrowUp':
    case 'ArrowRight':
    case 'ArrowDown':
    case 'ArrowLeft':
      changeToPressed(button, true);
      changeToPressed(button, false);
      this.handleMoveCursorEvent(button);
      break;
    default:
      changeToPressed(button, true);
      this.handleWriteSymbolEvent(button);
      break;
  }

  this.pressedButton.add(key.code);
  if (this.pressedButton.has('ShiftLeft') && this.pressedButton.has('AltLeft')) this.handleChangeLanguageEvent();
  key.preventDefault();
}

function keyboardUnpressedEvents(key) {
  const keyCode = `.${key.code}`;
  const button = document.querySelector(keyCode);
  switch (key.code) {
    case 'ShiftLeft':
    case 'ShiftRight':
      this.handleShiftUnpressedEvent(button);
      break;
    default:
      changeToPressed(button, false);
      break;
  }
  this.pressedButton.delete(key.code);
}


export default { keyboardPressedEvents, keyboardUnpressedEvents };
