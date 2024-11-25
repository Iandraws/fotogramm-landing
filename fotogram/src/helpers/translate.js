const lang =
  localStorage.getItem('lang') ||
  (navigator.language.startsWith('de') ? 'de' : 'en');

function translate(wordingKey) {
  if (!wordingKey) return '';
  return wordingKey[lang] || wordingKey['de'] || '';
}

export default translate;
