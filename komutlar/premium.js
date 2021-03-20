const Discord = require('discord.js');
const qdb = require('quick.db');
const p = "!"
const a = "680124536871845903"
let tarih = new Date().toLocaleString("tr-TR", { timeZone: "Asia/Istanbul"});
module.exports.run = async(client, message, args) => {
  if(!args[0]){
    if(message.author.id !== a) return message.channel.send(
  new Discord.MessageEmbed()
    .setColor('BLACK')
    .setAuthor(`${client.user.username} Premium Sistemi`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
    .setTitle(":x: Başarısız!")
    .setDescription(`Doğru kullanım: \`${p}premium kontrol\``)
    .setFooter(`${message.author.tag} istedi!`, message.author.displayAvatarURL({dynamic: true, format: "png"}))
  )
    if(message.author.id === a){
      return message.channel.send(
  new Discord.MessageEmbed()
    .setThumbnail(client.user.avatarURL())
    .setColor('BLACK')
    .setAuthor(`${client.user.username} Premium Sistemi`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
    .setTitle("Premium komutlarım şunlardır!")
    .addField(`${p}premium ver`, "Belirtilen ID'deki sunucuyu premium sistemine dahil eder.")
    .addField(`${p}premium al`, "Belirtilen ID'deki sunucuyu premium sisteminden çıkartır.")
    .addField(`${p}premium kontrol`, "Sunucu premium sistemine dahil mi kontrol eder.")
    .setFooter(`${message.author.tag} istedi!`, message.author.displayAvatarURL({dynamic: true, format: "png"}))
  )
    }
              }
  if(args[0] === "kontrol"){
    if(message.member.permissions.has("ADMINISTRATOR")){
    if(qdb.has(`premium_${message.guild.id}`)){
      return message.channel.send(
      new Discord.MessageEmbed()
        .setColor('BLACK')
        .setDescription("Bu sunucuda premium aktif!")
      )  
    }
    else return message.channel.send(
    new Discord.MessageEmbed()
      .setColor('BLACK')
      .setDescription("Bu sunucuda premium aktif değil!")
    )
  }
  else return;
  }
  if(args[0] === "ver"){
    if(message.author.id === a){
      var sw = args[1]
      if(!sw) return message.channel.send(
      new Discord.MessageEmbed()
        .setColor('BLACK')
        .setDescription("Bir sunucu ID'si belirtin.")
      )
      if(sw.length < 18 || sw.length > 18) return message.channel.send(
      new Discord.MessageEmbed()
        .setColor('BLACK')
        .setDescription("Sunucu ID'leri 18 hanelidir.")
      )
      if(isNaN(sw)) return message.channel.send(
      new Discord.MessageEmbed()
        .setColor('BLACK')
        .setDescription("Sunucu ID'lerinde harf bulunamaz!")
      )
      var sunucu = client.guilds.cache.get(sw)
      if(!sunucu) return message.channel.send(
      new Discord.MessageEmbed()
        .setColor('BLACK')
        .setDescription("Böyle bir sunucuda bulunmuyorum.")
      )
      if(qdb.has(`premium_${sunucu.id}`)) return message.channel.send(
      new Discord.MessageEmbed()
        .setColor('BLACK')
        .setAuthor(`${client.user.username} Premium Sistemi`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
        .setTitle(":x: Başarısız")
        .setDescription(`**${sunucu.name}** adlı sunucu zaten premium sisteminde!`)
        .setFooter(`${message.author.tag} istedi!`, message.author.displayAvatarURL({dynamic: true, format: "png"}))
        .setTimestamp()
      )
      qdb.set(`premium_${sunucu.id}`, "açık")
      return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLACK")
        .setAuthor(`${client.user.username} Premium Sistemi`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
        .setTitle(":white_check_mark: Başarılı")
        .setDescription(`**${sunucu.name}** adlı sunucu başarıyla premium sistemine dahil edildi!`)
        .setFooter(`${message.author.tag} istedi!`, message.author.displayAvatarURL({dynamic: true, format: "png"}))
        .setTimestamp()
      )
      sunucu.owner.send(
      new Discord.MessageEmbed()
        .setColor("BLACK")
        .setAuthor(`${client.user.username} Premium Sistemi`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
        .setDescription(`**${sunucu.name}** adlı sunucunuzda premium sistemi aktif edildi! \n \n Yetkili ID: \`${message.author.id}\``)
        .setFooter(`${message.author.tag} istedi!`, message.author.displayAvatarURL({dynamic: true, format: "png"}))
        .setTimestamp()
      )
    }
    else return;
  }
  if(args[0] === "al"){
        if(message.author.id === a){
      var sw = args[1]
      if(!sw) return message.channel.send(
      new Discord.MessageEmbed()
        .setColor('BLACK')
        .setDescription("Bir sunucu ID'si belirtin.")
      )
      if(sw.length < 18 || sw.length > 18) return message.channel.send(
      new Discord.MessageEmbed()
        .setColor('BLACK')
        .setDescription("Sunucu ID'leri 18 hanelidir.")
      )
      if(isNaN(sw)) return message.channel.send(
      new Discord.MessageEmbed()
        .setColor('BLACK')
        .setDescription("Sunucu ID'lerinde harf bulunamaz!")
      )
      var sunucu = client.guilds.cache.get(sw)
      if(!sunucu) return message.channel.send(
      new Discord.MessageEmbed()
        .setColor('BLACK')
        .setDescription("Böyle bir sunucuda bulunmuyorum.")
      )
      if(qdb.has(`premium_${sunucu.id}`)){
        qdb.delete(`premium_${sunucu.id}`)
      return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLACK")
        .setAuthor(`${client.user.username} Premium Sistemi`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
        .setTitle(":white_check_mark: Başarılı")
        .setDescription(`**${sunucu.name}** adlı sunucu başarıyla premium sisteminden çıkartıldı!`)
        .setFooter(`${message.author.tag} istedi!`, message.author.displayAvatarURL({dynamic: true, format: "png"}))
        .setTimestamp()
      )
        let owner = client.guilds.cache.get(sw)
      owner.send(
      new Discord.MessageEmbed()
        .setColor("BLACK")
        .setAuthor(`${client.user.username} Premium Sistemi`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
        .setDescription(`**${sunucu.name}** adlı sunucunuzda premium sistemi de-aktif edildi! \n \n Yetkili ID: \`${message.author.id}\``)
        .setFooter(`${message.author.tag} istedi!`, message.author.displayAvatarURL({dynamic: true, format: "png"}))
        .setTimestamp()
      )
      }
          else {
            return message.channel.send(
            new Discord.MessageEmbed()
              .setColor('BLACK')
              .setDescription(`**${sunucu.name}** isimli sunucu zaten premium sisteminde bulunmuyor!`)
            )
          }
    }
    else return;
  }
};
module.exports.conf = {aliases: ['pre'], permLevel: 0};
module.exports.help = {name: "premium"};