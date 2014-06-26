"use strict"

var slice = require('sliced')

module.exports = function(el, selector) {
  function curried(selector) {
    return queryImmediateSelector(el, selector)
  }
  curried.all = function(selector) {
    return queryImmediateSelectorAll(el, selector)
  }

  if (arguments.length === 2) return queryImmediateSelector(el, selector)
  if (arguments.length === 1) return curried
}

var queryImmediateSelector = function queryImmediateSelector(el, selector) {
  var els = queryImmediateSelectorAll(el, selector)
  return els.pop()
}

var queryImmediateSelectorAll = module.exports.all = function queryImmediateSelectorAll(el, selector) {
  return slice(el.querySelectorAll(selector)).filter(function(child) {
    return child.parentNode === el
  })
}
