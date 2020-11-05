const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on("ready", () =>{
    console.log(`Logged in as SDF Bot`);
    client.user.setPresence({
        status: "online",  //You can show online, idle....
        game: {
            name: "Using s!help",  //The message shown
            type: "STREAMING" //PLAYING: WATCHING: LISTENING: STREAMING:
        }
    });
 });
 
// The ping pong game
client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

// InfoCards
client.on('message', message => {

    if (message.content.toLowerCase('s!info dimas')) {

       message.reply('`Ms. Dimas: All Stars ELA Teacher`');

       }
});

// Another info card
client.on('message', message => {

if (message.content.toLowerCase('s!info chiu'))  {
 message.reply("`Mr. Chiu: All Stars Math Teacher`")
}

       }
});

client.on('message', message => {

    if (message.content.toLowerCase('s!info Dwyer')) {

       message.reply('`Mrs. Dwyer: All Stars Science Teacher`');

       }
});

client.on('message', message => {

    if (message.content.toLowerCase('s!info Mrs. Haughey')) {

       message.reply('`Mrs. Haughey: All Stars History Teacher`');

       }
});

// help messages
client.on('message', message => {

    if (message.content.toLowerCase('s!meme')) {
     const attachment = new footballmeme('https://i.imgur.com/w3duR07.png');
     message.channel.send(footballmeme)

       }
});



client.on('message', message => {

    if (message.content === 's!help') {

       message.author.send("`Commands: \n r!info <Teacher Last Name>. \n AAAAAAANDDDD... That's it so far. In development.`");

       }
});

client.on('message', message => {

    if (message.content === 's!about') {

       message.channel.send("`Coded by 3nigma212 \n Beta tested by 3nigma212 \n Still a WIP.`");

       }
});




 



client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
