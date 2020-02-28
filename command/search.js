
require('dotenv').config();
const request = require('request');
const configs = require('../configs.js');
const { listEmoji } = require('../helpers.js');
const { RichEmbed } = require('discord.js');

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

  execute: async function (msg, args) {
    request.get(`${configs.searchURL}&key=${process.env.IMG_API_KEY}&q=${args.keyword}&searchType=image`,
    (err, res, body) => {
      if(err) msg.channel.send('Something went wrong.');
      const { items } = JSON.parse(body);
      if(items.length === 0) return msg.channel.send('No results!');
      const i = Math.floor(Math.random() * items.length);

      msg.channel.send(new RichEmbed()
        .setColor(configs.color)
        .setTitle(items[i].snippet)
        .setURL(items[i].link)
        .setImage(items[i].link));
    });
  }
};
