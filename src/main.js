//get servers
const server_data = require("./config/server_data.json");

//init discord.js
const { Client, Intents } = require("discord.js");

//loop through servers
for (let i = 0; i < server_data.length; i++) {
  //init instance
  const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
  });

  //create list of accepted channels
  let channel_list = [];
  for (let i2 = 0; i2 < server_data[i].channels.length; i2++) {
    channel_list.push(server_data[i].channels[i2].channel_id);
  };

  //events
  let sent_messages = [];
  client.on('ready', client => {
    for (let i2 = 0; i2 < channel_list.length; i2++) {
      //remove older images
      if (sent_messages) {
        for (let i3 = 0; i3 < sent_messages.length; i3++) {
          channel.messages.fetch(sent_messages[i3]).then(message => message.delete());
        }
      };

      //send new images
      client.channels.fetch(channel_list[i2]).then(channel => {
        channel.send({ files: ['./resources/create_thread.png'] }).then(message => {
          //store message id
          sent_messages.push(message.id);
        });
      });

      //DEBUG
      console.log(sent_messages)
    }
  });

  //provide Client Token
  client.login(server_data[i].client_token);
}