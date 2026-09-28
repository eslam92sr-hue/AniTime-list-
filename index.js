const TelegramBot = require("node-telegram-bot-api");

const token = process.env.BOT_TOKEN;

if (!token) {
  throw new Error("BOT_TOKEN is missing");
}

const bot = new TelegramBot(token, {
  polling: true
});

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "مرحبًا بك في بوت إدارة تطبيق المانجا 📚"
  );
});

console.log("Manga Bot is running...");
