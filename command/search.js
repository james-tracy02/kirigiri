
require('dotenv').config();
const request = require('request');
const configs = require('../configs.js');
const { RichEmbed } = require('discord.js');

module.exports = function (alterEgo) {
  return {
    meta: {
      name: 'search',
      description: 'Search for google image results.',
      aliases: [],
      usage: `${alterEgo.prefix}search`,
      parameters: [
        {
          name: 'keyword',
          type: {
            type: 'String',
          },
          description: 'The keyword to search for.',
          optional: false,
        },
      ],
    },

    execute: async function (msg, args) {
      request.get(`${configs.searchURL}&key=${process.env.IMG_API_KEY}&q=${args.keyword}&searchType=image`,
      (err, res, body) => {
        if(err) msg.channel.send('Something went wrong.');
        const { items } = JSON.parse(body);
        if(items.length === 0) return msg.channel.send('No results!');

        const i = 0;
        msg.channel.send(new RichEmbed()
          .setColor(alterEgo.color)
          .setTitle(items[i].snippet)
          .setURL(items[i].link)
          .setImage(items[i].link));
      });
    }
  }
};
