const lang = localStorage.getItem('lang') || 'de';

function translate(wordingKey) {
  if (!wordingKey) return '';
  return wordingKey[lang] || wordingKey['en'] || '';
}

export default translate;
