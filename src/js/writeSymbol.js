function writeSymbol(button, textarea) {
    const inputArea = textarea;
    let currentSymbol = '';
    let codeOfButton = '';
    let valueOfSymbol = '';

    [currentSymbol] = [...button.children].filter((element) => element.matches('.current'));
    [, codeOfButton] = button.classList;
    valueOfSymbol = currentSymbol.innerText;
    switch (codeOfButton) {
        case 'Space':
            inputArea.setRangeText(' ', inputArea.selectionStart, inputArea.selectionEnd, 'end');
            break;
        case 'Tab':
            inputArea.setRangeText('\t', inputArea.selectionStart, inputArea.selectionEnd, 'end');
            break;
        case 'Backspace':
            if (inputArea.value === 0) inputArea.setRangeText('', inputArea.selectionStart, inputArea.selectionEnd, 'end');
            else if (inputArea.value > 0) inputArea.setRangeText('', inputArea.selectionStart - 1, inputArea.selectionEnd, 'end');
            break;
        case 'Enter':
            inputArea.setRangeText('\n', inputArea.selectionStart, inputArea.selectionEnd, 'end');
            break;
        case 'ShiftLeft':
        case 'ShiftRight':
        case 'ControlLeft':
        case 'ControlRight':
        case 'AltLeft':
        case 'AltRight':
        case 'OSLeft':
        case 'ArrowLeft':
        case 'ArrowRight':
        case 'ArrowUp':
        case 'ArrowDown':
            inputArea.value += '';
            break;
        default:
            inputArea.setRangeText(valueOfSymbol, inputArea.selectionStart, inputArea.selectionEnd, 'end');
            break;
    }
}

export default writeSymbol;