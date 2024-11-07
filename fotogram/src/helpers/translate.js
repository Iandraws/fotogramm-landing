import wording from '../constants/wording';

const lang = localStorage.getItem('lang') || 'en';

function translate(key) {
  console.log(lang)
  return wording[key] ? wording[key][lang] || wording[key]['en'] : key;
}

export default translate;
