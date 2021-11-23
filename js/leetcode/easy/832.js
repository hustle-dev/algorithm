/**
 * @title Flipping an Image
 * @link https://leetcode.com/problems/flipping-an-image/
 * @param {number[][]} image
 * @returns {number[][]}
 */
const flipAndInvertImage = image => {
  image.forEach(img => {
    let lt = 0;
    let rt = img.length - 1;

    while (lt <= rt) {
      if (lt === rt) {
        img[lt] = img[lt] === 0 ? 1 : 0;
      } else {
        img[lt] = img[lt] === 0 ? 1 : 0;
        img[rt] = img[rt] === 0 ? 1 : 0;
      }

      [img[lt], img[rt]] = [img[rt], img[lt]];

      lt++;
      rt--;
    }
  });

  return image;
};
