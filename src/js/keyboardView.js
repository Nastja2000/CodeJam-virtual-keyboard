import generateDomElement from './generalFunctions';
import buttonsLayout from './buttonsLayout';
import getLocalLanguage from './getLocalLanguage';

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

export default createKeyboardView;