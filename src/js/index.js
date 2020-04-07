// main actions  with keyboard will be there
import createKeyboardView from './keyboardView';
import getLocalLanguage from './getLocalLanguage';
import keyboardPressedEvents from './keyboardPressedEvents';
import changeToPressed from './changeToPressed';
import changeToUnpressed from './changeToUnpressed';
import keyboardUnpressedEvents from './keyboardUnpressedEvents';
import writeSymbol from './writeSymbol';
import mouseEvents from './mouseEvents';
import moveCursor from './moveCursor';


createKeyboardView();

const changeRegister = () => {

    document.querySelectorAll('.keyboard__button').forEach((button) => {
        button.childNodes.forEach((element) => {
            console.log(element);
            element.childNodes.forEach((item) => item.classList.toggle('on'))
        });

    });
};


const changeRegisterByCapsLock = () => {

    document.querySelectorAll('.keyboard__button').forEach((button) => {
        if (!button.matches('.Digit0') && !button.matches('.Digit1') &&
            !button.matches('.Digit2') && !button.matches('.Digit3') &&
            !button.matches('.Digit4') && !button.matches('.Digit5') &&
            !button.matches('.Digit6') && !button.matches('.Digit7') &&
            !button.matches('.Digit8') && !button.matches('.Digit9') &&
            !button.matches('.Digit-') && !button.classList.contains('Equal=') &&
            !button.matches('.Backslash') && !button.matches('.Slash')) {
            button.childNodes.forEach((element) => {
                console.log(element);
                element.childNodes.forEach((item) => item.classList.toggle('on'))
            });
        }
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

keyboardContainer.capsLockEvent = function capsLockEvent() {
    this.capsLockPressed = !this.capsLockPressed;
    changeRegisterByCapsLock();
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