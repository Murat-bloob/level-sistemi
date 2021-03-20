const Discord = require('discord.js');
const qdb = require('quick.db');
exports.run = async(client, message, args) => {

var eklenecek = qdb.fetch(`eklenecek_${message.guild.id}`)
var makseklencek = qdb.fetch(`001`)
if(!makseklencek){ var makseklencek = 75}
  if(!eklenecek){ var eklenecek = 3 }
if(qdb.has(`premium_${message.guild.id}`)){
var eklencek = Number(args[0])
if(!eklencek) return message.channel.send(
    new Discord.MessageEmbed()
    .setAuthor(`${client.user.username} Seviye Sistemi`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
    .setTitle(":x: Başarısız!")
    .setDescription(`Hey ${message.author}, Bir xp değeri belirtmen gerekli!`)
    .setFooter(`${message.author.tag} istedi!`, message.author.displayAvatarURL({dynamic: true, format: "png"}))
)
  if(eklencek > makseklencek) return message.channel.send(
      new Discord.MessageEmbed()
    .setAuthor(`${client.user.username} Seviye Sistemi`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
    .setTitle(":x: Başarısız!")
    .setDescription(`Hey ${message.author}, Eklenecek xp değer en fazla \`${makseklencek}\` olabilir!`)
    .setFooter(`${message.author.tag} istedi!`, message.author.displayAvatarURL({dynamic: true, format: "png"}))
  )
  qdb.set(`eklenecek_${message.guild.id}`, eklencek)
  return message.channel.send(
      new Discord.MessageEmbed()
    .setAuthor(`${client.user.username} Seviye Sistemi`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
    .setTitle(":white_check_mark: Başarılı!")
    .setDescription(`\`${eklenecek}\` olan mesaj başı xp değeri \`${eklencek}\` olarak değiştirildi!`)
    .setFooter(`${message.author.tag} istedi!`, message.author.displayAvatarURL({dynamic: true, format: "png"}))
    .setFooter("Normal değer 3'dür")
  )

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
  aliases: ['eklenecek-xp'],
  permLevel: 0
};
exports.help = {
  name: "eklenecekxp"
}