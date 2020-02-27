
const { RichEmbed } = require('discord.js');
const configs = require('../configs.js');
const print = require('../print.js');
const commands = require('./');

module.exports = {
  meta: {
    command: 'help',
    description: 'Display this help message.',
    aliases: [],
    usage: `${configs.prefix}help`,
    parameters: {}
  },

  execute: function (msg) {
    msg.channel.send(new RichEmbed()
    .setColor(configs.color)
    .setTitle(`Kirigiri Bot | Prefix ${configs.prefix}`)
    .setAuthor('Search Bot', msg.client.user.avatarURL)
    .setDescription(
      'I let you quickly search fo images.\n\n' +
      '**Commands**\n' +
      '*Say* `k.info <command>` *to find out more!*\n\n' +
      print.commands(commands))
    .setFooter(`Made by ${configs.owner}`,
    configs.ownerAvatar));
  }
};
