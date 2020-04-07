// main actions  with keyboard will be there
import createKeyboardView from './keyboardView';
import getLocalLanguage from './keyboardView';
import keyboardPressedEvents from './keyboardPressedEvents';
import changeToPressed from './keyboardPressedEvents';
import changeToUnpressed from './keyboardUnpressedEvents';
import keyboardUnpressedEvents from './keyboardUnpressedEvents';
import writeSymbol from './writeSymbol';
import mouseEvents from './mouseEvents';
import moveCursor from './moveCursor';


createKeyboardView();

const changeRegister = () => {
    document.querySelectorAll('.keyboard__button').forEach((button) => {
        button.childNodes.forEach((element) => element.childNodes.forEach((item) => item.classList.toggle('on')));
    });
};

const changeLanguage = () => {
    const language = getLocalLanguage();
    if (language === 'en') localStorage.setItem('language', 'ru');
    else localStorage.setItem('language', 'en');
    document.querySelectorAll('.keyboard__button').forEach((button) => [...button.children].forEach((item) => item.classList.toggle('current')));
};

const keyboardContainer = document.querySelector('.keyboard-container');
keyboardContainer.shiftPressed = false;
keyboardContainer.capsLockPressed = false;
keyboardContainer.pressedButton = new Set();


keyboardContainer.shiftPressedEvent = function shiftPressedEvent(button) {
    if (this.shiftPressed) return false;
    this.shiftPressed = true;
    changeRegister();
    changeToPressed(button);
    return true;
};

keyboardContainer.shiftUnpressedEvent = function shiftUnpressedEvent(button) {
    if (!this.shiftPressed) return false;
    this.shiftPressed = false;
    changeRegister();
    changeToUnpressed(button);
    return true;
};

keyboardContainer.capsLockEvent = function capsLockEvent(button) {
    if (this.capsLockPressed) return false;
    this.capsLockPressed = true;
    changeRegister();
    return true;
};

keyboardContainer.changeLanguageEvent = function changeLanguageEvent() {
    changeLanguage();
};

const textarea = document.querySelector('.textarea');
textarea.addEventListener('keydown', keyboardPressedEvents.bind(keyboardContainer));
textarea.addEventListener('keyup', keyboardUnpressedEvents.bind(keyboardContainer));
textarea.addEventListener('blur', () => textarea.focus());

keyboardContainer.addEventListener('mousedown', mouseEvents.bind(keyboardContainer));

keyboardContainer.writeSymbolEvent = function writeSymbolEvent(button) {
    writeSymbol(button, textarea);
    if (this.shiftPressedByMouse) {
        this.shiftUnpressedEvent(button, true);
    }
    return true;
};

keyboardContainer.moveCursorEvent = function moveCursorEvent(button) {
    moveCursor(button);
};