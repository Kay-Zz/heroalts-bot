
const Discord = require('discord.js');

const client = new Discord.Client();
const prefix = '-';

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'ping') {
		message.channel.send('Pong.');
	} else if (command === 'beep') {
		message.channel.send('Boop.');
	}else if (command === 'stock') {
        const exampleEmbed = new Discord.MessageEmbed()
	    .setColor('#0099ff')
	    .setTitle('STOCK')
	    .setURL('https://fightalts.com')
	    .setAuthor('FightAlts', 'https://i.imgur.com/8CBZSmK.png', 'https://discord.js.org')
	    .setDescription('Alts')
	    .setThumbnail('https://i.imgur.com/8CBZSmK.png')
	    .addFields(
			{ name: 'Non Full Access', value: '0' },
			{ name: 'Semi Full Access', value: '0' },
			{ name: 'Mail Full Access', value: '0' },
			{ name: 'Unmigrated Full Access', value: '0' },
			{ name: 'Steam', value: '1' },
			{ name: 'Hulu', value: '0' },
			{ name: 'Netflix', value: '1' },
			{ name: 'VPN', value: '0' },
			{ name: 'MFA UNBANNED', value: '0' },
			{ name: 'Non Full Access | Hypixel 21+', value: '0' },

	    	
	    )
        message.channel.send(exampleEmbed);
	}
});

client.login("NzM3NjE0ODcyNzE1NDYwNjI5.Xx_7YQ.pEGtlRsyFy2acXNtJiu3WPLSzwo");