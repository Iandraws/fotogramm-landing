const lang = localStorage.getItem('lang') || 'en';

function translate(wordingKey) {
  if (!wordingKey) return '';
  return wordingKey[lang] || wordingKey['en'] || '';
}

export default translate;
