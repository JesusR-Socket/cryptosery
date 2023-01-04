/*CMD
  command: 💎 Крипта
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 💎 crypto
CMD*/

if (Bot.getProperty("buy:" + user.telegramid) == 3) {
  Bot.sendKeyboard("USDT TRC20,USDT BEP20,\nUSDT ERC20,USDT SOL,\n❌ Вернуться","⭕️ Выберите в чём выводить:")
} else {
  var tx;
  if (Bot.getProperty("buy:" + user.telegramid) == "11") {
    tx = "📑 Подписка: <b>💰 Новичок 💰</b>\n⏳ Срок: <b>1 месяц</b>\n\n💰 Сумма к оплате: <s>200 USDT</s> <b>100 USDT</b>"
  } else if (Bot.getProperty("buy:" + user.telegramid) == "12") {
    tx = "📑 Подписка: <b>💰 Новичок 💰</b>\n⏳ Срок: <b>3 месяца</b>\n\n💰 Сумма к оплате: <s>400 USDT</s> <b>200 USDT</b>"
  } else if (Bot.getProperty("buy:" + user.telegramid) == "21") {
    tx = "📑 Подписка: <b>💎 Продвинутый 💎</b>\n⏳ Срок: <b>1 месяц</b>\n\n💰 Сумма к оплате: <s>400 USDT</s> <b>200 USDT</b>"
  } else if (Bot.getProperty("buy:" + user.telegramid) == "22") {
    tx = "📑 Подписка: <b>💎 Продвинутый 💎</b>\n⏳ Срок: <b>3 месяца</b>\n\n💰 Сумма к оплате: <s>800 USDT</s> <b>400 USDT</b>"
  } else if (Bot.getProperty("buy:" + user.telegramid) == "23") {
    tx = "📑 Подписка: <b>💎 Продвинутый 💎</b>\n⏳ Срок: <b>6 месяцев</b>\n\n💰 Сумма к оплате: <s>1200 USDT</s> <b>600 USDT</b>"
  } else if (Bot.getProperty("buy:" + user.telegramid) == "31") {
    tx = "📑 Подписка: <b>🥷 VIP чат 🥷</b>\n⏳ Срок: <b>1 месяц</b>\n\n💰 Сумма к оплате: <s>100 USDT</s> <b>75 USDT</b>"
  } else if (Bot.getProperty("buy:" + user.telegramid) == "32") {
    tx = "📑 Подписка: <b>🥷 VIP чат 🥷</b>\n⏳ Срок: <b>3 месяца</b>\n\n💰 Сумма к оплате: <s>200 USDT</s> <b>150 USDT</b>"
  } else if (Bot.getProperty("buy:" + user.telegramid) == "33") {
    tx = "📑 Подписка: <b>🥷 VIP чат 🥷</b>\n⏳ Срок: <b>6 месяцев</b>\n\n💰 Сумма к оплате: <s>500 USDT</s> <b>300 USDT</b>"
  }
  Api.sendMessage({
   text: tx,
   parse_mode: "HTML"
  })
  Bot.sendKeyboard(
    "USDT TRC20,USDT BEP20,\nUSDT ERC20,USDT SOL,\n❌ Вернуться",
    "⭕️ Выберите способ оплаты:"
  )
  Api.sendMessage({
   text: "⚠️ <i>Если Вам не подходят данные способы оплаты, то обратитесь в тех. поддержку:</i> @teh_podderzka",
   parse_mode: "HTML"
  })
}

if (Bot.getProperty("buy:" + user.telegramid) == "4") {
  Bot.sendMessage("🛑ВНИМАНИЕ! Для апгрейда Вам надо доплатить 150$🛑")
}
