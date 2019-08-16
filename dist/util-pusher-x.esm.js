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
var pusher = function pusher(arrayLike, from) {
  var len = arrayLike.length;
  /* eslint-disable-next-line prefer-rest-params */

  var target = arguments.length > 2 ? arguments[2] : [];

  for (var i = from || 0; i < len; i += 1) {
    target[target.length] = arrayLike[i];
  }

  return target;
};

export default pusher;

//# sourceMappingURL=util-pusher-x.esm.js.map