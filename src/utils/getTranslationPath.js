const getTranslationPath = (language, path) => {
  return language === 'en' ? path : `/${language}${path}`;
};

export default getTranslationPath;
