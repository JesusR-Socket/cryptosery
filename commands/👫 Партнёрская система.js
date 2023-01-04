/*CMD
  command: 👫 Партнёрская система
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var stat = Bot.getProperty("" + user.telegramid + "");
if (stat == "partner1ban" | stat == "partner2ban" | stat == "partner3ban" | stat == "partner4ban" | stat == "partnerChatban" | stat == "ban"){
 Bot.runCommand("main_menu");
} else {
var balance = Libs.ResourcesLib.userRes("balance");
var balance2 = Libs.ResourcesLib.userRes("balance2");
var balanceCount = Libs.ResourcesLib.userRes("count");
var balanceCount2 = Libs.ResourcesLib.userRes("count2");
var balanceAll = Libs.ResourcesLib.userRes("balanceAll");
let reflink = Libs.ReferralLib.currentUser.getRefLink("CRYPTO_SIGNAL_INSIDER_BOT", "Bot");

if (stat=="partner1" | stat=="partner3") {
Bot.sendMessage("👥 Партнеров 1 линии: "+balanceCount.value().toFixed(0)+" : "+balance.value().toFixed(2)+"$ заработано\n\n👥 Партнеров 2 линии: "+balanceCount2.value().toFixed(0)+" : "+balance2.value().toFixed(2)+"$ заработано\n\n🔗 Ссылка для приглашения\n" + reflink);
Bot.sendInlineKeyboard([{title: "📥 Вывод 📥", command: "Вывод" }], "💰 Ваш баланс : "+balanceAll.value().toFixed(2)+" $");
} else if (stat == "partner2" | stat == "partner4"){
Bot.sendMessage("👥 Партнеров 1 линии: "+balanceCount.value().toFixed(0)+" : "+balance.value().toFixed(2)+"$ заработано\n\n👥 Партнеров 2 линии: "+balanceCount2.value().toFixed(0)+" : "+balance2.value().toFixed(2)+"$ заработано\n\n🔗 Ссылка для приглашения\n" + reflink);
Bot.sendInlineKeyboard([{title: "📥 Вывод 📥", command: "Вывод" }], "💰 Ваш баланс : "+balanceAll.value().toFixed(2)+" $");
} else if (stat == "partnerChat"){
Bot.sendMessage("👥 Партнеров 1 линии: "+balanceCount.value().toFixed(0)+" : "+balance.value().toFixed(2)+"$ заработано\n\n👥 Партнеров 2 линии: "+balanceCount2.value().toFixed(0)+" : "+balance2.value().toFixed(2)+"$ заработано\n\n🔗 Ссылка для приглашения\n" + reflink);
Bot.sendInlineKeyboard([{title: "📥 Вывод 📥", command: "Вывод" }], "💰 Ваш баланс : "+balanceAll.value().toFixed(2)+" $");
}
}
