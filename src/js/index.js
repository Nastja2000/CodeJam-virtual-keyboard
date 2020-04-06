// main actions  with keyboard will be there
import createKeyboardView from './keyboardView';
import keyboardPressedEvents from './keyboardPressedEvents';
import keyboardUnpressedEvents from './keyboardUnpressedEvents';

createKeyboardView();

const keyboardContainer = document.querySelector('.keyboard-container');
keyboardContainer.shiftPressed = false;
keyboardContainer.capsLockPressed = false;
keyboardContainer.pressedButton = new Set();


keyboardPressedEvents();
keyboardUnpressedEvents();