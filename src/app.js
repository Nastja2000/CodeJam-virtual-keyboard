
import createKeyboardView from './js/keyboardView';
import getLocalLanguage from './js/getLocalLanguage';
import * as keyPressed from './js/keyboardPressedEvents';
import changeToPressed from './js/changeToPressed';
import writeSymbol from './js/writeSymbol';
import mouseEvents from './js/mouseEvents';
import moveCursor from './js/moveCursor';


createKeyboardView();

const changeRegister = () => {
  document.querySelectorAll('.keyboard__button').forEach((button) => {
    button.childNodes.forEach((element) => {
      element.childNodes.forEach((item) => item.classList.toggle('on'));
    });
  });
};

// вот регулярка, что я составила, но она не сработала:(  -> !button.classList[0].match(/^[.]{1}[A-Z]{1}[a-z]{4}([-0-9=a-z]{0,1})?([a-z]{0,3})?$/

const changeLanguage = () => {
  const language = getLocalLanguage();
  if (language === 'en') localStorage.setItem('language', 'ru');
  else localStorage.setItem('language', 'en');
  document.querySelectorAll('.keyboard__button').forEach((button) => [...button.children].forEach((item) => item.classList.toggle('current')));
};


const keyboardContainer = document.querySelector('.keyboard-container');
keyboardContainer.shiftPressed = false;
keyboardContainer.capsLockPressed = false;
keyboardContainer.shiftPressedByMouse = false;
keyboardContainer.pressedButton = new Set();

const textarea = document.querySelector('.textarea');
textarea.addEventListener('keydown', keyPressed.default.keyboardPressedEvents.bind(keyboardContainer));
textarea.addEventListener('keyup', keyPressed.default.keyboardUnpressedEvents.bind(keyboardContainer));
textarea.addEventListener('blur', () => textarea.focus());

keyboardContainer.handleChangeLanguageEvent = function handleChangeLanguageEvent() {
  changeLanguage();
};

keyboardContainer.handleShiftPressedEvent = function handleShiftPressedEvent(button) {
  if (this.shiftPressed) return false;
  this.shiftPressed = true;
  changeRegister();
  changeToPressed(button, true);
  return true;
};

keyboardContainer.handleShiftUnpressedEvent = function handleShiftUnpressedEvent(button, forceShiftToggle = false) {
  if (!this.shiftPressed) return false;
  this.shiftPressed = false;
  this.shiftPressedByMouse = false;
  changeRegister();
  changeToPressed(button, true, forceShiftToggle);
  return true;
};

keyboardContainer.handleCapsLockEvent = function handleCapsLockEvent() {
  this.capsLockPressed = !this.capsLockPressed;
  changeRegister();
  return true;
};

keyboardContainer.addEventListener('mousedown', mouseEvents.bind(keyboardContainer));

keyboardContainer.handleWriteSymbolEvent = function handleWriteSymbolEvent(button) {
  writeSymbol(button, textarea);
  if (this.shiftPressedByMouse) {
    this.handleShiftUnpressedEvent(button, true);
  }
  return true;
};

keyboardContainer.handleMoveCursorEvent = function handleMoveCursorEvent(button) {
  moveCursor(button);
};
