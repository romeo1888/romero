const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = "r!";
const token = 'NjMzMDEyNDU1NjEzOTIzMzM4.XaXtrQ.Z0CFDTZs8BoYUUSQ9NJKQFmiG-8';


bot.on('ready', () =>{
    console.log('Nelz is online!')
    bot.user.setPresence({game: {name:"Sugar Sweet Nightmare"}});
})

bot.on('message', message => {

    if (message.content === `${prefix}test`) {
var testembed = new Discord.RichEmbed() 
.setAuthor("My Biography hope you like:") 
.setThumbnail(bot.user.avatarURL) 
.setColor(0xF8C300)
.addField("Full Username:", "Russell The Bot", true) 
 message.channel.send(testembed);
   };
});
bot.on("guildMemberAdd", (member) => { // Check out previous chapter for information about this event
let guild = member.guild; 
let memberTag = member.user.tag; 
if(guild.systemChannel){
	guild.systemChannel.send(new Discord.RichEmbed() // Creating instance of Discord.RichEmbed
	.setColor(0xF8C300)
	.setTitle("We're super excited to have you on board") // Calling method setTitle on constructor. 
	.setDescription(memberTag + " has joined the guild") // Setting embed description
	.setThumbnail(member.user.displayAvatarURL) // The image on the top right; method requires an url, not a path to file!
	.addField("Members now", member.guild.memberCount) // Adds a field; First parameter is the title and the second is the value.
	.setTimestamp() // Sets a timestamp at the end of the embed
	);
}
});

bot.on('message', message => {
	if (message.content === 'Hi RUSS') {
		message.channel.send('Hi there, I am RUSSELL, a bot of culture. Devoloping my self to be a Music bot. Enjoy your time here on Sugar Sweet Nightmare while I develop my self to PLUS ULTRA.');
	}
});



 bot.login(token);
