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

  //update thread helper image on startup
  client.on('ready', client => {
    //loop through allowed channels
    for (let i2 = 0; i2 < channel_list.length; i2++) {
      //update thread helper image in channel
      updateThreadHelperImage(client, channel_list[i2]);
    };
  });

  //update thread helper image whenever new thread is created
  client.on('threadCreate', thread => {
    //if thread was made in an accepted channel
    if (channel_list.includes(thread.parentId)) {
      //update thread helper image in channel
      updateThreadHelperImage(client, thread.parentId);
    }
  });

  //provide client token
  client.login(server_data[i].client_token);
};

//updates thread helper image by deleting old ones and sending a new one
function updateThreadHelperImage(client, channelID) {
  //get bot ID
  let botID = client.user.id;

  //remove older messages
  client.channels.fetch(channelID).then(channel => {
    deletePastMessagesFromUser(botID, channel);
  });

  //send new image
  client.channels.fetch(channelID).then(channel => {
    sendThreadHelperImage(channel);
  });
}

//send thread helper image in this channel
function sendThreadHelperImage(channel) {
  channel.send({ files: ['./resources/create_thread.png'] });
};

//delete all past messages from this bot in this channel
function deletePastMessagesFromUser(userID, channel) {
  channel.messages.fetch({ limit: 100 }).then(messages => {
    messages.forEach(message =>{
      if (message.author.id == userID) {
        message.delete();
      };
    });
  });
};