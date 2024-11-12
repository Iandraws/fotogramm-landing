const lang = localStorage.getItem('lang') || 'de';

function translate(wording) {
  if (!wording) {
    return wording;
  }
  return wording[lang] || wording['en'] || wording;
}

export default translate;
