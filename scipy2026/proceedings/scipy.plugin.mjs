var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) =>
  function __require() {
    return (
      mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports
    );
  };
var __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === 'object') || typeof from === 'function') {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
        });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (
  (target = mod != null ? __create(__getProtoOf(mod)) : {}),
  __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule
      ? __defProp(target, 'default', { value: mod, enumerable: true })
      : target,
    mod
  )
);

// node_modules/@rgrove/parse-xml/dist/lib/StringScanner.js
var require_StringScanner = __commonJS({
  'node_modules/@rgrove/parse-xml/dist/lib/StringScanner.js'(exports) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.StringScanner = void 0;
    var emptyString = '';
    var surrogatePair = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
    var StringScanner = class {
      constructor(string) {
        this.charCount = this.charLength(string, true);
        this.charIndex = 0;
        this.length = string.length;
        this.multiByteMode = this.charCount !== this.length;
        this.string = string;
        if (this.multiByteMode) {
          let charsToBytes = [];
          for (let byteIndex = 0, charIndex = 0; charIndex < this.charCount; ++charIndex) {
            charsToBytes[charIndex] = byteIndex;
            byteIndex += string.codePointAt(byteIndex) > 65535 ? 2 : 1;
          }
          this.charsToBytes = charsToBytes;
        }
      }
      /**
       * Whether the current character index is at the end of the input string.
       */
      get isEnd() {
        return this.charIndex >= this.charCount;
      }
      // -- Protected Methods ------------------------------------------------------
      /**
       * Returns the number of characters in the given string, which may differ from
       * the byte length if the string contains multibyte characters.
       */
      charLength(string, multiByteSafe = this.multiByteMode) {
        return multiByteSafe ? string.replace(surrogatePair, '_').length : string.length;
      }
      // -- Public Methods ---------------------------------------------------------
      /**
       * Advances the scanner by the given number of characters, stopping if the end
       * of the string is reached.
       */
      advance(count = 1) {
        this.charIndex = Math.min(this.charCount, this.charIndex + count);
      }
      /**
       * Returns the byte index of the given character index in the string. The two
       * may differ in strings that contain multibyte characters.
       */
      charIndexToByteIndex(charIndex = this.charIndex) {
        return this.multiByteMode ? this.charsToBytes[charIndex] ?? Infinity : charIndex;
      }
      /**
       * Consumes and returns the given number of characters if possible, advancing
       * the scanner and stopping if the end of the string is reached.
       *
       * If no characters could be consumed, an empty string will be returned.
       */
      consume(count = 1) {
        let chars = this.peek(count);
        this.advance(count);
        return chars;
      }
      /**
       * Consumes a match for the given sticky regex, advances the scanner, updates
       * the `lastIndex` property of the regex, and returns the matching string.
       *
       * The regex must have a sticky flag ("y") so that its `lastIndex` prop can be
       * used to anchor the match at the current scanner position.
       *
       * Returns the consumed string, or an empty string if nothing was consumed.
       */
      consumeMatch(regex) {
        if (!regex.sticky) {
          throw new Error('`regex` must have a sticky flag ("y")');
        }
        regex.lastIndex = this.charIndexToByteIndex();
        let result = regex.exec(this.string);
        if (result === null || result.length === 0) {
          return emptyString;
        }
        let match = result[0];
        this.advance(this.charLength(match));
        return match;
      }
      /**
       * Consumes and returns all characters for which the given function returns a
       * truthy value, stopping on the first falsy return value or if the end of the
       * input is reached.
       */
      consumeMatchFn(fn) {
        let char;
        let match = emptyString;
        while ((char = this.peek()) && fn(char)) {
          match += char;
          this.advance();
        }
        return match;
      }
      /**
       * Consumes the given string if it exists at the current character index, and
       * advances the scanner.
       *
       * If the given string doesn't exist at the current character index, an empty
       * string will be returned and the scanner will not be advanced.
       */
      consumeString(stringToConsume) {
        if (this.consumeStringFast(stringToConsume)) {
          return stringToConsume;
        }
        if (this.multiByteMode) {
          let { length } = stringToConsume;
          let charLengthToMatch = this.charLength(stringToConsume);
          if (charLengthToMatch !== length && stringToConsume === this.peek(charLengthToMatch)) {
            this.advance(charLengthToMatch);
            return stringToConsume;
          }
        }
        return emptyString;
      }
      /**
       * Does the same thing as `consumeString()`, but doesn't support consuming
       * multibyte characters. This can be faster if you only need to match single
       * byte characters.
       */
      consumeStringFast(stringToConsume) {
        let { length } = stringToConsume;
        if (this.peek(length) === stringToConsume) {
          this.advance(length);
          return stringToConsume;
        }
        return emptyString;
      }
      /**
       * Consumes characters until the given global regex is matched, advancing the
       * scanner up to (but not beyond) the beginning of the match. If the regex
       * doesn't match, nothing will be consumed.
       *
       * Returns the consumed string, or an empty string if nothing was consumed.
       */
      consumeUntilMatch(regex) {
        let restOfString = this.string.slice(this.charIndexToByteIndex());
        let matchByteIndex = restOfString.search(regex);
        if (matchByteIndex <= 0) {
          return emptyString;
        }
        let result = restOfString.slice(0, matchByteIndex);
        this.advance(this.charLength(result));
        return result;
      }
      /**
       * Consumes characters until the given string is found, advancing the scanner
       * up to (but not beyond) that point. If the string is never found, nothing
       * will be consumed.
       *
       * Returns the consumed string, or an empty string if nothing was consumed.
       */
      consumeUntilString(searchString) {
        let { string } = this;
        let byteIndex = this.charIndexToByteIndex();
        let matchByteIndex = string.indexOf(searchString, byteIndex);
        if (matchByteIndex <= 0) {
          return emptyString;
        }
        let result = string.slice(byteIndex, matchByteIndex);
        this.advance(this.charLength(result));
        return result;
      }
      /**
       * Returns the given number of characters starting at the current character
       * index, without advancing the scanner and without exceeding the end of the
       * input string.
       */
      peek(count = 1) {
        let { charIndex, multiByteMode, string } = this;
        if (multiByteMode) {
          if (charIndex >= this.charCount) {
            return emptyString;
          }
          return string.slice(
            this.charIndexToByteIndex(charIndex),
            this.charIndexToByteIndex(charIndex + count)
          );
        }
        return string.slice(charIndex, charIndex + count);
      }
      /**
       * Resets the scanner position to the given character _index_, or to the start
       * of the input string if no index is given.
       *
       * If _index_ is negative, the scanner position will be moved backward by that
       * many characters, stopping if the beginning of the string is reached.
       */
      reset(index2 = 0) {
        this.charIndex =
          index2 >= 0 ? Math.min(this.charCount, index2) : Math.max(0, this.charIndex + index2);
      }
    };
    exports.StringScanner = StringScanner;
  },
});

// node_modules/@rgrove/parse-xml/dist/lib/syntax.js
var require_syntax = __commonJS({
  'node_modules/@rgrove/parse-xml/dist/lib/syntax.js'(exports) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.isXmlCodePoint =
      exports.isWhitespace =
      exports.isReferenceChar =
      exports.isNameStartChar =
      exports.isNameChar =
      exports.predefinedEntities =
      exports.endCharData =
      exports.attValueNormalizedWhitespace =
      exports.attValueCharSingleQuote =
      exports.attValueCharDoubleQuote =
        void 0;
    exports.attValueCharDoubleQuote = /[^"&<]+/y;
    exports.attValueCharSingleQuote = /[^'&<]+/y;
    exports.attValueNormalizedWhitespace = /\r\n|[\n\r\t]/g;
    exports.endCharData = /<|&|]]>/;
    exports.predefinedEntities = Object.freeze(
      Object.assign(/* @__PURE__ */ Object.create(null), {
        amp: '&',
        apos: "'",
        gt: '>',
        lt: '<',
        quot: '"',
      })
    );
    function isNameChar(char) {
      let cp = getCodePoint(char);
      return (
        (cp >= 97 && cp <= 122) ||
        (cp >= 65 && cp <= 90) ||
        (cp >= 48 && cp <= 57) ||
        cp === 45 ||
        cp === 46 ||
        cp === 183 ||
        (cp >= 768 && cp <= 879) ||
        (cp >= 8255 && cp <= 8256) ||
        isNameStartChar(char, cp)
      );
    }
    exports.isNameChar = isNameChar;
    function isNameStartChar(char, cp = getCodePoint(char)) {
      return (
        (cp >= 97 && cp <= 122) ||
        (cp >= 65 && cp <= 90) ||
        cp === 58 ||
        cp === 95 ||
        (cp >= 192 && cp <= 214) ||
        (cp >= 216 && cp <= 246) ||
        (cp >= 248 && cp <= 767) ||
        (cp >= 880 && cp <= 893) ||
        (cp >= 895 && cp <= 8191) ||
        (cp >= 8204 && cp <= 8205) ||
        (cp >= 8304 && cp <= 8591) ||
        (cp >= 11264 && cp <= 12271) ||
        (cp >= 12289 && cp <= 55295) ||
        (cp >= 63744 && cp <= 64975) ||
        (cp >= 65008 && cp <= 65533) ||
        (cp >= 65536 && cp <= 983039)
      );
    }
    exports.isNameStartChar = isNameStartChar;
    function isReferenceChar(char) {
      return char === '#' || isNameChar(char);
    }
    exports.isReferenceChar = isReferenceChar;
    function isWhitespace(char) {
      let cp = getCodePoint(char);
      return cp === 32 || cp === 9 || cp === 10 || cp === 13;
    }
    exports.isWhitespace = isWhitespace;
    function isXmlCodePoint(cp) {
      return (
        cp === 9 ||
        cp === 10 ||
        cp === 13 ||
        (cp >= 32 && cp <= 55295) ||
        (cp >= 57344 && cp <= 65533) ||
        (cp >= 65536 && cp <= 1114111)
      );
    }
    exports.isXmlCodePoint = isXmlCodePoint;
    function getCodePoint(char) {
      return char.codePointAt(0) || -1;
    }
  },
});

// node_modules/@rgrove/parse-xml/dist/lib/XmlNode.js
var require_XmlNode = __commonJS({
  'node_modules/@rgrove/parse-xml/dist/lib/XmlNode.js'(exports) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.XmlNode = void 0;
    var XmlNode = class _XmlNode {
      constructor() {
        this.parent = null;
        this.start = -1;
        this.end = -1;
      }
      /**
       * Document that contains this node, or `null` if this node is not associated
       * with a document.
       */
      get document() {
        return this.parent?.document ?? null;
      }
      /**
       * Whether this node is the root node of the document (also known as the
       * document element).
       */
      get isRootNode() {
        return (
          this.parent !== null &&
          this.parent === this.document &&
          this.type === _XmlNode.TYPE_ELEMENT
        );
      }
      /**
       * Whether whitespace should be preserved in the content of this element and
       * its children.
       *
       * This is influenced by the value of the special `xml:space` attribute, and
       * will be `true` for any node whose `xml:space` attribute is set to
       * "preserve". If a node has no such attribute, it will inherit the value of
       * the nearest ancestor that does (if any).
       *
       * @see https://www.w3.org/TR/2008/REC-xml-20081126/#sec-white-space
       */
      get preserveWhitespace() {
        return !!this.parent?.preserveWhitespace;
      }
      /**
       * Type of this node.
       *
       * The value of this property is a string that matches one of the static
       * `TYPE_*` properties on the `XmlNode` class (e.g. `TYPE_ELEMENT`,
       * `TYPE_TEXT`, etc.).
       *
       * The `XmlNode` class itself is a base class and doesn't have its own type
       * name.
       */
      get type() {
        return '';
      }
      /**
       * Returns a JSON-serializable object representing this node, minus properties
       * that could result in circular references.
       */
      toJSON() {
        let json = {
          type: this.type,
        };
        if (this.isRootNode) {
          json.isRootNode = true;
        }
        if (this.preserveWhitespace) {
          json.preserveWhitespace = true;
        }
        if (this.start !== -1) {
          json.start = this.start;
          json.end = this.end;
        }
        return json;
      }
    };
    exports.XmlNode = XmlNode;
    XmlNode.TYPE_CDATA = 'cdata';
    XmlNode.TYPE_COMMENT = 'comment';
    XmlNode.TYPE_DOCUMENT = 'document';
    XmlNode.TYPE_DOCUMENT_TYPE = 'doctype';
    XmlNode.TYPE_ELEMENT = 'element';
    XmlNode.TYPE_PROCESSING_INSTRUCTION = 'pi';
    XmlNode.TYPE_TEXT = 'text';
    XmlNode.TYPE_XML_DECLARATION = 'xmldecl';
  },
});

// node_modules/@rgrove/parse-xml/dist/lib/XmlText.js
var require_XmlText = __commonJS({
  'node_modules/@rgrove/parse-xml/dist/lib/XmlText.js'(exports) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.XmlText = void 0;
    var XmlNode_js_1 = require_XmlNode();
    var XmlText = class extends XmlNode_js_1.XmlNode {
      constructor(text = '') {
        super();
        this.text = text;
      }
      get type() {
        return XmlNode_js_1.XmlNode.TYPE_TEXT;
      }
      toJSON() {
        return Object.assign(XmlNode_js_1.XmlNode.prototype.toJSON.call(this), {
          text: this.text,
        });
      }
    };
    exports.XmlText = XmlText;
  },
});

// node_modules/@rgrove/parse-xml/dist/lib/XmlCdata.js
var require_XmlCdata = __commonJS({
  'node_modules/@rgrove/parse-xml/dist/lib/XmlCdata.js'(exports) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.XmlCdata = void 0;
    var XmlNode_js_1 = require_XmlNode();
    var XmlText_js_1 = require_XmlText();
    var XmlCdata = class extends XmlText_js_1.XmlText {
      get type() {
        return XmlNode_js_1.XmlNode.TYPE_CDATA;
      }
    };
    exports.XmlCdata = XmlCdata;
  },
});

// node_modules/@rgrove/parse-xml/dist/lib/XmlComment.js
var require_XmlComment = __commonJS({
  'node_modules/@rgrove/parse-xml/dist/lib/XmlComment.js'(exports) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.XmlComment = void 0;
    var XmlNode_js_1 = require_XmlNode();
    var XmlComment = class extends XmlNode_js_1.XmlNode {
      constructor(content = '') {
        super();
        this.content = content;
      }
      get type() {
        return XmlNode_js_1.XmlNode.TYPE_COMMENT;
      }
      toJSON() {
        return Object.assign(XmlNode_js_1.XmlNode.prototype.toJSON.call(this), {
          content: this.content,
        });
      }
    };
    exports.XmlComment = XmlComment;
  },
});

// node_modules/@rgrove/parse-xml/dist/lib/XmlDeclaration.js
var require_XmlDeclaration = __commonJS({
  'node_modules/@rgrove/parse-xml/dist/lib/XmlDeclaration.js'(exports) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.XmlDeclaration = void 0;
    var XmlNode_js_1 = require_XmlNode();
    var XmlDeclaration = class extends XmlNode_js_1.XmlNode {
      constructor(version, encoding, standalone) {
        super();
        this.version = version;
        this.encoding = encoding ?? null;
        this.standalone = standalone ?? null;
      }
      get type() {
        return XmlNode_js_1.XmlNode.TYPE_XML_DECLARATION;
      }
      toJSON() {
        let json = XmlNode_js_1.XmlNode.prototype.toJSON.call(this);
        json.version = this.version;
        for (let key of ['encoding', 'standalone']) {
          if (this[key] !== null) {
            json[key] = this[key];
          }
        }
        return json;
      }
    };
    exports.XmlDeclaration = XmlDeclaration;
  },
});

// node_modules/@rgrove/parse-xml/dist/lib/XmlElement.js
var require_XmlElement = __commonJS({
  'node_modules/@rgrove/parse-xml/dist/lib/XmlElement.js'(exports) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.XmlElement = void 0;
    var XmlNode_js_1 = require_XmlNode();
    var XmlElement = class _XmlElement extends XmlNode_js_1.XmlNode {
      constructor(name, attributes = /* @__PURE__ */ Object.create(null), children = []) {
        super();
        this.name = name;
        this.attributes = attributes;
        this.children = children;
      }
      /**
       * Whether this element is empty (meaning it has no children).
       */
      get isEmpty() {
        return this.children.length === 0;
      }
      get preserveWhitespace() {
        let node = this;
        while (node instanceof _XmlElement) {
          if ('xml:space' in node.attributes) {
            return node.attributes['xml:space'] === 'preserve';
          }
          node = node.parent;
        }
        return false;
      }
      /**
       * Text content of this element and all its descendants.
       */
      get text() {
        return this.children.map((child) => ('text' in child ? child.text : '')).join('');
      }
      get type() {
        return XmlNode_js_1.XmlNode.TYPE_ELEMENT;
      }
      toJSON() {
        return Object.assign(XmlNode_js_1.XmlNode.prototype.toJSON.call(this), {
          name: this.name,
          attributes: this.attributes,
          children: this.children.map((child) => child.toJSON()),
        });
      }
    };
    exports.XmlElement = XmlElement;
  },
});

// node_modules/@rgrove/parse-xml/dist/lib/XmlDocument.js
var require_XmlDocument = __commonJS({
  'node_modules/@rgrove/parse-xml/dist/lib/XmlDocument.js'(exports) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.XmlDocument = void 0;
    var XmlElement_js_1 = require_XmlElement();
    var XmlNode_js_1 = require_XmlNode();
    var XmlDocument = class extends XmlNode_js_1.XmlNode {
      constructor(children = []) {
        super();
        this.children = children;
      }
      get document() {
        return this;
      }
      /**
       * Root element of this document, or `null` if this document is empty.
       */
      get root() {
        for (let child of this.children) {
          if (child instanceof XmlElement_js_1.XmlElement) {
            return child;
          }
        }
        return null;
      }
      /**
       * Text content of this document and all its descendants.
       */
      get text() {
        return this.children.map((child) => ('text' in child ? child.text : '')).join('');
      }
      get type() {
        return XmlNode_js_1.XmlNode.TYPE_DOCUMENT;
      }
      toJSON() {
        return Object.assign(XmlNode_js_1.XmlNode.prototype.toJSON.call(this), {
          children: this.children.map((child) => child.toJSON()),
        });
      }
    };
    exports.XmlDocument = XmlDocument;
  },
});

// node_modules/@rgrove/parse-xml/dist/lib/XmlDocumentType.js
var require_XmlDocumentType = __commonJS({
  'node_modules/@rgrove/parse-xml/dist/lib/XmlDocumentType.js'(exports) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.XmlDocumentType = void 0;
    var XmlNode_js_1 = require_XmlNode();
    var XmlDocumentType = class extends XmlNode_js_1.XmlNode {
      constructor(name, publicId, systemId, internalSubset) {
        super();
        this.name = name;
        this.publicId = publicId ?? null;
        this.systemId = systemId ?? null;
        this.internalSubset = internalSubset ?? null;
      }
      get type() {
        return XmlNode_js_1.XmlNode.TYPE_DOCUMENT_TYPE;
      }
      toJSON() {
        let json = XmlNode_js_1.XmlNode.prototype.toJSON.call(this);
        json.name = this.name;
        for (let key of ['publicId', 'systemId', 'internalSubset']) {
          if (this[key] !== null) {
            json[key] = this[key];
          }
        }
        return json;
      }
    };
    exports.XmlDocumentType = XmlDocumentType;
  },
});

// node_modules/@rgrove/parse-xml/dist/lib/XmlError.js
var require_XmlError = __commonJS({
  'node_modules/@rgrove/parse-xml/dist/lib/XmlError.js'(exports) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.XmlError = void 0;
    var XmlError = class extends Error {
      constructor(message, charIndex, xml) {
        let column = 1;
        let excerpt = '';
        let line = 1;
        for (let i = 0; i < charIndex; ++i) {
          let char = xml[i];
          if (char === '\n') {
            column = 1;
            excerpt = '';
            line += 1;
          } else {
            column += 1;
            excerpt += char;
          }
        }
        let eol = xml.indexOf('\n', charIndex);
        excerpt += eol === -1 ? xml.slice(charIndex) : xml.slice(charIndex, eol);
        let excerptStart = 0;
        if (excerpt.length > 50) {
          if (column < 40) {
            excerpt = excerpt.slice(0, 50);
          } else {
            excerptStart = column - 20;
            excerpt = excerpt.slice(excerptStart, column + 30);
          }
        }
        super(
          `${message} (line ${line}, column ${column})
  ${excerpt}
` +
            ' '.repeat(column - excerptStart + 1) +
            '^\n'
        );
        this.column = column;
        this.excerpt = excerpt;
        this.line = line;
        this.name = 'XmlError';
        this.pos = charIndex;
      }
    };
    exports.XmlError = XmlError;
  },
});

// node_modules/@rgrove/parse-xml/dist/lib/XmlProcessingInstruction.js
var require_XmlProcessingInstruction = __commonJS({
  'node_modules/@rgrove/parse-xml/dist/lib/XmlProcessingInstruction.js'(exports) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.XmlProcessingInstruction = void 0;
    var XmlNode_js_1 = require_XmlNode();
    var XmlProcessingInstruction = class extends XmlNode_js_1.XmlNode {
      constructor(name, content = '') {
        super();
        this.name = name;
        this.content = content;
      }
      get type() {
        return XmlNode_js_1.XmlNode.TYPE_PROCESSING_INSTRUCTION;
      }
      toJSON() {
        return Object.assign(XmlNode_js_1.XmlNode.prototype.toJSON.call(this), {
          name: this.name,
          content: this.content,
        });
      }
    };
    exports.XmlProcessingInstruction = XmlProcessingInstruction;
  },
});

// node_modules/@rgrove/parse-xml/dist/lib/Parser.js
var require_Parser = __commonJS({
  'node_modules/@rgrove/parse-xml/dist/lib/Parser.js'(exports) {
    'use strict';
    var __createBinding =
      (exports && exports.__createBinding) ||
      (Object.create
        ? function (o, m, k, k2) {
            if (k2 === void 0) k2 = k;
            var desc = Object.getOwnPropertyDescriptor(m, k);
            if (!desc || ('get' in desc ? !m.__esModule : desc.writable || desc.configurable)) {
              desc = {
                enumerable: true,
                get: function () {
                  return m[k];
                },
              };
            }
            Object.defineProperty(o, k2, desc);
          }
        : function (o, m, k, k2) {
            if (k2 === void 0) k2 = k;
            o[k2] = m[k];
          });
    var __setModuleDefault =
      (exports && exports.__setModuleDefault) ||
      (Object.create
        ? function (o, v) {
            Object.defineProperty(o, 'default', { enumerable: true, value: v });
          }
        : function (o, v) {
            o['default'] = v;
          });
    var __importStar =
      (exports && exports.__importStar) ||
      function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.Parser = void 0;
    var StringScanner_js_1 = require_StringScanner();
    var syntax = __importStar(require_syntax());
    var XmlCdata_js_1 = require_XmlCdata();
    var XmlComment_js_1 = require_XmlComment();
    var XmlDeclaration_js_1 = require_XmlDeclaration();
    var XmlDocument_js_1 = require_XmlDocument();
    var XmlDocumentType_js_1 = require_XmlDocumentType();
    var XmlElement_js_1 = require_XmlElement();
    var XmlError_js_1 = require_XmlError();
    var XmlNode_js_1 = require_XmlNode();
    var XmlProcessingInstruction_js_1 = require_XmlProcessingInstruction();
    var XmlText_js_1 = require_XmlText();
    var emptyString = '';
    var Parser = class {
      /**
       * @param xml XML string to parse.
       * @param options Parser options.
       */
      constructor(xml, options = {}) {
        let doc = (this.document = new XmlDocument_js_1.XmlDocument());
        let scanner = (this.scanner = new StringScanner_js_1.StringScanner(xml));
        this.currentNode = doc;
        this.options = options;
        if (this.options.includeOffsets) {
          doc.start = 0;
          doc.end = xml.length;
        }
        scanner.consumeStringFast('\uFEFF');
        this.consumeProlog();
        if (!this.consumeElement()) {
          throw this.error('Root element is missing or invalid');
        }
        while (this.consumeMisc()) {}
        if (!scanner.isEnd) {
          throw this.error('Extra content at the end of the document');
        }
      }
      /**
       * Adds the given `XmlNode` as a child of `this.currentNode`.
       */
      addNode(node, charIndex) {
        node.parent = this.currentNode;
        if (this.options.includeOffsets) {
          node.start = this.scanner.charIndexToByteIndex(charIndex);
          node.end = this.scanner.charIndexToByteIndex();
        }
        this.currentNode.children.push(node);
        return true;
      }
      /**
       * Adds the given _text_ to the document, either by appending it to a
       * preceding `XmlText` node (if possible) or by creating a new `XmlText` node.
       */
      addText(text, charIndex) {
        let { children } = this.currentNode;
        let { length } = children;
        text = normalizeLineBreaks(text);
        if (length > 0) {
          let prevNode = children[length - 1];
          if (prevNode?.type === XmlNode_js_1.XmlNode.TYPE_TEXT) {
            let textNode = prevNode;
            textNode.text += text;
            if (this.options.includeOffsets) {
              textNode.end = this.scanner.charIndexToByteIndex();
            }
            return true;
          }
        }
        return this.addNode(new XmlText_js_1.XmlText(text), charIndex);
      }
      /**
       * Consumes element attributes.
       *
       * @see https://www.w3.org/TR/2008/REC-xml-20081126/#sec-starttags
       */
      consumeAttributes() {
        let attributes = /* @__PURE__ */ Object.create(null);
        while (this.consumeWhitespace()) {
          let attrName = this.consumeName();
          if (!attrName) {
            break;
          }
          let attrValue = this.consumeEqual() && this.consumeAttributeValue();
          if (attrValue === false) {
            throw this.error('Attribute value expected');
          }
          if (attrName in attributes) {
            throw this.error(`Duplicate attribute: ${attrName}`);
          }
          if (attrName === 'xml:space' && attrValue !== 'default' && attrValue !== 'preserve') {
            throw this.error('Value of the `xml:space` attribute must be "default" or "preserve"');
          }
          attributes[attrName] = attrValue;
        }
        if (this.options.sortAttributes) {
          let attrNames = Object.keys(attributes).sort();
          let sortedAttributes = /* @__PURE__ */ Object.create(null);
          for (let i = 0; i < attrNames.length; ++i) {
            let attrName = attrNames[i];
            sortedAttributes[attrName] = attributes[attrName];
          }
          attributes = sortedAttributes;
        }
        return attributes;
      }
      /**
       * Consumes an `AttValue` (attribute value) if possible.
       *
       * @returns
       *   Contents of the `AttValue` minus quotes, or `false` if nothing was
       *   consumed. An empty string indicates that an `AttValue` was consumed but
       *   was empty.
       *
       * @see https://www.w3.org/TR/2008/REC-xml-20081126/#NT-AttValue
       */
      consumeAttributeValue() {
        let { scanner } = this;
        let quote = scanner.peek();
        if (quote !== '"' && quote !== "'") {
          return false;
        }
        scanner.advance();
        let chars;
        let isClosed = false;
        let value = emptyString;
        let regex = quote === '"' ? syntax.attValueCharDoubleQuote : syntax.attValueCharSingleQuote;
        matchLoop: while (!scanner.isEnd) {
          chars = scanner.consumeMatch(regex);
          if (chars) {
            this.validateChars(chars);
            value += chars.replace(syntax.attValueNormalizedWhitespace, ' ');
          }
          switch (scanner.peek()) {
            case quote:
              isClosed = true;
              break matchLoop;
            case '&':
              value += this.consumeReference();
              continue;
            case '<':
              throw this.error('Unescaped `<` is not allowed in an attribute value');
            case emptyString:
              break matchLoop;
          }
        }
        if (!isClosed) {
          throw this.error('Unclosed attribute');
        }
        scanner.advance();
        return value;
      }
      /**
       * Consumes a CDATA section if possible.
       *
       * @returns Whether a CDATA section was consumed.
       * @see https://www.w3.org/TR/2008/REC-xml-20081126/#sec-cdata-sect
       */
      consumeCdataSection() {
        let { scanner } = this;
        let startIndex = scanner.charIndex;
        if (!scanner.consumeStringFast('<![CDATA[')) {
          return false;
        }
        let text = scanner.consumeUntilString(']]>');
        this.validateChars(text);
        if (!scanner.consumeStringFast(']]>')) {
          throw this.error('Unclosed CDATA section');
        }
        return this.options.preserveCdata
          ? this.addNode(new XmlCdata_js_1.XmlCdata(normalizeLineBreaks(text)), startIndex)
          : this.addText(text, startIndex);
      }
      /**
       * Consumes character data if possible.
       *
       * @returns Whether character data was consumed.
       * @see https://www.w3.org/TR/2008/REC-xml-20081126/#dt-chardata
       */
      consumeCharData() {
        let { scanner } = this;
        let startIndex = scanner.charIndex;
        let charData = scanner.consumeUntilMatch(syntax.endCharData);
        if (!charData) {
          return false;
        }
        this.validateChars(charData);
        if (scanner.peek(3) === ']]>') {
          throw this.error(
            'Element content may not contain the CDATA section close delimiter `]]>`'
          );
        }
        return this.addText(charData, startIndex);
      }
      /**
       * Consumes a comment if possible.
       *
       * @returns Whether a comment was consumed.
       * @see https://www.w3.org/TR/2008/REC-xml-20081126/#NT-Comment
       */
      consumeComment() {
        let { scanner } = this;
        let startIndex = scanner.charIndex;
        if (!scanner.consumeStringFast('<!--')) {
          return false;
        }
        let content = scanner.consumeUntilString('--');
        this.validateChars(content);
        if (!scanner.consumeStringFast('-->')) {
          if (scanner.peek(2) === '--') {
            throw this.error("The string `--` isn't allowed inside a comment");
          }
          throw this.error('Unclosed comment');
        }
        return this.options.preserveComments
          ? this.addNode(new XmlComment_js_1.XmlComment(normalizeLineBreaks(content)), startIndex)
          : true;
      }
      /**
       * Consumes a reference in a content context if possible.
       *
       * This differs from `consumeReference()` in that a consumed reference will be
       * added to the document as a text node instead of returned.
       *
       * @returns Whether a reference was consumed.
       * @see https://www.w3.org/TR/2008/REC-xml-20081126/#entproc
       */
      consumeContentReference() {
        let startIndex = this.scanner.charIndex;
        let ref = this.consumeReference();
        return ref ? this.addText(ref, startIndex) : false;
      }
      /**
       * Consumes a doctype declaration if possible.
       *
       * This is a loose implementation since doctype declarations are currently
       * discarded without further parsing.
       *
       * @returns Whether a doctype declaration was consumed.
       * @see https://www.w3.org/TR/2008/REC-xml-20081126/#dtd
       */
      consumeDoctypeDeclaration() {
        let { scanner } = this;
        let startIndex = scanner.charIndex;
        if (!scanner.consumeStringFast('<!DOCTYPE')) {
          return false;
        }
        let name = this.consumeWhitespace() && this.consumeName();
        if (!name) {
          throw this.error('Expected a name');
        }
        let publicId;
        let systemId;
        if (this.consumeWhitespace()) {
          if (scanner.consumeStringFast('PUBLIC')) {
            publicId = this.consumeWhitespace() && this.consumePubidLiteral();
            if (publicId === false) {
              throw this.error('Expected a public identifier');
            }
            this.consumeWhitespace();
          }
          if (publicId !== void 0 || scanner.consumeStringFast('SYSTEM')) {
            this.consumeWhitespace();
            systemId = this.consumeSystemLiteral();
            if (systemId === false) {
              throw this.error('Expected a system identifier');
            }
            this.consumeWhitespace();
          }
        }
        let internalSubset;
        if (scanner.consumeStringFast('[')) {
          internalSubset = scanner.consumeUntilMatch(/\][\x20\t\r\n]*>/);
          if (!scanner.consumeStringFast(']')) {
            throw this.error('Unclosed internal subset');
          }
          this.consumeWhitespace();
        }
        if (!scanner.consumeStringFast('>')) {
          throw this.error('Unclosed doctype declaration');
        }
        return this.options.preserveDocumentType
          ? this.addNode(
              new XmlDocumentType_js_1.XmlDocumentType(name, publicId, systemId, internalSubset),
              startIndex
            )
          : true;
      }
      /**
       * Consumes an element if possible.
       *
       * @returns Whether an element was consumed.
       * @see https://www.w3.org/TR/2008/REC-xml-20081126/#NT-element
       */
      consumeElement() {
        let { scanner } = this;
        let startIndex = scanner.charIndex;
        if (!scanner.consumeStringFast('<')) {
          return false;
        }
        let name = this.consumeName();
        if (!name) {
          scanner.reset(startIndex);
          return false;
        }
        let attributes = this.consumeAttributes();
        let isEmpty = !!scanner.consumeStringFast('/>');
        let element = new XmlElement_js_1.XmlElement(name, attributes);
        element.parent = this.currentNode;
        if (!isEmpty) {
          if (!scanner.consumeStringFast('>')) {
            throw this.error(`Unclosed start tag for element \`${name}\``);
          }
          this.currentNode = element;
          do {
            this.consumeCharData();
          } while (
            this.consumeElement() ||
            this.consumeContentReference() ||
            this.consumeCdataSection() ||
            this.consumeProcessingInstruction() ||
            this.consumeComment()
          );
          let endTagMark = scanner.charIndex;
          let endTagName;
          if (
            !scanner.consumeStringFast('</') ||
            !(endTagName = this.consumeName()) ||
            endTagName !== name
          ) {
            scanner.reset(endTagMark);
            throw this.error(`Missing end tag for element ${name}`);
          }
          this.consumeWhitespace();
          if (!scanner.consumeStringFast('>')) {
            throw this.error(`Unclosed end tag for element ${name}`);
          }
          this.currentNode = element.parent;
        }
        return this.addNode(element, startIndex);
      }
      /**
       * Consumes an `Eq` production if possible.
       *
       * @returns Whether an `Eq` production was consumed.
       * @see https://www.w3.org/TR/2008/REC-xml-20081126/#NT-Eq
       */
      consumeEqual() {
        this.consumeWhitespace();
        if (this.scanner.consumeStringFast('=')) {
          this.consumeWhitespace();
          return true;
        }
        return false;
      }
      /**
       * Consumes `Misc` content if possible.
       *
       * @returns Whether anything was consumed.
       * @see https://www.w3.org/TR/2008/REC-xml-20081126/#NT-Misc
       */
      consumeMisc() {
        return (
          this.consumeComment() || this.consumeProcessingInstruction() || this.consumeWhitespace()
        );
      }
      /**
       * Consumes one or more `Name` characters if possible.
       *
       * @returns `Name` characters, or an empty string if none were consumed.
       * @see https://www.w3.org/TR/2008/REC-xml-20081126/#NT-Name
       */
      consumeName() {
        return syntax.isNameStartChar(this.scanner.peek())
          ? this.scanner.consumeMatchFn(syntax.isNameChar)
          : emptyString;
      }
      /**
       * Consumes a processing instruction if possible.
       *
       * @returns Whether a processing instruction was consumed.
       * @see https://www.w3.org/TR/2008/REC-xml-20081126/#sec-pi
       */
      consumeProcessingInstruction() {
        let { scanner } = this;
        let startIndex = scanner.charIndex;
        if (!scanner.consumeStringFast('<?')) {
          return false;
        }
        let name = this.consumeName();
        if (name) {
          if (name.toLowerCase() === 'xml') {
            scanner.reset(startIndex);
            throw this.error("XML declaration isn't allowed here");
          }
        } else {
          throw this.error('Invalid processing instruction');
        }
        if (!this.consumeWhitespace()) {
          if (scanner.consumeStringFast('?>')) {
            return this.addNode(
              new XmlProcessingInstruction_js_1.XmlProcessingInstruction(name),
              startIndex
            );
          }
          throw this.error('Whitespace is required after a processing instruction name');
        }
        let content = scanner.consumeUntilString('?>');
        this.validateChars(content);
        if (!scanner.consumeStringFast('?>')) {
          throw this.error('Unterminated processing instruction');
        }
        return this.addNode(
          new XmlProcessingInstruction_js_1.XmlProcessingInstruction(
            name,
            normalizeLineBreaks(content)
          ),
          startIndex
        );
      }
      /**
       * Consumes a prolog if possible.
       *
       * @returns Whether a prolog was consumed.
       * @see https://www.w3.org/TR/2008/REC-xml-20081126/#sec-prolog-dtd
       */
      consumeProlog() {
        let { scanner } = this;
        let startIndex = scanner.charIndex;
        this.consumeXmlDeclaration();
        while (this.consumeMisc()) {}
        if (this.consumeDoctypeDeclaration()) {
          while (this.consumeMisc()) {}
        }
        return startIndex < scanner.charIndex;
      }
      /**
       * Consumes a public identifier literal if possible.
       *
       * @returns
       *   Value of the public identifier literal minus quotes, or `false` if
       *   nothing was consumed. An empty string indicates that a public id literal
       *   was consumed but was empty.
       *
       * @see https://www.w3.org/TR/2008/REC-xml-20081126/#NT-PubidLiteral
       */
      consumePubidLiteral() {
        let startIndex = this.scanner.charIndex;
        let value = this.consumeSystemLiteral();
        if (value !== false && !/^[-\x20\r\na-zA-Z0-9'()+,./:=?;!*#@$_%]*$/.test(value)) {
          this.scanner.reset(startIndex);
          throw this.error('Invalid character in public identifier');
        }
        return value;
      }
      /**
       * Consumes a reference if possible.
       *
       * This differs from `consumeContentReference()` in that a consumed reference
       * will be returned rather than added to the document.
       *
       * @returns
       *   Parsed reference value, or `false` if nothing was consumed (to
       *   distinguish from a reference that resolves to an empty string).
       *
       * @see https://www.w3.org/TR/2008/REC-xml-20081126/#NT-Reference
       */
      consumeReference() {
        let { scanner } = this;
        if (!scanner.consumeStringFast('&')) {
          return false;
        }
        let ref = scanner.consumeMatchFn(syntax.isReferenceChar);
        if (scanner.consume() !== ';') {
          throw this.error('Unterminated reference (a reference must end with `;`)');
        }
        let parsedValue;
        if (ref[0] === '#') {
          let codePoint = ref[1] === 'x' ? parseInt(ref.slice(2), 16) : parseInt(ref.slice(1), 10);
          if (isNaN(codePoint)) {
            throw this.error('Invalid character reference');
          }
          if (!syntax.isXmlCodePoint(codePoint)) {
            throw this.error('Character reference resolves to an invalid character');
          }
          parsedValue = String.fromCodePoint(codePoint);
        } else {
          parsedValue = syntax.predefinedEntities[ref];
          if (parsedValue === void 0) {
            let { ignoreUndefinedEntities, resolveUndefinedEntity } = this.options;
            let wrappedRef = `&${ref};`;
            if (resolveUndefinedEntity) {
              let resolvedValue = resolveUndefinedEntity(wrappedRef);
              if (resolvedValue !== null && resolvedValue !== void 0) {
                let type = typeof resolvedValue;
                if (type !== 'string') {
                  throw new TypeError(
                    `\`resolveUndefinedEntity()\` must return a string, \`null\`, or \`undefined\`, but returned a value of type ${type}`
                  );
                }
                return resolvedValue;
              }
            }
            if (ignoreUndefinedEntities) {
              return wrappedRef;
            }
            scanner.reset(-wrappedRef.length);
            throw this.error(`Named entity isn't defined: ${wrappedRef}`);
          }
        }
        return parsedValue;
      }
      /**
       * Consumes a `SystemLiteral` if possible.
       *
       * A `SystemLiteral` is similar to an attribute value, but allows the
       * characters `<` and `&` and doesn't replace references.
       *
       * @returns
       *   Value of the `SystemLiteral` minus quotes, or `false` if nothing was
       *   consumed. An empty string indicates that a `SystemLiteral` was consumed
       *   but was empty.
       *
       * @see https://www.w3.org/TR/2008/REC-xml-20081126/#NT-SystemLiteral
       */
      consumeSystemLiteral() {
        let { scanner } = this;
        let quote = scanner.consumeStringFast('"') || scanner.consumeStringFast("'");
        if (!quote) {
          return false;
        }
        let value = scanner.consumeUntilString(quote);
        this.validateChars(value);
        if (!scanner.consumeStringFast(quote)) {
          throw this.error('Missing end quote');
        }
        return value;
      }
      /**
       * Consumes one or more whitespace characters if possible.
       *
       * @returns Whether any whitespace characters were consumed.
       * @see https://www.w3.org/TR/2008/REC-xml-20081126/#white
       */
      consumeWhitespace() {
        return !!this.scanner.consumeMatchFn(syntax.isWhitespace);
      }
      /**
       * Consumes an XML declaration if possible.
       *
       * @returns Whether an XML declaration was consumed.
       * @see https://www.w3.org/TR/2008/REC-xml-20081126/#NT-XMLDecl
       */
      consumeXmlDeclaration() {
        let { scanner } = this;
        let startIndex = scanner.charIndex;
        if (!scanner.consumeStringFast('<?xml')) {
          return false;
        }
        if (!this.consumeWhitespace()) {
          throw this.error('Invalid XML declaration');
        }
        let version =
          !!scanner.consumeStringFast('version') &&
          this.consumeEqual() &&
          this.consumeSystemLiteral();
        if (version === false) {
          throw this.error('XML version is missing or invalid');
        } else if (!/^1\.[0-9]+$/.test(version)) {
          throw this.error('Invalid character in version number');
        }
        let encoding;
        let standalone;
        if (this.consumeWhitespace()) {
          encoding =
            !!scanner.consumeStringFast('encoding') &&
            this.consumeEqual() &&
            this.consumeSystemLiteral();
          if (encoding) {
            this.consumeWhitespace();
          }
          standalone =
            !!scanner.consumeStringFast('standalone') &&
            this.consumeEqual() &&
            this.consumeSystemLiteral();
          if (standalone) {
            if (standalone !== 'yes' && standalone !== 'no') {
              throw this.error('Only "yes" and "no" are permitted as values of `standalone`');
            }
            this.consumeWhitespace();
          }
        }
        if (!scanner.consumeStringFast('?>')) {
          throw this.error('Invalid or unclosed XML declaration');
        }
        return this.options.preserveXmlDeclaration
          ? this.addNode(
              new XmlDeclaration_js_1.XmlDeclaration(
                version,
                encoding || void 0,
                standalone || void 0
              ),
              startIndex
            )
          : true;
      }
      /**
       * Returns an `XmlError` for the current scanner position.
       */
      error(message) {
        let { scanner } = this;
        return new XmlError_js_1.XmlError(message, scanner.charIndex, scanner.string);
      }
      /**
       * Throws an invalid character error if any character in the given _string_
       * isn't a valid XML character.
       */
      validateChars(string) {
        let { length } = string;
        for (let i = 0; i < length; ++i) {
          let cp = string.codePointAt(i);
          if (!syntax.isXmlCodePoint(cp)) {
            this.scanner.reset(-([...string].length - i));
            throw this.error('Invalid character');
          }
          if (cp > 65535) {
            i += 1;
          }
        }
      }
    };
    exports.Parser = Parser;
    function normalizeLineBreaks(text) {
      let i = 0;
      while ((i = text.indexOf('\r', i)) !== -1) {
        text =
          text[i + 1] === '\n'
            ? text.slice(0, i) + text.slice(i + 1)
            : text.slice(0, i) + '\n' + text.slice(i + 1);
      }
      return text;
    }
  },
});

// node_modules/@rgrove/parse-xml/dist/lib/types.js
var require_types = __commonJS({
  'node_modules/@rgrove/parse-xml/dist/lib/types.js'(exports) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
  },
});

// node_modules/@rgrove/parse-xml/dist/index.js
var require_dist = __commonJS({
  'node_modules/@rgrove/parse-xml/dist/index.js'(exports) {
    'use strict';
    var __createBinding =
      (exports && exports.__createBinding) ||
      (Object.create
        ? function (o, m, k, k2) {
            if (k2 === void 0) k2 = k;
            var desc = Object.getOwnPropertyDescriptor(m, k);
            if (!desc || ('get' in desc ? !m.__esModule : desc.writable || desc.configurable)) {
              desc = {
                enumerable: true,
                get: function () {
                  return m[k];
                },
              };
            }
            Object.defineProperty(o, k2, desc);
          }
        : function (o, m, k, k2) {
            if (k2 === void 0) k2 = k;
            o[k2] = m[k];
          });
    var __exportStar =
      (exports && exports.__exportStar) ||
      function (m, exports2) {
        for (var p in m)
          if (p !== 'default' && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.parseXml =
      exports.XmlText =
      exports.XmlProcessingInstruction =
      exports.XmlNode =
      exports.XmlError =
      exports.XmlElement =
      exports.XmlDocumentType =
      exports.XmlDocument =
      exports.XmlDeclaration =
      exports.XmlComment =
      exports.XmlCdata =
        void 0;
    var Parser_js_1 = require_Parser();
    __exportStar(require_types(), exports);
    var XmlCdata_js_1 = require_XmlCdata();
    Object.defineProperty(exports, 'XmlCdata', {
      enumerable: true,
      get: function () {
        return XmlCdata_js_1.XmlCdata;
      },
    });
    var XmlComment_js_1 = require_XmlComment();
    Object.defineProperty(exports, 'XmlComment', {
      enumerable: true,
      get: function () {
        return XmlComment_js_1.XmlComment;
      },
    });
    var XmlDeclaration_js_1 = require_XmlDeclaration();
    Object.defineProperty(exports, 'XmlDeclaration', {
      enumerable: true,
      get: function () {
        return XmlDeclaration_js_1.XmlDeclaration;
      },
    });
    var XmlDocument_js_1 = require_XmlDocument();
    Object.defineProperty(exports, 'XmlDocument', {
      enumerable: true,
      get: function () {
        return XmlDocument_js_1.XmlDocument;
      },
    });
    var XmlDocumentType_js_1 = require_XmlDocumentType();
    Object.defineProperty(exports, 'XmlDocumentType', {
      enumerable: true,
      get: function () {
        return XmlDocumentType_js_1.XmlDocumentType;
      },
    });
    var XmlElement_js_1 = require_XmlElement();
    Object.defineProperty(exports, 'XmlElement', {
      enumerable: true,
      get: function () {
        return XmlElement_js_1.XmlElement;
      },
    });
    var XmlError_js_1 = require_XmlError();
    Object.defineProperty(exports, 'XmlError', {
      enumerable: true,
      get: function () {
        return XmlError_js_1.XmlError;
      },
    });
    var XmlNode_js_1 = require_XmlNode();
    Object.defineProperty(exports, 'XmlNode', {
      enumerable: true,
      get: function () {
        return XmlNode_js_1.XmlNode;
      },
    });
    var XmlProcessingInstruction_js_1 = require_XmlProcessingInstruction();
    Object.defineProperty(exports, 'XmlProcessingInstruction', {
      enumerable: true,
      get: function () {
        return XmlProcessingInstruction_js_1.XmlProcessingInstruction;
      },
    });
    var XmlText_js_1 = require_XmlText();
    Object.defineProperty(exports, 'XmlText', {
      enumerable: true,
      get: function () {
        return XmlText_js_1.XmlText;
      },
    });
    function parseXml2(xml, options) {
      return new Parser_js_1.Parser(xml, options).document;
    }
    exports.parseXml = parseXml2;
  },
});

// src/scipy.organization.ts
import { fileError } from 'myst-common';
import fs from 'fs';
import { u } from 'unist-builder';
var scipyOrganization = {
  name: 'scipy:organization',
  doc: 'Parse the organization data for a SciPy conference from json metadata.',
  arg: {
    type: String,
    required: true,
    doc: 'The path to the scipy_proc.json metadata file.',
  },
  options: {},
  validate(data, vfile) {
    if (!fs.existsSync(String(data.arg))) {
      fileError(vfile, `the file specified does not exist: ${data.arg}.`);
    }
    const json = JSON.parse(fs.readFileSync(String(data.arg), 'utf-8'));
    if (!json.organization) {
      fileError(vfile, `the organization key is missing from the json file.`);
    }
    return {
      ...data,
      node: {
        ...data.node,
        data: {
          json: json.organization,
        },
      },
    };
  },
  run(data) {
    const { json } = data.node.data;
    return [
      ...json.map((item) => {
        return u(
          'block',
          {
            data: {
              heading: item.name.trim(),
              items: item.members.map((member) => {
                return {
                  name: member.name,
                  affiliation: member.org,
                };
              }),
            },
          },
          [
            u('heading', { depth: 2 }, [u('text', item.name.trim())]),
            u(
              'list',
              { ordered: false },
              item.members.map((member) => {
                if (member.org) {
                  return u('listItem', [
                    u('text', member.name),
                    u('emphasis', [u('text', `, ${member.org}`)]),
                  ]);
                }
                return u('listItem', [u('text', member.name)]);
              })
            ),
          ]
        );
      }),
    ];
  },
};

// src/scipy.students.ts
import { fileError as fileError2, fileInfo } from 'myst-common';
import fs2 from 'fs';
import { u as u2 } from 'unist-builder';
function studentToMdast(student) {
  if (student.org) {
    return u2('listItem', [
      u2('text', student.name),
      u2('emphasis', [u2('text', `, ${student.org}`)]),
    ]);
  }
  return u2('listItem', [u2('text', student.name)]);
}
function studentToCurvenoteMetadata(student) {
  return {
    name: student.name,
    affiliation: student.org,
  };
}
var scipyStudents = {
  name: 'scipy:students',
  doc: 'Parse the student data for a SciPy conference from json metadata.',
  arg: {
    type: String,
    required: true,
    doc: 'The path to the scipy_proc.json metadata file.',
  },
  options: {},
  validate(data, vfile) {
    if (!fs2.existsSync(String(data.arg))) {
      fileError2(vfile, `the file specified does not exist: ${data.arg}.`);
    }
    const json = JSON.parse(fs2.readFileSync(String(data.arg), 'utf-8'));
    const { scipy_scholarship, diversity_scholarship } = json;
    if (!scipy_scholarship) {
      fileError2(vfile, `the scipy_scholarship key is missing from the json file.`);
    }
    if (!diversity_scholarship || diversity_scholarship.length === 0) {
      fileInfo(vfile, `no diversity_scholarship items found, skipping.`);
    }
    return {
      ...data,
      node: {
        ...data.node,
        data: {
          json: {
            scipy_scholarship,
            diversity_scholarship:
              diversity_scholarship && diversity_scholarship.length > 0
                ? diversity_scholarship
                : void 0,
          },
        },
      },
    };
  },
  run(data) {
    const { json } = data.node.data;
    const nodes = [
      u2(
        'block',
        {
          data: {
            heading: 'Scholarship Recipients',
            items: json.scipy_scholarship.map(studentToCurvenoteMetadata),
          },
        },
        [
          u2('heading', { depth: 2, tight: true }, [u2('text', 'Scholarship Recipients')]),
          u2('list', { ordered: false }, json.scipy_scholarship.map(studentToMdast)),
        ]
      ),
    ];
    if (json.diversity_scholarship) {
      nodes.push(
        u2(
          'block',
          {
            data: {
              heading: 'NumFOCUS Diversity Scholarship Recipients',
              items: json.diversity_scholarship.map((student) => {
                return {
                  name: student.name,
                  affiliation: student.org,
                };
              }),
            },
          },
          [
            u2('heading', { depth: 2 }, [u2('text', 'NumFOCUS Diversity Scholarship Recipients')]),
            u2(
              'list',
              { ordered: false },
              json.diversity_scholarship.map((student) => {
                if (student.org) {
                  return u2('listItem', [
                    u2('text', student.name),
                    u2('emphasis', [u2('text', `, ${student.org}`)]),
                  ]);
                }
                return u2('listItem', [u2('text', student.name)]);
              })
            ),
          ]
        )
      );
    }
    return nodes;
  },
};

// src/scipy.slides.ts
import { fileError as fileError3 } from 'myst-common';
import fs3 from 'fs';
import { u as u3 } from 'unist-builder';

// src/utils.ts
import { cardDirective } from 'myst-ext-card';
function createCardDirective(title, body, footer, link, kind = 'curvenoteArticleListItem') {
  const card = cardDirective.run(
    {
      name: 'card',
      arg: title,
      options: { footer, link },
      body,
      node: {
        type: 'mystDirective',
        name: 'card',
        kind,
      },
    },
    void 0,
    void 0
  );
  card[0].kind = kind;
  return card[0];
}

// src/scipy.slides.ts
function createSlidesCardDirective(item, parseMyst) {
  const { title, authors, description, zenodo_url, doi, youtube } = item;
  const body = [];
  if (description) {
    body.push(u3('paragraph', [parseMyst(description)]));
  }
  body.push(
    u3('paragraph', [u3('emphasis', [u3('text', `${authors.map((a) => a.name).join(', ')}`)])])
  );
  const footer = doi ? [u3('emphasis', [u3('text', doi)])] : void 0;
  const link = youtube ?? doi;
  const kind = 'curvenoteExternalListItem';
  const card = createCardDirective([parseMyst(title)], body, footer, link, kind);
  card.data = {
    ...card.data,
    json: {
      title,
      authors,
      description,
      doi,
      zenodo: zenodo_url ?? '',
    },
    parsed: {
      title: parseMyst(title),
      description: description ? parseMyst(description) : void 0,
    },
  };
  return card;
}
function ensureAuthors(item) {
  if (!item.authors || item.authors.length === 0) {
    return item;
  }
  return {
    ...item,
    authors: item.authors.map((author) => {
      if (author.name) {
        return author;
      }
      return { name: author };
    }),
  };
}
var scipySlides = {
  name: 'scipy:slides',
  doc: 'Parse the slides and posters metadata and generate listings.',
  arg: {
    type: String,
    required: true,
    doc: 'The path to the other.json metadata file.',
  },
  options: {},
  validate(data, vfile) {
    if (!fs3.existsSync(String(data.arg))) {
      fileError3(vfile, `the file specified does not exist: ${data.arg}.`);
    }
    const json = JSON.parse(fs3.readFileSync(String(data.arg), 'utf-8'));
    return {
      ...data,
      node: {
        ...data.node,
        data: {
          json,
        },
      },
    };
  },
  run(data, vfile, opts) {
    const { json } = data.node.data;
    const { keynote, slides, posters, tools, lightning } = json;
    const nodes = [];
    if (keynote) {
      nodes.push(
        u3('block', [
          u3('heading', { depth: 2 }, [u3('text', 'Keynote Presentations')]),
          ...keynote
            .map(ensureAuthors)
            .map((item) => createSlidesCardDirective(item, opts.parseMyst)),
        ])
      );
    }
    if (slides) {
      nodes.push(
        u3('block', [
          u3('heading', { depth: 2 }, [u3('text', 'Accepted Talks')]),
          ...slides
            .map(ensureAuthors)
            .map((item) => createSlidesCardDirective(item, opts.parseMyst)),
        ])
      );
    }
    if (posters) {
      nodes.push(
        u3('block', [
          u3('heading', { depth: 2 }, [u3('text', 'Accepted Posters')]),
          ...posters.map((item) => createSlidesCardDirective(item, opts.parseMyst)),
        ])
      );
    }
    if (tools) {
      nodes.push(
        u3('block', [
          u3('heading', { depth: 2 }, [u3('text', 'SciPy Tools Plenaries')]),
          ...tools.map((item) => createSlidesCardDirective(item, opts.parseMyst)),
        ])
      );
    }
    if (lightning) {
      nodes.push(
        u3('block', [
          u3('heading', { depth: 2 }, [u3('text', 'Lightning Talks')]),
          ...lightning.map((item) => createSlidesCardDirective(item, opts.parseMyst)),
        ])
      );
    }
    return nodes.flat();
  },
};

// src/scipy.articles.ts
import { fileError as fileError4 } from 'myst-common';
import fs4 from 'fs';
import { u as u4 } from 'unist-builder';

// node_modules/xast-util-from-xml/lib/index.js
var import_parse_xml = __toESM(require_dist(), 1);

// node_modules/vfile-location/lib/index.js
var search = /\r?\n|\r/g;
function location(file) {
  const value = String(file);
  const indices = [];
  search.lastIndex = 0;
  while (search.test(value)) {
    indices.push(search.lastIndex);
  }
  indices.push(value.length + 1);
  return { toPoint, toOffset };
  function toPoint(offset) {
    let index2 = -1;
    if (typeof offset === 'number' && offset > -1 && offset < indices[indices.length - 1]) {
      while (++index2 < indices.length) {
        if (indices[index2] > offset) {
          return {
            line: index2 + 1,
            column: offset - (index2 > 0 ? indices[index2 - 1] : 0) + 1,
            offset,
          };
        }
      }
    }
  }
  function toOffset(point2) {
    const line = point2 && point2.line;
    const column = point2 && point2.column;
    if (
      typeof line === 'number' &&
      typeof column === 'number' &&
      !Number.isNaN(line) &&
      !Number.isNaN(column) &&
      line - 1 in indices
    ) {
      const offset = (indices[line - 2] || 0) + column - 1 || 0;
      if (offset > -1 && offset < indices[indices.length - 1]) {
        return offset;
      }
    }
  }
}

// node_modules/unist-util-stringify-position/lib/index.js
function stringifyPosition(value) {
  if (!value || typeof value !== 'object') {
    return '';
  }
  if ('position' in value || 'type' in value) {
    return position(value.position);
  }
  if ('start' in value || 'end' in value) {
    return position(value);
  }
  if ('line' in value || 'column' in value) {
    return point(value);
  }
  return '';
}
function point(point2) {
  return index(point2 && point2.line) + ':' + index(point2 && point2.column);
}
function position(pos) {
  return point(pos && pos.start) + '-' + point(pos && pos.end);
}
function index(value) {
  return value && typeof value === 'number' ? value : 1;
}

// node_modules/vfile-message/lib/index.js
var VFileMessage = class extends Error {
  /**
   * Create a message for `reason`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {Options | null | undefined} [options]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | Options | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns
   *   Instance of `VFileMessage`.
   */
  // eslint-disable-next-line complexity
  constructor(causeOrReason, optionsOrParentOrPlace, origin) {
    super();
    if (typeof optionsOrParentOrPlace === 'string') {
      origin = optionsOrParentOrPlace;
      optionsOrParentOrPlace = void 0;
    }
    let reason = '';
    let options = {};
    let legacyCause = false;
    if (optionsOrParentOrPlace) {
      if ('line' in optionsOrParentOrPlace && 'column' in optionsOrParentOrPlace) {
        options = { place: optionsOrParentOrPlace };
      } else if ('start' in optionsOrParentOrPlace && 'end' in optionsOrParentOrPlace) {
        options = { place: optionsOrParentOrPlace };
      } else if ('type' in optionsOrParentOrPlace) {
        options = {
          ancestors: [optionsOrParentOrPlace],
          place: optionsOrParentOrPlace.position,
        };
      } else {
        options = { ...optionsOrParentOrPlace };
      }
    }
    if (typeof causeOrReason === 'string') {
      reason = causeOrReason;
    } else if (!options.cause && causeOrReason) {
      legacyCause = true;
      reason = causeOrReason.message;
      options.cause = causeOrReason;
    }
    if (!options.ruleId && !options.source && typeof origin === 'string') {
      const index2 = origin.indexOf(':');
      if (index2 === -1) {
        options.ruleId = origin;
      } else {
        options.source = origin.slice(0, index2);
        options.ruleId = origin.slice(index2 + 1);
      }
    }
    if (!options.place && options.ancestors && options.ancestors) {
      const parent = options.ancestors[options.ancestors.length - 1];
      if (parent) {
        options.place = parent.position;
      }
    }
    const start = options.place && 'start' in options.place ? options.place.start : options.place;
    this.ancestors = options.ancestors || void 0;
    this.cause = options.cause || void 0;
    this.column = start ? start.column : void 0;
    this.fatal = void 0;
    this.file;
    this.message = reason;
    this.line = start ? start.line : void 0;
    this.name = stringifyPosition(options.place) || '1:1';
    this.place = options.place || void 0;
    this.reason = this.message;
    this.ruleId = options.ruleId || void 0;
    this.source = options.source || void 0;
    this.stack =
      legacyCause && options.cause && typeof options.cause.stack === 'string'
        ? options.cause.stack
        : '';
    this.actual;
    this.expected;
    this.note;
    this.url;
  }
};
VFileMessage.prototype.file = '';
VFileMessage.prototype.name = '';
VFileMessage.prototype.reason = '';
VFileMessage.prototype.message = '';
VFileMessage.prototype.stack = '';
VFileMessage.prototype.column = void 0;
VFileMessage.prototype.line = void 0;
VFileMessage.prototype.ancestors = void 0;
VFileMessage.prototype.cause = void 0;
VFileMessage.prototype.fatal = void 0;
VFileMessage.prototype.place = void 0;
VFileMessage.prototype.ruleId = void 0;
VFileMessage.prototype.source = void 0;

// node_modules/xast-util-from-xml/lib/index.js
function fromXml(value) {
  const loc = location(value);
  let xmlDocument;
  try {
    xmlDocument = (0, import_parse_xml.parseXml)(String(value), {
      // Positional offsets.
      includeOffsets: true,
      // `<![CDATA[>&<]]>`
      preserveCdata: true,
      // `<!--a-->`
      preserveComments: true,
      // `<!DOCTYPE b>` (a specific declaration)
      preserveDocumentType: true,
      // `<?xml?>` (a specific instruction)
      preserveXmlDeclaration: true,
    });
  } catch (error_) {
    const cause =
      /** @type {XmlError} */
      error_;
    const place = loc.toPoint(cause.pos);
    const message = new VFileMessage('Could not parse XML with `@rgrove/parse-xml`', {
      cause,
      place,
      ruleId: 'error',
      source: 'xast-util-from-xml',
    });
    message.fatal = true;
    message.url = 'https://github.com/syntax-tree/xast-util-from-xml#throws';
    throw message;
  }
  const state = { location: loc };
  const root = transformDocument(xmlDocument, state);
  patch(xmlDocument, root, state);
  return root;
}
function transformCdata(node) {
  return { type: 'cdata', value: node.text };
}
function transformComment(node) {
  return { type: 'comment', value: node.content };
}
function transformDocument(node, state) {
  const children = transformChildren(node.children, state);
  return { type: 'root', children };
}
function transformDoctype(node) {
  return {
    type: 'doctype',
    name: node.name,
    public: node.publicId || void 0,
    system: node.systemId || void 0,
  };
}
function transformElement(node, state) {
  const children = transformChildren(node.children, state);
  return {
    type: 'element',
    name: node.name,
    attributes: { ...node.attributes },
    // @ts-expect-error: assume content matches.
    children,
  };
}
function transformInstruction(node) {
  return { type: 'instruction', name: node.name, value: node.content };
}
function transformText(node) {
  return { type: 'text', value: node.text };
}
function transformXmlDeclaration(node) {
  const value = [];
  if (node.version) {
    value.push('version="' + node.version + '"');
  }
  if (node.encoding) {
    value.push('encoding="' + node.encoding + '"');
  }
  if (node.standalone) {
    value.push('standalone="' + node.standalone + '"');
  }
  return { type: 'instruction', name: 'xml', value: value.join(' ') };
}
function transformChildren(children, state) {
  const results = [];
  let index2 = -1;
  while (++index2 < children.length) {
    const from = children[index2];
    let to;
    if (from.type === 'cdata') {
      const node =
        /** @type {XmlCdata} */
        from;
      to = transformCdata(node);
    } else if (from.type === 'comment') {
      const node =
        /** @type {XmlComment} */
        from;
      to = transformComment(node);
    } else if (from.type === 'doctype') {
      const node =
        /** @type {XmlDocumentType} */
        from;
      to = transformDoctype(node);
    } else if (from.type === 'element') {
      const node =
        /** @type {XmlElement} */
        from;
      to = transformElement(node, state);
    } else if (from.type === 'pi') {
      const node =
        /** @type {XmlProcessingInstruction} */
        from;
      to = transformInstruction(node);
    } else if (from.type === 'text') {
      const node =
        /** @type {XmlText} */
        from;
      to = transformText(node);
    } else if (from.type === 'xmldecl') {
      const node =
        /** @type {XmlDeclaration} */
        from;
      to = transformXmlDeclaration(node);
    }
    if (to) {
      patch(from, to, state);
      results.push(to);
    }
  }
  return results;
}
function patch(from, to, state) {
  const start =
    // Doesn’t practically happen as far as I found, but `-1` is used in the
    // code, so let’s keep it in.
    /* c8 ignore next */
    from.start === -1 ? void 0 : state.location.toPoint(from.start);
  const end =
    // Same as above
    /* c8 ignore next */
    from.end === -1 ? void 0 : state.location.toPoint(from.end);
  if (start && end) {
    to.position = { start, end };
  }
}

// src/doiBatchReader.ts
import { selectAll, select } from 'unist-util-select';
import { visit } from 'unist-util-visit';
function toText(node) {
  const texts = [];
  visit(node, 'text', (n) => {
    texts.push(n.value);
  });
  return texts.join(' ');
}
var DoiBatchReader = class {
  tree;
  constructor(xml) {
    this.tree = fromXml(xml);
  }
  get root() {
    return this.tree;
  }
  getHead() {
    const head = select('[name=head]', this.tree);
    const idNode = select('[name=doi_batch_id]', head);
    const timestampNode = select('[name=timestamp]', head);
    const nameNode = select('[name=depositor_name]', head);
    const emailNode = select('[name=email_address]', head);
    return {
      id: toText(idNode),
      timestamp: new Date(1e3 * Number(toText(timestampNode))),
      depositor: {
        name: toText(nameNode),
        email: toText(emailNode),
      },
      registrant: toText(select('[name=registrant]', head)),
    };
  }
  getConferencePaper(entry) {
    const doiNode = select('[name=doi]', entry);
    const doi = doiNode ? toText(doiNode) : null;
    const year = toText(select('[name=year]', entry));
    const title = toText(select('[name=title]', entry));
    const authorNodes = selectAll('[name=contributors] [name=person_name]', entry);
    const authors = authorNodes.map((item) => {
      return {
        name: `${toText(select('[name=given_name]', item))} ${toText(
          select('[name=surname]', item)
        )}`,
      };
    });
    const pages = select('[name=pages]', entry)
      ? [toText(select('[name=first_page]', entry)), toText(select('[name=last_page]', entry))]
      : null;
    return {
      type: entry.name,
      title,
      authors,
      doi,
      year,
      pages,
    };
  }
  getEventMetadata(entry) {
    return {
      type: entry.name,
      name: toText(select('[name=conference_name]', entry)),
      acronym: toText(select('[name=conference_acronym]', entry)),
      location: toText(select('[name=conference_location]', entry)),
      date: toText(select('[name=conference_date]', entry)),
      number: toText(select('[name=conference_number]', entry)),
    };
  }
  getProceedingsSeriesMetadata(entry) {
    return {
      type: entry.name,
      title: toText(select('[name=title]', entry)),
      originalLanguageTitle: toText(select('[name=original_language_title]', entry)),
      issn: toText(select('[name=issn]', entry)),
      publisher: toText(select('[name=publisher_name]', entry)),
      doi: toText(select('[name=doi]', entry)),
      resource: toText(select('[name=resource]', entry)),
    };
  }
  getEntries() {
    const body = select('[name=body]', this.tree);
    const conference = select(`[name=conference]`, body);
    return conference.children.map((e) => {
      switch (e.name) {
        case 'conference_paper':
          return this.getConferencePaper(e);
        case 'event_metadata':
          return this.getEventMetadata(e);
        case 'proceedings_series_metadata':
          return this.getProceedingsSeriesMetadata(e);
        default:
          return {
            type: e.name,
            json: JSON.stringify(e),
          };
      }
    });
  }
};

// src/scipy.articles.ts
function createConferencePaperCardDirective(item, parseMyst, showThumbnail) {
  const { title, authors, doi, year, pages } = item;
  const body = [
    u4('paragraph', [u4('emphasis', [u4('text', `${authors.map((a) => a.name).join(', ')}`)])]),
  ];
  const footer = [u4('emphasis', [u4('text', `doi: ${doi}`)])];
  if (pages) {
    footer.push(u4('emphasis', [u4('text', `, `)]));
    footer.push(u4('emphasis', [u4('text', `pages: ${pages[0]}-${pages[1]}`)]));
  }
  const link = doi;
  const card = createCardDirective(
    [parseMyst(title)],
    body,
    footer,
    link,
    'curvenoteArticleListItem'
  );
  card.data = {
    ...card.data,
    showThumbnail,
    json: item,
    parsed: {
      title: parseMyst(title),
    },
  };
  return card;
}
var scipyArticles = {
  name: 'scipy:articles',
  doc: 'Parse the doibatch.xml file',
  arg: {
    type: String,
    required: true,
    doc: 'The path to the doibatch.xml metadata file.',
  },
  options: {
    'show-thumbnails': {
      type: String,
      required: false,
      doc: 'Show thumbnails on the articles listing',
    },
  },
  validate(data, vfile) {
    if (!fs4.existsSync(String(data.arg))) {
      fileError4(vfile, `the file specified does not exist: ${data.arg}.`);
    }
    const xml = fs4.readFileSync(String(data.arg), 'utf-8');
    return {
      ...data,
      node: {
        ...data.node,
        data: {
          xml,
        },
      },
    };
  },
  run(data, vfile, opts) {
    const { xml } = data.node.data;
    const reader = new DoiBatchReader(xml);
    const entries = reader.getEntries().filter((item) => item.type === 'conference_paper');
    return [
      ...entries.map((entry) =>
        createConferencePaperCardDirective(
          entry,
          opts.parseMyst,
          data.options['show-thumbnails'] === 'true'
        )
      ),
    ];
  },
};

// src/scipy.plugin.ts
var plugin = {
  name: 'SciPy Plugins',
  directives: [scipyOrganization, scipyStudents, scipySlides, scipyArticles],
  roles: [],
  transforms: [],
};
var scipy_plugin_default = plugin;
export { scipy_plugin_default as default };
//# sourceMappingURL=scipy.plugin.mjs.map
