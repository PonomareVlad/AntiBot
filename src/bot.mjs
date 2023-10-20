import {Bot, InlineKeyboard, InlineQueryResultBuilder} from "grammy";

export const {

    // Telegram bot token from t.me/BotFather
    TELEGRAM_BOT_TOKEN: token,

    // Secret token to validate incoming updates
    TELEGRAM_SECRET_TOKEN: secretToken = String(token).split(":").pop()

} = process.env;

// Default grammY bot instance
export const bot = new Bot(token);

// Sample handler for a simple echo bot
bot.on("message:text", ctx => ctx.reply("Use inline mode"));

// Listen for any inline query.
bot.on("inline_query", async ctx => ctx.answerInlineQuery([
    InlineQueryResultBuilder.article("alert-test", "Alert test", {
        reply_markup: new InlineKeyboard().text("Run test", "test")
    }).text("Alert test")
]));

bot.callbackQuery("test", ctx => ctx.answerCallbackQuery({text: "Works ?", show_alert: true}));
