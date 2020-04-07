function changeToUnpressed(button, forceShiftToggle = false) {
    /*  const shiftLeft = document.querySelector('.ShiftLeft');
     const shiftRight = document.querySelector('.ShiftRight'); */

    if (button.classList.contains('ShiftLeft') || button.classList.contains('ShiftRight') || forceShiftToggle) {
        document.querySelector('.ShiftLeft').classList.toggle('keyboard__button_activate');
        document.querySelector('.ShiftRight').classList.toggle('keyboard__button_activate');
    } else if (button.classList.contains('CapsLock')) {
        button.classList.toggle('keyboard__button_activate');
    } else {
        setTimeout(() => {
            button.classList.remove('active');
        }, 250);
    }
    return false;
}

export default changeToUnpressed;