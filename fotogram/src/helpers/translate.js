import wording from '../constants/wording';

const lang = localStorage.getItem('lang') || 'en';

function translate(key) {
  return wording[key] ? wording[key][lang] || wording[key]['en'] : key;
}

export default translate;
