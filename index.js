const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", function (){
    console.log(`${bot.user.username} Is Online!`);
});

bot.login(process.env.token);

bot.on('message', msg=>{
    if(msg.content ===  "Hello"){
        msg.reply('Hallo Saya Ryanpro!');
    }
})

bot.on('message', msg=>{
    if(msg.content === "P"){
        msg.reply('Salam Yang Bener!');
    }
})

bot.on('message', msg=>{
    if(msg.content === "Invite"){
        msg.reply('Invite Aku Ke Server Pribadimu Dengan Link ini https://bit.ly/2XqnL8U');
    }
})

bot.on('message', message=>{
    let args = message.content.substring(PREFIX.lenght).split(" ");

    switch(args[0]){
        case 'info':
            message.channel.send('Bot Made By MrCoral2 (Ryanpro) :)')
            break;
        case 'clear':
            if(!args[0]) return message.reply('1-100')
            message.channel.bulkDelete(args[1]);
            break;
    }
})