'use strict';

function setAttribute(name, value) {
  const firstChild = this.getFirstChild();

  return firstChild.setAttribute(name, value);
}

function getAttribute(name) {
  const firstChild = this.getFirstChild();

  return firstChild.getAttribute(name);
}

function clearAttribute(name) {
  const firstChild = this.getFirstChild();

  firstChild.clearAttribute(name);
}

function addAttribute(name, value) { 
  const firstChild = this.getFirstChild();

  firstChild.addAttribute(name, value);
}

function removeAttribute(name) { 
  const firstChild = this.getFirstChild();

  firstChild.removeAttribute(name)
}

function setClass(className) {
  const firstChild = this.getFirstChild();

  firstChild.setClass(className);
}

function addClass(className) {
  const firstChild = this.getFirstChild();

  firstChild.addClass(className);
}

function removeClass(className) {
  const firstChild = this.getFirstChild();

  firstChild.removeClass(className);
}

function toggleClass(className) {
  const firstChild = this.getFirstChild();

  firstChild.toggleClass(className);
}

function hasClass(className) {
  const firstChild = this.getFirstChild();

  return firstChild.hasClass(className);
}

function hasClasses(classNames) {
  const firstChild = this.getFirstChild();

  return firstChild.hasClasses(classNames);
}

function clearClasses() {
  const firstChild = this.getFirstChild();

  firstChild.clearClasses();
}

function getTagName() {
  return null;  ///
}

function setStyle(name, value) {
  const firstChild = this.getFirstChild();

  firstChild.setStyle(name, value);
}

module.exports = {
  setAttribute: setAttribute,
  getAttribute: getAttribute,
  clearAttribute: clearAttribute,
  addAttribute: addAttribute,
  removeAttribute: removeAttribute,
  setClass: setClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  hasClass: hasClass,
  hasClasses: hasClasses,
  clearClasses: clearClasses,
  getTagName: getTagName,
  setStyle: setStyle
};
