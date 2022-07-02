//init environment variables
require('dotenv').config();

//init discord.js
const { Client, Intents } = require('discord.js');
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.once('ready', () => console.log('Ready!'));

client.on('messageCreate', (message) => {
  if (message.content.includes('ping')) {
    return message.reply('pong');
  }
});

//auth discord bot with client token (always last line)
client.login(process.env.CLIENT_TOKEN);