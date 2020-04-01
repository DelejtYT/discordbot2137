const Discord = require('discord.js');
const delay = require('delay');
const client = new Discord.Client();

const token = 'Njk0NTE3MTc2MTkwNjMyMDI3.XoNGOw.FLp1YQol_tQN2sIskhph6gHhQ7g';

const PapajChannel = '694542725822939140';

let statusy = ['Żurczan koks', 'Naleśniki witka są zajesbiste', 'JP2GMD', 'Delejt to szef', 'Królestwo Pakosławskie'];
let PapajWarning = '<@&694562071567663144> PAPIEŻOWA!!!'
client.on('ready', () =>{
	console.log('No i wystartował kurwa!');
	
	setInterval(function() {

		let status = statusy[Math.floor(Math.random()*statusy.length)];

		//client.user.setPresence({ game: { name: status }, status: 'online' });

		client.user.setPresence({ activity: { name: status }, status: 'online' });

	}, 10000)
	
		

});

client.on('message', message => {
	if(message.content.startsWith('co'))
		message.channel.send("<:rower:694511100959391795>");
	if(message.content.startsWith('CO'))
		message.channel.send("<:rower:694511100959391795>");
	else if(message.content.startsWith('gdzie'))
		message.channel.send("<:motor:694513026740781058>");
	else if(message.content.startsWith('GDZIE'))
		message.channel.send("<:motor:694513026740781058>");
	if(message.content.startsWith('nie'))
		message.channel.send("milcz k*bieto");
	if(message.content.startsWith('NIE'))
		message.member.send("milcz k*bieto");
	if(message.content.startsWith('zapierdalać'))
		message.channel.send("z materiałem!  " + '<:szefemoji:694508032222298162>');
	if(message.content.startsWith('Zapierdalać'))
		message.channel.send("z materiałem!  " + '<:szefemoji:694508032222298162>');
	if(message.content.startsWith('ZAPIERDALAĆ'))
		message.channel.send("z materiałem!  " + '<:szefemoji:694508032222298162>');
	if(message.content.startsWith('Żuras zrób hahą'))
		message.channel.send("hahą", {
			tts: true
		});
	if(message.content.startsWith('żuras zrób hahą'))
		message.channel.send("hahą", {
		tts: true
		});
	if(message.content.startsWith('!dowódnaszymona'))
		message.member.send('https://cdn.discordapp.com/attachments/320117050171326465/694865028515364874/Screenshot_3.png')
	
	
	//Papajowa
	if(message.content === '!tajnastartkomenda')
		var interval = setInterval(function () {
			message.channel.send(PapajWarning)
		}, 1000 * 60 * 60 * 24)


});



client.login(token);