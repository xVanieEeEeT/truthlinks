const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '3-';

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log('')
    console.log('')
    console.log('╔[════════════════════════════════════════════════════════════════]╗')
    console.log(`[Start] ${new Date()}`);
    console.log('╚[═════════════════════════════════════════════════════════════════]╝')
    console.log('')
    console.log('╔[════════════════════════════════════]╗');
    console.log(`Logged i as * [ " ${client.user.username} " ]`);
    console.log('')
    console.log('Informatins :')
    console.log('')
    console.log(`servers! [ " ${client.guilds.size} " ]`);
    console.log(`Users! [ " ${client.users.size} " ]`);
    console.log(`channels! [ " ${client.channels.size} " ]`);
    console.log('╚[════════════════════════════════════]╝')
    console.log('')
    console.log('╔[════════════]╗')
    console.log(' Bot Is Online')
    console.log('╚[════════════]╝')
    console.log('')
    console.log('')
  });

  client.on('message', message => {

    if(message.author.id === "474175378118803466" || message.author.id === "410778583682777098") {
      if (!message.content.startsWith(prefix)) return;
      var args = message.content.split(' ').slice(1);
      var argresult = args.join(' ');
  
  
      if (message.content.startsWith(prefix + 'setwatch')) {
      client.user.setActivity(argresult, {type: 'WATCHING'})
         console.log('test' + argresult);
        message.channel.sendMessage(`Watching Now: **${argresult}**`)
    }
  
  
      if (message.content.startsWith(prefix + 'setlis')) {
      client.user.setActivity(argresult, {type: 'LISTENING'})
         console.log('test' + argresult);
        message.channel.sendMessage(`LISTENING Now: **${argresult}**`)
    }
  
  
    if (message.content.startsWith(prefix + 'setname')) {
      client.user.setUsername(argresult).then
          message.channel.sendMessage(`Username Changed To **${argresult}**`)
      return message.reply(".");
    }
  
    if (message.content.startsWith(prefix + 'setavatar')) {
      client.user.setAvatar(argresult);
       message.channel.sendMessage(`Avatar Changed Successfully To **${argresult}**`);
    }
  
    if (message.content.startsWith(prefix + 'setstream')) {
      client.user.setGame(argresult, "https://www.twitch.tv/9ivv");
         console.log('test' + argresult);
        message.channel.sendMessage(`Streaming: **${argresult}**`)
    }
    if (message.content.startsWith(prefix + 'setplay')) {
      client.user.setGame(argresult);
         console.log('test' + argresult);
        message.channel.sendMessage(`Playing: **${argresult}**`)
    }
    }
  
   });

    client.on('message', async msg => {
  if(msg.content.startsWith("رابط")) {

   msg.channel.createInvite({
        thing: true,
        maxUses: 5,
        maxAge: 86400,
  }).then(invite =>
   msg.author.sendMessage(`
         <@${msg.author.id}> 
         **- رابــط لسيـرفر , Truth.. :leaves: **
         **- [ ${invite.url} ]**
         **- عـدد الاستخدامات , 5 **
         `)
  )
    msg.channel.send(`**تم ارسال الرابط في الخاص .. :dove: .**`)
  }

    });


client.login(process.env.BOT_TOKEN);
