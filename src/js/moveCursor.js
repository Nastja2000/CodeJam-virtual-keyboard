function moveCursor(button) {

    const textarea = document.querySelector('.textarea');
    const currentPosition = textarea.selectionStart;
    if (button.classList.contains('ArrowLeft')) {
        document.getSelection().removeAllRanges();
        if (currentPosition !== 0) textarea.setSelectionRange(currentPosition - 1, currentPosition - 1);
    }
    if (button.classList.contains('ArrowRight')) {

        if (currentPosition !== 0) textarea.setSelectionRange(currentPosition + 1, currentPosition + 1);
    }
    if (button.classList.contains('ArrowUp')) {
        const maxSize = 100;
        let offsetX = 0;
        let lengthBehindPosition = 0;
        let i = currentPosition;
        if (textarea.value[i] === '\n') i -= 1;
        while (textarea.value[i] !== '\n' && i >= 0) {
            offsetX += 1;
            i -= 1;
        }

        if (textarea.value[i] === '\n') offsetX -= 1;
        if (offsetX >= maxSize) {
            textarea.setSelectionRange(currentPosition - maxSize, currentPosition - maxSize);
            return true;
        }
        i -= 1;
        while (textarea.value[i] !== '\n' && i >= 0) {
            lengthBehindPosition += 1;
            i -= 1;
        }

        lengthBehindPosition %= maxSize;
        if (offsetX >= lengthBehindPosition) {
            if (textarea.value[i] === '\n') offsetX += 1;

            textarea.setSelectionRange(currentPosition - offsetX - 1, currentPosition - offsetX - 1);
            return true;
        }
        if (offsetX < lengthBehindPosition) {
            textarea.setSelectionRange(currentPosition - lengthBehindPosition - 1, currentPosition - lengthBehindPosition - 1);
            return true;
        }
    }
    if (button.classList.contains('ArrowDown')) {
        const maxSize = 100;
        let offsetLeft = 0;
        let offsetRight = 0;
        let lengthInFrontOfPosition = 0;
        let i = currentPosition;
        if (textarea.value[i] === '\n') { i -= 1; }
        while (textarea.value[i] !== '\n' && i >= 0) {
            offsetLeft += 1;
            i -= 1;
        }
        if (textarea.value[i] === '\n' || i < 0) {
            offsetLeft -= 1;
        }
        i = currentPosition;

        while (textarea.value[i] !== '\n' && i < textarea.value.length) {
            offsetRight += 1;
            i += 1;
        }
        offsetLeft %= maxSize;

        if ((offsetLeft + offsetRight) > maxSize) {
            if ((offsetLeft + offsetRight) % maxSize <= offsetLeft) {
                textarea.setSelectionRange(currentPosition + offsetRight, currentPosition + offsetRight);
                return true;
            }
            textarea.setSelectionRange(currentPosition + maxSize, currentPosition + maxSize);
            return true;
        }
        if (textarea.value[i] === '\n') i += 1;
        while (textarea.value[i] !== '\n' && i < textarea.value.length) {
            lengthInFrontOfPosition += 1;
            i += 1;
        }

        if (offsetLeft <= lengthInFrontOfPosition) {
            textarea.setSelectionRange(currentPosition + offsetLeft + offsetRight + 1,
                currentPosition + offsetLeft + offsetRight + 1);
            return true;
        }
        if (offsetLeft > lengthInFrontOfPosition) {
            textarea.setSelectionRange(currentPosition + lengthInFrontOfPosition + offsetRight + 1,
                currentPosition + lengthInFrontOfPosition + offsetRight + 1);
            return true;
        }
    }
    return true;
}

export default moveCursor;