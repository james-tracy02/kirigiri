
require('dotenv').config();
const Discord = require('discord.js');
const AlterEgo = require('alter-ego.js');
const events = require('./event');
const commands = require('./command');
const client = new Discord.Client();

new AlterEgo(client)
  .setPrefix('k.')
  .setName('Kirigiri Bot')
  .setDescription('I let you quicky search for images.')
  .setColor('#D7B7D1')
  .setOwnerId('265902301443653644')
  .setInvite('https://discordapp.com/api/oauth2/authorize?client_id=682095307332517890&permissions=248832&scope=bot')
  .setEvents(events)
  .setCommands(commands)
  .execute();
