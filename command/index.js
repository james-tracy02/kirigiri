
module.exports = function(alterEgo) {
  return {
    search: require('./search.js')(alterEgo),
  }
}
