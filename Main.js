//This is the main code of Dirdean.js
//Bot Default Constants
const Commando = require("discord.js-commando");
const Bot = new Commando.Client();


//Default Commands
Bot.on("message", (message) => {

    if(message.content == ">> ?") {
        message.reply(
            ">> About - Provides information about Alder.",
            ">> Bot - Shows a list of Alder's commands.",
            ">> Roles - Displays all roles.",
            ">> Channel - Provides some information about the channel."
        );
    }
    if(message.content == ">> Salut") {
        message.channel.sendMessage("Master, I'm pleased you called, how can I serve you? ");
    }
});

//Normal Use Commands




Bot.login("Mzk4NTEwMDEwMzczNzY3MTc4.DS_nzQ.ZtQLhua6peB2q93mB0FUUUz2imI");
console.log("AlderBot is Online!");