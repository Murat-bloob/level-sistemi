const Discord = require('discord.js');
const qdb = require('quick.db');
exports.run = async(client, message, args) => {

  if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(
  new Discord.MessageEmbed()
    .setAuthor(`${client.user.username} Seviye Sistemi`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
    .setTitle(":x: Başarısız!")
    .setDescription("Bu komutu kullanabilmek için `ADMINISTRATOR` yetkisine sahip olmalısın!")
    .setFooter(`${message.author.tag} istedi!`, message.author.displayAvatarURL({dynamic: true, format: "png"}))
  )
  var kanal = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
  if(!kanal) return message.channel.send(
  new Discord.MessageEmbed()
    .setAuthor(`${client.user.username} Seviye Sistemi`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
    .setTitle(":x: Başarısız!")
    .setDescription(":warning: Bir kanal belirtmeniz gerekli!")
    .setFooter(`${message.author.tag} istedi!`, message.author.displayAvatarURL({dynamic: true, format: "png"}))
  )
  qdb.set(`seviyelog_${message.guild.id}`, kanal.id)
  return message.channel.send(
  new Discord.MessageEmbed()
    .setAuthor(`${client.user.username} Seviye Sistemi`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
    .setTitle(":white_check_mark: Başarılı!")
    .setDescription(`Seviye Log kanalı <#${kanal.id}> olarak ayarlandı!`)
    .setFooter(`${message.author.tag} istedi!`, message.author.displayAvatarURL({dynamic: true, format: "png"}))
  )
};
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: "seviye-log"
};