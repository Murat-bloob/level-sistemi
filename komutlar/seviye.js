const Discord = require('discord.js');
const qdb = require('quick.db');
const canvacord = require('canvacord');
exports.run = async(client, message, args) => {

  var user = message.mentions.members.first()
  //--\\
  var sınır = qdb.fetch(`sınır_${message.author.id + message.guild.id}`)
  if(!sınır){ var sınır = 250 }
  //--\\
  var xp = qdb.fetch(`xp_${message.author.id + message.guild.id}`)
  //--\\
  var seviye = qdb.fetch(`seviye_${message.author.id + message.guild.id}`)
  if(!seviye){ var seviye = 0 }
  //--\\
  if(!user){
    if(message.author.bot) return message.channel.send(
    new Discord.MessageEmbed()
      .setAuthor(`${client.user.username} Seviye Sistemi`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
      .setTitle(":x: Başarısız!")
      .setDescription(":warning: Botların seviyesi olmaz!")
      .setFooter(`${message.author.tag} istedi!`, message.author.displayAvatarURL({dynamic: true, format: "png"}))
    )
    const rank = new canvacord.Rank()
    .setAvatar(message.author.displayAvatarURL({dynamic: true, format: "png"}))
    .setCurrentXP(xp)
    .setRequiredXP(sınır)
    .setStatus(message.author.presence.status)
    .setProgressBar("#ff0000", "COLOR")
    .setUsername(message.author.username)
    .setLevel(seviye)
    .setRank(0)
    .setDiscriminator(message.author.discriminator);

rank.build()
    .then(data => {
        const attachment = new Discord.MessageAttachment(data, "seviye.jpeg");
        message.channel.send(attachment);
    });
  }
  if(!user) return;
    //--\\
  var sınır = qdb.fetch(`sınır_${user.user.id + message.guild.id}`)
  if(!sınır){ var sınır = 250 }
  //--\\
  if(user){
  var xp = qdb.fetch(`xp_${user.user.id + message.guild.id}`)
  if(!xp){ var xp = 0 }
  //--\\
  var seviye = qdb.fetch(`seviye_${user.user.id + message.guild.id}`)
  if(!seviye){ var seviye = 0 }
  //--\\
  if(user){   
  if(user.user.bot) return message.channel.send(
    new Discord.MessageEmbed()
      .setAuthor(`${client.user.username} Seviye Sistemi`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
      .setTitle(":x: Başarısız!")
      .setDescription(":warning: Botların seviyesi olmaz!")
      .setFooter(`${message.author.tag} istedi!`, message.author.displayAvatarURL({dynamic: true, format: "png"}))
    )
      const rank = new canvacord.Rank()
    .setAvatar(user.user.displayAvatarURL({dynamic: true, format: "png"}))
    .setCurrentXP(xp)
    .setRequiredXP(sınır)
    .setStatus(user.user.presence.status)
    .setProgressBar("#ff0000", "COLOR")
    .setUsername(user.user.username)
    .setLevel(seviye)
    .setRank(0)
    .setDiscriminator(user.user.discriminator);

rank.build()
    .then(data => {
        const attachment = new Discord.MessageAttachment(data, "seviye.jpeg");
        message.channel.send(attachment);
    });
  }  }
  };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['xp', 'level', 'rank'],
  permLevel: 0
};
exports.help = {
  name: "seviye"
}