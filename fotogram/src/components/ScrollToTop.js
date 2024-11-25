// src/components/ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import translate from '../helpers/translate';

const ScrollToTop = ({ titles }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.getElementById('root').scrollTo(0, 0);

    const newTitle = translate(titles[pathname]) || 'Fotogram Technology';
    document.title = newTitle;
  }, [pathname, titles]);

  return null;
};

export default ScrollToTop;
