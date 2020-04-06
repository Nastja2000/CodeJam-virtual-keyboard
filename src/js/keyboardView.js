import generateDomElement from './generalFunctions';

function createKeyboardView() {
    const wrapper = generateDomElement(wrapper, 'div', 'wrapper');
    document.body.append(wrapper);

    const textarea = generateDomElement(textarea, 'textarea', 'textarea');
    textarea.setAttribute('autofocus', 'autofocus');
    textarea.setAttribute('cols', 100);
    textarea.setAttribute('rows', 15);


    const keyboardContainer = generateDomElement(keyboardContainer, 'div', 'keyboard-container');


    wrapper.append(textarea, keyboardContainer);
}

export default createKeyboardView;