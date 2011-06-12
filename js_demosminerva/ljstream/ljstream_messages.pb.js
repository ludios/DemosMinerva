// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: demosminerva/ljstream_messages.proto

/**
 * @fileoverview Generated Protocol Buffer code for file demosminerva/ljstream_messages.proto.
 */

goog.provide('ljstream.NewPost');
goog.provide('ljstream.SetPreferences');

goog.require('goog.proto2.Message');

/**
 * Message NewPost.
 * @constructor
 * @extends {goog.proto2.Message}
 */
ljstream.NewPost = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(ljstream.NewPost, goog.proto2.Message);


/**
 * Gets the value of the title field.
 * @return {?string} The value.
 */
ljstream.NewPost.prototype.getTitle = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the title field or the default value if not set.
 * @return {string} The value.
 */
ljstream.NewPost.prototype.getTitleOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the title field.
 * @param {string} value The value.
 */
ljstream.NewPost.prototype.setTitle = function(value) {
  this.set$Value(1, /** @type {Object} */ (value));
};


/**
 * Returns whether the title field has a value.
 * @return {boolean} true if the field has a value.
 */
ljstream.NewPost.prototype.hasTitle = function() {
  return this.has$Value(1);
};


/**
 * Gets the number of values in the title field.
 * @return {number}
 */
ljstream.NewPost.prototype.titleCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the title field.
 */
ljstream.NewPost.prototype.clearTitle = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the url field.
 * @return {?string} The value.
 */
ljstream.NewPost.prototype.getUrl = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the url field or the default value if not set.
 * @return {string} The value.
 */
ljstream.NewPost.prototype.getUrlOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the url field.
 * @param {string} value The value.
 */
ljstream.NewPost.prototype.setUrl = function(value) {
  this.set$Value(2, /** @type {Object} */ (value));
};


/**
 * Returns whether the url field has a value.
 * @return {boolean} true if the field has a value.
 */
ljstream.NewPost.prototype.hasUrl = function() {
  return this.has$Value(2);
};


/**
 * Gets the number of values in the url field.
 * @return {number}
 */
ljstream.NewPost.prototype.urlCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the url field.
 */
ljstream.NewPost.prototype.clearUrl = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the body field.
 * @return {?string} The value.
 */
ljstream.NewPost.prototype.getBody = function() {
  return /** @type {?string} */ (this.get$Value(3));
};


/**
 * Gets the value of the body field or the default value if not set.
 * @return {string} The value.
 */
ljstream.NewPost.prototype.getBodyOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the body field.
 * @param {string} value The value.
 */
ljstream.NewPost.prototype.setBody = function(value) {
  this.set$Value(3, /** @type {Object} */ (value));
};


/**
 * Returns whether the body field has a value.
 * @return {boolean} true if the field has a value.
 */
ljstream.NewPost.prototype.hasBody = function() {
  return this.has$Value(3);
};


/**
 * Gets the number of values in the body field.
 * @return {number}
 */
ljstream.NewPost.prototype.bodyCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the body field.
 */
ljstream.NewPost.prototype.clearBody = function() {
  this.clear$Field(3);
};


/**
 * Gets the value of the num_images field.
 * @return {?number} The value.
 */
ljstream.NewPost.prototype.getNumImages = function() {
  return /** @type {?number} */ (this.get$Value(4));
};


/**
 * Gets the value of the num_images field or the default value if not set.
 * @return {number} The value.
 */
ljstream.NewPost.prototype.getNumImagesOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(4));
};


/**
 * Sets the value of the num_images field.
 * @param {number} value The value.
 */
ljstream.NewPost.prototype.setNumImages = function(value) {
  this.set$Value(4, /** @type {Object} */ (value));
};


/**
 * Returns whether the num_images field has a value.
 * @return {boolean} true if the field has a value.
 */
ljstream.NewPost.prototype.hasNumImages = function() {
  return this.has$Value(4);
};


/**
 * Gets the number of values in the num_images field.
 * @return {number}
 */
ljstream.NewPost.prototype.numImagesCount = function() {
  return this.count$Values(4);
};


/**
 * Clears the values in the num_images field.
 */
ljstream.NewPost.prototype.clearNumImages = function() {
  this.clear$Field(4);
};


/**
 * Gets the value of the lang field.
 * @return {?string} The value.
 */
ljstream.NewPost.prototype.getLang = function() {
  return /** @type {?string} */ (this.get$Value(5));
};


/**
 * Gets the value of the lang field or the default value if not set.
 * @return {string} The value.
 */
ljstream.NewPost.prototype.getLangOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(5));
};


/**
 * Sets the value of the lang field.
 * @param {string} value The value.
 */
ljstream.NewPost.prototype.setLang = function(value) {
  this.set$Value(5, /** @type {Object} */ (value));
};


/**
 * Returns whether the lang field has a value.
 * @return {boolean} true if the field has a value.
 */
ljstream.NewPost.prototype.hasLang = function() {
  return this.has$Value(5);
};


/**
 * Gets the number of values in the lang field.
 * @return {number}
 */
ljstream.NewPost.prototype.langCount = function() {
  return this.count$Values(5);
};


/**
 * Clears the values in the lang field.
 */
ljstream.NewPost.prototype.clearLang = function() {
  this.clear$Field(5);
};


/**
 * Message SetPreferences.
 * @constructor
 * @extends {goog.proto2.Message}
 */
ljstream.SetPreferences = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(ljstream.SetPreferences, goog.proto2.Message);


/**
 * Gets the value of the include_russian_posts field.
 * @return {?boolean} The value.
 */
ljstream.SetPreferences.prototype.getIncludeRussianPosts = function() {
  return /** @type {?boolean} */ (this.get$Value(1));
};


/**
 * Gets the value of the include_russian_posts field or the default value if not set.
 * @return {boolean} The value.
 */
ljstream.SetPreferences.prototype.getIncludeRussianPostsOrDefault = function() {
  return /** @type {boolean} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the include_russian_posts field.
 * @param {boolean} value The value.
 */
ljstream.SetPreferences.prototype.setIncludeRussianPosts = function(value) {
  this.set$Value(1, /** @type {Object} */ (value));
};


/**
 * Returns whether the include_russian_posts field has a value.
 * @return {boolean} true if the field has a value.
 */
ljstream.SetPreferences.prototype.hasIncludeRussianPosts = function() {
  return this.has$Value(1);
};


/**
 * Gets the number of values in the include_russian_posts field.
 * @return {number}
 */
ljstream.SetPreferences.prototype.includeRussianPostsCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the include_russian_posts field.
 */
ljstream.SetPreferences.prototype.clearIncludeRussianPosts = function() {
  this.clear$Field(1);
};




goog.proto2.Message.set$Metadata(ljstream.NewPost, {
  0 : {
    name: 'NewPost',
    fullName: 'demosminerva.ljstream_messages.NewPost'
  },
  '1' : {
    name: 'title',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  '2' : {
    name: 'url',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  '3' : {
    name: 'body',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  '4' : {
    name: 'num_images',
    fieldType: goog.proto2.Message.FieldType.INT32,
    type: Number
  },
  '5' : {
    name: 'lang',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }});

goog.proto2.Message.set$Metadata(ljstream.SetPreferences, {
  0 : {
    name: 'SetPreferences',
    fullName: 'demosminerva.ljstream_messages.SetPreferences'
  },
  '1' : {
    name: 'include_russian_posts',
    fieldType: goog.proto2.Message.FieldType.BOOL,
    type: Boolean
  }});
