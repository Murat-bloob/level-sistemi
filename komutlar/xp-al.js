const Discord = require('discord.js');
const qdb = require('quick.db');
exports.run = async(client, message, args) => {

if(qdb.has(`premium_${message.guild.id}`)){
  var user = message.mentions.members.first();
  if(!user) return message.channel.send(
  new Discord.MessageEmbed()
    .setAuthor(`${client.user.username} Seviye Sistemi`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
    .setTitle(":x: Başarısız!")
    .setDescription(`Hey ${message.author}, Bir kişi belirtmen gerekli!`)
    .setFooter(`${message.author.tag} istedi!`, message.author.displayAvatarURL({dynamic: true, format: "png"}))
  )
  var sınır = qdb.fetch(`sınır_${user.user.id + message.guild.id}`)
  if(!sınır){ var sınır = 250 }
  //--\\
  var xp = qdb.fetch(`xp_${user.user.id + message.guild.id}`)
  if(!xp){ var xp = 0 }
  else {
    var verilcek = Number(args[1])
  if(!verilcek) return message.channel.send(
    new Discord.MessageEmbed()
    .setAuthor(`${client.user.username} Seviye Sistemi`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
    .setTitle(":x: Başarısız!")
    .setDescription(`Hey ${message.author}, Bir xp değeri belirtmen gerekli!`)
    .setFooter(`${message.author.tag} istedi!`, message.author.displayAvatarURL({dynamic: true, format: "png"}))
  )
  if(verilcek > xp) return message.channel.send(
      new Discord.MessageEmbed()
    .setAuthor(`${client.user.username} Seviye Sistemi`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
    .setTitle(":x: Başarısız!")
    .setDescription(`Hey ${message.author}, \`${xp}\` değerinden küçük bir xp değeri belirtmen gerekli!`)
    .setFooter(`${message.author.tag} istedi!`, message.author.displayAvatarURL({dynamic: true, format: "png"}))
  )
    if(verilcek === xp){
      qdb.subtract(`sınır_${user.user.id + message.guild.id}`, 250)
      qdb.subtract(`seviye_${user.user.id + message.guild.id}`, 1)
      qdb.set(`xp_${user.user.id + message.guild.id}`, 1)
      return message.channel.send(
            new Discord.MessageEmbed()
    .setAuthor(`${client.user.username} Seviye Sistemi`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
    .setTitle(":white_check_mark: Başarılı!")
    .setDescription(`<@!${user.user.id}> isimli üyeden başarıyla \`${verilcek}\` xp alındı, seviyesi düştü!`)
    .setFooter(`${message.author.tag} istedi!`, message.author.displayAvatarURL({dynamic: true, format: "png"}))
      )
    }
    else {
      qdb.subtract(`xp_${user.user.id + message.guild.id}`, verilcek)
      return message.channel.send(
            new Discord.MessageEmbed()
    .setAuthor(`${client.user.username} Seviye Sistemi`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
    .setTitle(":white_check_mark: Başarılı!")
    .setDescription(`<@!${user.user.id}> isimli üyeden başarıyla \`${verilcek}\` xp alındı!`)
    .setFooter(`${message.author.tag} istedi!`, message.author.displayAvatarURL({dynamic: true, format: "png"}))
      )
    }
    }
  }
  else return message.channel.send(
  new Discord.MessageEmbed()
    .setAuthor(`${client.user.username} Seviye Sistemi`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
    .setTitle(":x: Başarısız!")
    .setDescription(`Hey ${message.author}, bu komutu kullanabilmek için sunucunuzda \`premium\` sisteminin açık olması lazım.`)
    .setFooter(`${message.author.tag} istedi!`, message.author.displayAvatarURL({dynamic: true, format: "png"}))
  )
};
exports.conf = {
  aliases: ['xpal'],
  permLevel: 0
};
exports.help = {
  name: "xp-al"
}