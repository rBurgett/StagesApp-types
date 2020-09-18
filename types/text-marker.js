/**
 * Class representing a text marker
 */
class TextMarker {

  /**
   * Unique ID for the marker
   * @type {string}
   * @default ''
   */
  _id = '';

  /**
   * @type {string}
   */
  createdAt = '';

  /**
   * @type {string}
   */
  updatedAt = '';

  /**
   * @type {string}
   */
  title = '';

  /**
   * @type {string[]}
   */
  searchWords = [];

  /**
   * @type {string[]}
   */
  outlineItems = [];

  /**
   * The transcribed text associate with the marker
   * @type {string}
   */
  text = '';

  /**
   * @type {string}
   */
  note = '';

  /**
   * @type {string}
   */
  cultureEvent = '';

  /**
   * Constructs a text marker
   * @param {Object} data
   */
  constructor(data = {}) {
    for(const key of Object.keys(data)) {
      this[key] = data[key];
    }
  }

  /**
   * Creates an updated text marker
   * @param {Object} data
   * @returns {SearchWord}
   */
  set(data) {
    return new TextMarker({
      ...this,
      ...data
    });
  }

}

module.exports = TextMarker;