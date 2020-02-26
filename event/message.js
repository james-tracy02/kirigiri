
const commands = require('../command');
const parse = require('../parse.js');
const configs = require('../configs.js');
const helpers = require('../helpers.js');

module.exports = function(client) {
  return function(msg) {
    if(msg.author.bot) return;
    if(msg.content.startsWith(configs.prefix)) {
      const cmd = parse(msg.content.substring(configs.prefix.length));
      if(!cmd) return;
      return commands[cmd.type].execute(msg, cmd);
    };
  }
}
