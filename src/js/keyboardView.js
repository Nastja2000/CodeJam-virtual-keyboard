import generateDomElement from './generalFunctions';

const buttonsLayout = [
    [
        ['Backquote', 'ё', 'Ё', '`', '~'],
        ['Digit1', '1', '!', '1', '!'],
        ['Digit2', '2', '"', '2', '@'],
        ['Digit3', '3', '№', '3', '#'],
        ['Digit4', '4', ';', '4', '$'],
        ['Digit5', '5', '%', '5', '%'],
        ['Digit6', '6', ':', '6', '^'],
        ['Digit7', '7', '?', '7', '&'],
        ['Digit8', '8', '*', '8', '*'],
        ['Digit9', '9', '(', '9', '('],
        ['Digit0', '0', ')', '0', ')'],
        ['Digit-', '-', '_', '-', '_'],
        ['Equal=', '=', '+', '=', '+'],
        ['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace'],
    ],
    [
        ['Tab', 'Tab', 'Tab', 'Tab', 'Tab'],
        ['KeyQ', 'й', 'Й', 'q', 'Q'],
        ['KeyW', 'ц', 'Ц', 'w', 'W'],
        ['KeyE', 'у', 'У', 'e', 'E'],
        ['KeyR', 'к', 'К', 'r', 'R'],
        ['KeyT', 'е', 'Е', 't', 'T'],
        ['KeyY', 'н', 'Н', 'y', 'Y'],
        ['KeyU', 'г', 'Г', 'u', 'U'],
        ['KeyI', 'ш', 'Ш', 'i', 'I'],
        ['KeyO', 'щ', 'Щ', 'o', 'O'],
        ['KeyP', 'з', 'З', 'p', 'P'],
        ['BracketLeft', 'х', 'Х', '[', '{'],
        ['BracketRight', 'ъ', 'Ъ', ']', '}'],
        ['Backslash', '\\', '/', '\\', '|'],
    ],
    [
        ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'],
        ['KeyA', 'ф', 'Ф', 'a', 'A'],
        ['KeyS', 'ы', 'Ы', 's', 'S'],
        ['KeyD', 'в', 'В', 'd', 'D'],
        ['KeyF', 'а', 'А', 'f', 'F'],
        ['KeyG', 'п', 'П', 'g', 'G'],
        ['KeyH', 'р', 'Р', 'h', 'H'],
        ['KeyJ', 'о', 'О', 'j', 'J'],
        ['KeyK', 'л', 'Л', 'k', 'K'],
        ['KeyL', 'д', 'Д', 'l', 'L'],
        ['Semicolon', 'ж', 'Ж', ';', ':'],
        ['Quote', 'э', 'Э', '\'', '"'],
        ['Enter', 'Enter', 'Enter', 'Enter', 'Enter'],
    ],

    [
        ['ShiftLeft', 'Shift', 'Shift', 'Shift', 'Shift'],
        ['KeyZ', 'я', 'Я', 'z', 'Z'],
        ['KeyX', 'ч', 'Ч', 'x', 'X'],
        ['KeyC', 'с', 'С', 'c', 'C'],
        ['KeyV', 'м', 'М', 'v', 'V'],
        ['KeyB', 'и', 'И', 'b', 'B'],
        ['KeyN', 'т', 'Т', 'n', 'N'],
        ['KeyM', 'ь', 'Ь', 'm', 'M'],
        ['Comma', 'б', 'Б', ',', '<'],
        ['Period', 'ю', 'Ю', '.', '>'],
        ['Slash', '.', ',', '/', '?'],
        ['ArrowUp', String.fromCharCode(8593), String.fromCharCode(8593), String.fromCharCode(8593), String.fromCharCode(8593)],
        ['ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift'],
    ],
    [
        ['ControlLeft', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
        ['OSLeft', 'Win', 'Win', 'Win', 'Win'],
        ['AltLeft', 'Alt', 'Alt', 'Alt', 'Alt'],
        ['Space', 'Space', 'Space', 'Space', 'Space'],
        ['AltRight', 'Alt', 'Alt', 'Alt', 'Alt'],
        ['ControlRight', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
        ['ArrowLeft', String.fromCharCode(8592), String.fromCharCode(8592), String.fromCharCode(8592), String.fromCharCode(8592)],
        ['ArrowDown', String.fromCharCode(8595), String.fromCharCode(8595), String.fromCharCode(8595), String.fromCharCode(8595)],
        ['ArrowRight', String.fromCharCode(8594), String.fromCharCode(8594), String.fromCharCode(8594), String.fromCharCode(8594)],
    ],
];

function getLocalLanguage() {
    return localStorage.getItem('language') || 'en';
}


function createKeyboardView() {
    const wrapper = generateDomElement(wrapper, 'div', 'wrapper');
    document.body.append(wrapper);

    const textarea = generateDomElement(textarea, 'textarea', 'textarea');
    textarea.setAttribute('autofocus', 'autofocus');
    textarea.setAttribute('cols', 100);
    textarea.setAttribute('rows', 15);


    const keyboardContainer = generateDomElement(keyboardContainer, 'div', 'keyboard-container');


    buttonsLayout.forEach((row) => {
        row.forEach((element) => {
            const button = generateDomElement(button, 'button');
            const [code, ruLittle, ruBig, enLittle, enBig] = element;

            button.classList.add('keyboard__button', code);
            switch (element[0]) {
                case 'Space':
                    button.classList.add('keyboard__button_the-widest');
                    break;
                case 'Backspace':
                case 'CapsLock':
                case 'ShiftLeft':
                case 'Enter':
                    button.classList.add('keyboard__button_wider');
                    break;
                case 'ShiftRight':
                    button.classList.add('keyboard__key-base-width');
                    break;

                default:
                    {
                        break;
                    }
            }

            keyboardContainer.append(button);

            const ruLang = generateDomElement(ruLang, 'span', 'ru');
            const enLang = generateDomElement(ruLang, 'span', 'en');

            const language = getLocalLanguage();
            if (language === 'en') enLang.classList.add('current');
            else ruLang.classList.add('current');

            button.append(ruLang, enLang);

            const ruLowerCase = generateDomElement(ruLang, 'span', 'small', 'on');
            ruLowerCase.textContent = ruLittle;

            const ruUpperCase = generateDomElement(ruLang, 'span', 'big');
            ruUpperCase.textContent = ruBig;
            ruLang.append(ruLowerCase, ruUpperCase);

            const enLowerCase = generateDomElement(ruLang, 'span', 'small', 'on');
            enLowerCase.textContent = enLittle;

            const enUpperCase = generateDomElement(ruLang, 'span', 'big');
            enUpperCase.textContent = enBig;
            enLang.append(enLowerCase, enUpperCase);
        });
        keyboardContainer.append(document.createElement('br'));
    });


    wrapper.append(textarea, keyboardContainer);
}

export default { createKeyboardView, getLocalLanguage };