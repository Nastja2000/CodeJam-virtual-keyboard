function changeToPressed(button, forceShiftToggle = false) {
    /*  const shiftLeft = document.querySelector('.ShiftLeft');
     const shiftRight = document.querySelector('.ShiftRight'); */

    if (button.classList.contains('ShiftLeft') || button.classList.contains('ShiftRight') || forceShiftToggle) {
        document.querySelector('.ShiftLeft').classList.toggle('keyboard__button_activate');
        document.querySelector('.ShiftRight').classList.toggle('keyboard__button_activate');
    } else if (button.classList.contains('CapsLock')) {
        button.classList.toggle('keyboard__button_activate');
    } else {
        button.classList.add('active');
    }
    return false;
}

export default changeToPressed;