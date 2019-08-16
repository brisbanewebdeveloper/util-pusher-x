// eslint-disable jsdoc/no-undefined-types
// noinspection JSCommentMatchesSignature
/**
 * This pushes or concatenates into a new or existing array.
 *
 * @param {Array} arrayLike - The source.
 * @param {number} [from=0] - The from source index.
 * @param {Array} [target=[]] - The target array.
 * @returns {*} The target array.
 */
// eslint-enable jsdoc/no-undefined-types
const pusher = function pusher(arrayLike, from) {
  const len = arrayLike.length;
  /* eslint-disable-next-line prefer-rest-params */
  const target = arguments.length > 2 ? arguments[2] : [];

  for (let i = from || 0; i < len; i += 1) {
    target[target.length] = arrayLike[i];
  }

  return target;
};

export default pusher;
