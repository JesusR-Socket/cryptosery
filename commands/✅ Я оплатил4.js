/*CMD
  command: ✅ Я оплатил4
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(chat.chat_type != "private"){
Bot.runCommand("✅ Я оплатил4");
}
else {
var pack;
var id = user.telegramid;
var name = User.getProperty("name");
if (Bot.getProperty("buy:" + user.telegramid) == 11){
 pack = "Новичок 1 мес.";
} else if (Bot.getProperty("buy:" + user.telegramid) == 12){
 pack = "Новичок 3 мес.";
} else if (Bot.getProperty("buy:" + user.telegramid) == 21){
 pack = "Премиум 1 мес.";
} else if (Bot.getProperty("buy:" + user.telegramid) == 22){
 pack = "Премиум 3 мес.";
} else if (Bot.getProperty("buy:" + user.telegramid) == 23){
 pack = "Премиум 6 мес.";
} else if (Bot.getProperty("buy:" + user.telegramid) == 31){
 pack = "VIP-чат 1 мес.";
} else if (Bot.getProperty("buy:" + user.telegramid) == 32){
 pack = "VIP-чат 3 мес.";
} else if (Bot.getProperty("buy:" + user.telegramid) == 33){
 pack = "VIP-чат 6 мес.";
} else if (Bot.getProperty("buy:" + user.telegramid) == 10){
 pack = "Продление подписки";
} else if (Bot.getProperty("buy:" + user.telegramid) == 4){
 pack = "Улучшение пакета";
}

if (!request.photo[0]) {
  Bot.sendMessage("📸 Вы не отправили скриншот 📸");
  Bot.runCommand("✅ Я оплатил3");
} else {
  Api.sendPhoto({
    chat_id: "@insider_admins",
    photo: request.photo[0].file_id,
    caption: "Пакет: "+pack +"\nИмя\n" + name + "\nTelegramID:\n"+id,
    reply_markup: {
    inline_keyboard: [
   [ {text: "Одобрить", callback_data: "/proof"}],
   [ {text: "Отклонить", callback_data: "/unproof"}]
  ],
 }
  })
  Bot.runCommand("main_menu");
User.setProperty("name", null);

Bot.sendMessage("✅ Успешно! Ожидайте подтверждения оплаты от модератора");
}
}
