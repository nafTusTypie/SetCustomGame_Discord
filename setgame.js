const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.on('ready', () => {
  console.log('Zalogowano jako ${client.user.tag}');
});

client.on("message", async message => {
	if(message.author.bot) return;
	if(message.content.indexOf(prefix) !== 0) return;
	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	
	if(command == "setcustomgame") {
		if(message.author.id != client.user.id) {
			return;
		}
		let game = args.join(" ");
		if(!game) game = "";
		await client.user.setActivity(game);
		console.log(`Gra : ${game}`);
	}
	if(command == "setstatus") {
		if(message.author.id != client.user.id) {
			return;
		}
		let status = args.slice(0).join(' ');
		if(!status) status = "online";
		await client.user.setStatus(status);
		console.log(`Status : ${status}`);
	}
});

client.login(config.token);
