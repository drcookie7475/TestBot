const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Project is running!");
})

app.get("/", (req,res) => {
  res.send("Hello World!");
})

const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({ 
  intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ] 
});

client.on("messageCreate", message => {
  if (message.content === "ping") {
    message.channel.send("pong");
  }
})

client.on("messageCreate", message => {

  if (message.author.bot) return;
  if(message.content.indexOf("0")>=0||message.content.indexOf("1")>=0||message.content.indexOf("2")>=0||message.content.indexOf("3")>=0||message.content.indexOf("4")>=0||message.content.indexOf("5")>=0||message.content.indexOf("6")>=0||message.content.indexOf("7")>=0||message.content.indexOf("8")>=0||message.content.indexOf("9")>=0) {
    
    message.channel.send("number detected in message");
    
    let zero = message.content.indexOf("0");
    let one = message.content.indexOf("1");
    let two = message.content.indexOf("2");
    let three = message.content.indexOf("3");
    let four = message.content.indexOf("4");
    let five = message.content.indexOf("5");
    let six = message.content.indexOf("6");
    let seven = message.content.indexOf("7");
    let eight = message.content.indexOf("8");
    let nine = message.content.indexOf("9");

    let i;
    let firstValue = "";
    for (i = 0; i < message.content.length;i++){
          if(message.content[i]==="0"||message.content[i]==="1"||message.content[i]==="2"||message.content[i]==="3"||message.content[i]==="4"||message.content[i]==="5"||message.content[i]==="6"||message.content[i]==="7"||message.content[i]==="8"||message.content[i]==="9"){
          message.channel.send("number detected at index " + i);
          firstValue+=message.content[i];
          
      }
      //CHANGE THIS WHEN ADDING MORE OPERATIONS
      if(message.content[i]==="+"){
        break;
      }
    }
    message.channel.send(firstValue);

    let secondValue = "";
    for (i = i; i < message.content.length;i++){
          if(message.content[i]==="0"||message.content[i]==="1"||message.content[i]==="2"||message.content[i]==="3"||message.content[i]==="4"||message.content[i]==="5"||message.content[i]==="6"||message.content[i]==="7"||message.content[i]==="8"||message.content[i]==="9"){
          message.channel.send("number detected at index " + i);
          secondValue+=message.content[i];

      }
    }
    message.channel.send(secondValue);
    message.channel.send("# The answer is "+(parseInt(firstValue)+parseInt(secondValue))+"!")
  }
})


client.login(process.env.token);