const Discord = require('discord.js');
const qdb = require('quick.db');
exports.run = async(client, message, args) => {
var sayı = Number(args[0])
if(!sayı) return message.channel.send("Bir sayı belirtmen gerekli.")
qdb.set(`001`, sayı)
  return message.channel.send(`**${sayı}** olarak ayarladım :)`)

};
exports.conf = {
  aliases: ['makseklenecek',"maxeklenecek"],
  permLevel: 0
};
exports.help = {
  name: "maxxp"
}