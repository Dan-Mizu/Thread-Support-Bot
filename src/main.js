//dependencies
const fs = require("fs");
const path = require("path");

//get servers
const servers = JSON.parse(
  fs.readFileSync(path.join(__dirname, "./config/servers.json")).toString()
);

//init discord.js
const { Client, Intents } = require("discord.js");

//loop through servers
for (let i = 0; i < servers.length; i++) {
  //init instance
  const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
  });

  //events
  client.on("messageCreate", (message) => {
    if (message.content.includes("ping")) {
      return message.reply("pong");
    }
  });

  //provide Client Token
  client.login(servers[i].client_token);
}