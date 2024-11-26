import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import translate from '../helpers/translate';

const updateOpenGraphTags = (title, description, url) => {
  const ogTags = [
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: url },
    { property: 'og:type', content: 'website' },
  ];

  ogTags.forEach(({ property, content }) => {
    let tag = document.querySelector(`meta[property="${property}"]`);
    if (tag) {
      tag.content = content;
    } else {
      tag = document.createElement('meta');
      tag.setAttribute('property', property);
      tag.content = content;
      document.head.appendChild(tag);
    }
  });
};

const ScrollToTop = ({
  titles,
  metaDescriptions,
  defaultTitle = 'Fotogram Technology',
  defaultDescription = '',
}) => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.getElementById('root').scrollTo(0, 0);

    const titleData = titles[pathname];
    const descriptionData = metaDescriptions[pathname];
    const newTitle = titleData ? translate(titleData) : defaultTitle;
    const newDescription = descriptionData
      ? translate(descriptionData)
      : defaultDescription;

    document.title = newTitle;

    let metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (!metaDescriptionTag) {
      metaDescriptionTag = document.createElement('meta');
      metaDescriptionTag.name = 'description';
      document.head.appendChild(metaDescriptionTag);
    }
    metaDescriptionTag.content = newDescription;

    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.rel = 'canonical';
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.href = `${window.location.origin}${pathname}`;

    updateOpenGraphTags(
      newTitle,
      newDescription,
      `${window.location.origin}${pathname}`
    );
  }, [pathname, titles, metaDescriptions, defaultTitle, defaultDescription]);

  return null;
};

export default ScrollToTop;
