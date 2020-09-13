const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 
// The ping pong game
client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

// InfoCards
client.on('message', message => {

    if (message.content === 's!info Dimas') {

       message.reply('Ms. Dimas: All Stars ELA Teacher');

       }
});

client.on('message', message => {

    if (message.content === 's!info Chiu') {

       message.reply('Mr. Chiu: All Stars Math Teacher');

       }
});

client.on('message', message => {

    if (message.content === 's!info Dwyer') {

       message.reply('Mrs. Dwyer: All Stars Science Teacher');

       }
});

client.on('message', message => {

    if (message.content === 's!info Mrs. Haughey') {

       message.reply('Mrs. Haughey: All Stars History Teacher');

       }
});

// help message
client.on('message', message => {

    if (message.content === 's!help') {

       message.author.send("Commands: \n r!info <Teacher Last Name>. MAKE SURE YOU CAPITALIZE! \n AAAAAAANDDDD... That's it so far. In development.");

       }
});



 



client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
