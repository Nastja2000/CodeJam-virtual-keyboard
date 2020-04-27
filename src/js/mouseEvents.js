import changeToPressed from './changeToPressed';


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
      if (!this.shiftPressed) this.handleShiftPressedEvent(button);
      else this.handleShiftUnpressedEvent(button);
      break;
    case 'CapsLock':
      changeToPressed(button, true);
      this.handleCapsLockEvent(button);
      break;
    case 'ArrowUp':
    case 'ArrowRight':
    case 'ArrowDown':
    case 'ArrowLeft':
      this.handleMoveCursorEvent(button);
      changeToPressed(button, true);
      changeToPressed(button, false);
      break;
    default:
      changeToPressed(button, true);
      changeToPressed(button, false);
      this.handleWriteSymbolEvent(button);
      if (this.shiftPressed) this.shiftUnpressedEvent(button);
      break;
  }

  return true;
}

export default mouseEvents;
