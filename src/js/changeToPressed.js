export default function changeToPressed(button, pressed, forceShiftToggle = false) {
  const shiftLeft = document.querySelector('.ShiftLeft');
  const shiftRight = document.querySelector('.ShiftRight');

  if (button.classList.contains('ShiftLeft') || button.classList.contains('ShiftRight') || forceShiftToggle) {
    shiftLeft.classList.toggle('keyboard__button_activate');
    shiftRight.classList.toggle('keyboard__button_activate');
  } else if (button.classList.contains('CapsLock')) {
    button.classList.toggle('keyboard__button_activate');
  } else if (pressed) button.classList.add('active');
  else {
    setTimeout(() => {
      button.classList.remove('active');
    }, 250);
  }
  return false;
}
