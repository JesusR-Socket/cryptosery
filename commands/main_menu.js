/*CMD
  command: main_menu
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var lang = Libs.Lang;
var stat = Bot.getProperty(""+user.telegramid+"");
if (stat=="user" | stat =="member"){
 Bot.sendKeyboard("🧑🏻‍💻 Наши услуги,💸 Выбор подписки,\n🛠 Тех. Поддержка,🏆 Отзывы","🌐 Развивайся с сообществом 🌐")
} else if (stat == "partner1" | stat == "partner2" | stat == "partner3" | stat == "partner4"){
 Bot.sendKeyboard("👫 Партнёрская система,📚 Обучение\n🛠 Тех. Поддержка,🗓 Моя подписка\n⭕️ Сигналы", "🌐 Развивайся с сообществом 🌐")
} else if (stat == "partnerChat"){
 Bot.sendKeyboard("👫 Партнёрская система,\n🛠 Тех. Поддержка,🗓 Моя подписка\n⭕️ Сигналы", "🌐 Развивайся с сообществом 🌐")
} else if (stat == "partner1ban" | stat == "partner2ban" | stat == "partner3ban" | stat == "partner4ban"){
 Bot.sendKeyboard("👫 Партнёрская система,📚 Обучение\n🛠 Тех. Поддержка,🗓 Моя подписка\n⭕️ Сигналы", "⚠️ Ваша подписка закончилась, продлите подписку для продолжения работы!")
} else if (stat == "partnerChatban"){
 Bot.sendKeyboard("👫 Партнёрская система,\n🛠 Тех. Поддержка,🗓 Моя подписка\n⭕️ Сигналы", "⚠️ Ваша подписка закончилась, продлите подписку для продолжения работы!")
} else if (stat == "ban"){
 Bot.sendKeyboard("🛠 Тех. Поддержка", "⛔️ Вы были забнены в боте!")
}

if (user.telegramid == "521759529" | user.telegramid == "246451346"){
 Bot.sendKeyboard("👫 Партнёрская система,📚 Обучение\n🛠 Тех. Поддержка,🗓 Моя подписка\n⭕️ Сигналы\nУдалить,Восстановить,\nСделать VIP, Добавить дней", "Вы зашли как *Администратор*")
}
/*
let stat = Bot.getProperty(""+user.telegramid+"");
if (stat == "partner1ban" | stat == "partner2ban"){
var balance = Libs.ResourcesLib.userRes("balance");
var balance2 = Libs.ResourcesLib.userRes("balance2");
var balance3 = Libs.ResourcesLib.userRes("balance3");
var balance4 = Libs.ResourcesLib.userRes("balance4");
var balance5 = Libs.ResourcesLib.userRes("balance5");
var balanceCount = Libs.ResourcesLib.userRes("count");
var balanceCount2 = Libs.ResourcesLib.userRes("count2");
var balanceCount3 = Libs.ResourcesLib.userRes("count3");
var balanceCount4 = Libs.ResourcesLib.userRes("count4");
var balanceCount5 = Libs.ResourcesLib.userRes("count5");
var balanceAll = Libs.ResourcesLib.userRes("balanceAll");
var withdrawn = Libs.ResourcesLib.userRes("withdrawn");
var ref = Libs.ResourcesLib.userRes("referral");

Bot.sendKeyboard("⏳ Продлить подписку,🔰 Улучшить пакет,\n🛠 Тех. Поддержка", "❌ Продлите подписку чтобы продолжить ❌")
} else if (stat == "partner3ban"){
var balance = Libs.ResourcesLib.userRes("balance");
var balance2 = Libs.ResourcesLib.userRes("balance2");
var balance3 = Libs.ResourcesLib.userRes("balance3");
var balance4 = Libs.ResourcesLib.userRes("balance4");
var balance5 = Libs.ResourcesLib.userRes("balance5");
var balanceCount = Libs.ResourcesLib.userRes("count");
var balanceCount2 = Libs.ResourcesLib.userRes("count2");
var balanceCount3 = Libs.ResourcesLib.userRes("count3");
var balanceCount4 = Libs.ResourcesLib.userRes("count4");
var balanceCount5 = Libs.ResourcesLib.userRes("count5");
var balanceAll = Libs.ResourcesLib.userRes("balanceAll");
var withdrawn = Libs.ResourcesLib.userRes("withdrawn");
var ref = Libs.ResourcesLib.userRes("referral");
Bot.sendKeyboard("⏳ Продлить подписку,🛠 Тех. Поддержка", "❌ Продлите подписку чтобы продолжить ❌")
} else if (stat == "partner1" | stat == "partner2"){
var balance = Libs.ResourcesLib.userRes("balance");
var balance2 = Libs.ResourcesLib.userRes("balance2");
var balance3 = Libs.ResourcesLib.userRes("balance3");
var balance4 = Libs.ResourcesLib.userRes("balance4");
var balance5 = Libs.ResourcesLib.userRes("balance5");
var balanceCount = Libs.ResourcesLib.userRes("count");
var balanceCount2 = Libs.ResourcesLib.userRes("count2");
var balanceCount3 = Libs.ResourcesLib.userRes("count3");
var balanceCount4 = Libs.ResourcesLib.userRes("count4");
var balanceCount5 = Libs.ResourcesLib.userRes("count5");
var balanceAll = Libs.ResourcesLib.userRes("balanceAll");
var withdrawn = Libs.ResourcesLib.userRes("withdrawn");
var ref = Libs.ResourcesLib.userRes("referral");

Bot.sendKeyboard("🔗 Моя ссылка,💳 Баланс\n👫 Партнёры,🛠 Тех. Поддержка\n⏳ Продлить подписку,🔰 Улучшить пакет", "🌀Обучайся, приглашай и зарабатывай🌀")
} else if (stat == "partner3"){
var balance = Libs.ResourcesLib.userRes("balance");
var balance2 = Libs.ResourcesLib.userRes("balance2");
var balance3 = Libs.ResourcesLib.userRes("balance3");
var balance4 = Libs.ResourcesLib.userRes("balance4");
var balance5 = Libs.ResourcesLib.userRes("balance5");
var balanceCount = Libs.ResourcesLib.userRes("count");
var balanceCount2 = Libs.ResourcesLib.userRes("count2");
var balanceCount3 = Libs.ResourcesLib.userRes("count3");
var balanceCount4 = Libs.ResourcesLib.userRes("count4");
var balanceCount5 = Libs.ResourcesLib.userRes("count5");
var balanceAll = Libs.ResourcesLib.userRes("balanceAll");
var withdrawn = Libs.ResourcesLib.userRes("withdrawn");
var ref = Libs.ResourcesLib.userRes("referral");

Bot.sendKeyboard("🔗 Моя ссылка,💳 Баланс\n👫 Партнёры,🛠 Тех. Поддержка\n⏳ Продлить подписку", "🌀Обучайся, приглашай и зарабатывай🌀")
} else if (stat=="user" | stat =="member"){
var balance = Libs.ResourcesLib.userRes("balance");
var balance2 = Libs.ResourcesLib.userRes("balance2");
var balance3 = Libs.ResourcesLib.userRes("balance3");
var balanceAll = Libs.ResourcesLib.userRes("balanceAll");
var withdrawn = Libs.ResourcesLib.userRes("withdrawn");
var ref = Libs.ResourcesLib.userRes("referral");

Bot.sendKeyboard(lang.t("main_menu.keyboards.startMenu.buttons"),lang.t("main_menu.keyboards.startMenu.text"))
} else if (stat=="ban"){
var balance = Libs.ResourcesLib.userRes("balance");
var balance2 = Libs.ResourcesLib.userRes("balance2");
var balance3 = Libs.ResourcesLib.userRes("balance3");
var balance4 = Libs.ResourcesLib.userRes("balance4");
var balance5 = Libs.ResourcesLib.userRes("balance5");
var balanceCount = Libs.ResourcesLib.userRes("count");
var balanceCount2 = Libs.ResourcesLib.userRes("count2");
var balanceCount3 = Libs.ResourcesLib.userRes("count3");
var balanceCount4 = Libs.ResourcesLib.userRes("count4");
var balanceCount5 = Libs.ResourcesLib.userRes("count5");
var balanceAll = Libs.ResourcesLib.userRes("balanceAll");
var withdrawn = Libs.ResourcesLib.userRes("withdrawn");
var ref = Libs.ResourcesLib.userRes("referral");

Bot.sendKeyboard("🧑🏻‍💻 Узнать подробнее", "🌀Обучайся, приглашай и зарабатывай🌀")
}
if (user=="left"){
Bot.runCommand("/start");
} */
