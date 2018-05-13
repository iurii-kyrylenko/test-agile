/**
 * Utilities to handle trailing non-word characters
 */

const reTail = /\W+$/;

export const strip = word => word.replace(reTail, '');

export const unstrip = (word, synonym) => {
  const tail = word.match(reTail);
  return synonym + (tail ? tail[0] : '');
};
