function getLocalLanguage() {
    return localStorage.getItem('language') || 'en';
}

export default getLocalLanguage;