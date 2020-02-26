
const configs = require('../configs.js');
const { listEmoji } = require('../helpers.js');

module.exports = {
  meta: {
    command: 'search',
    description: 'Search for google image results.',
    aliases: [],
    usage: `${configs.prefix}search`,
    parameters: {
      keyword: {
        name: 'keyword',
        type: {
          type: 'String',
        },
        description: 'The keyword to search for.',
        optional: false,
      },
    },
  },

  execute: function (msg, args) {
    msg.channel.send(`Results for ${args.keyword}`);
  }
};
