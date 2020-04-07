import getLocalLanguage from './keyboardView';

const changeLanguage = () => {
    const language = getLocalLanguage();
    if (language === 'en') localStorage.setItem('language', 'ru');
    else localStorage.setItem('language', 'en');
    document.querySelectorAll('.keyboard__button').forEach((button) => [...button.children].forEach((item) => item.classList.toggle('current')));
}

export default changeLanguage;