export const getImageUrl = (path) => {
  return new URL(`assetes/${path}`, import.meta.url).href;
};
