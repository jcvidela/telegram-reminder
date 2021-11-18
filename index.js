// Load environment variables
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Telegraf } = require('telegraf');

// Load router and set request middlewares
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Load bot and save chat user id
const bot = new Telegraf(process.env.BOT_TOKEN);
let chat_id;
bot.start((ctx) => chat_id = ctx.chat.id);
bot.launch();

// Test: send replies
app.post('/sendEventNotify', (req, res) => {
    bot.telegram.sendMessage(chat_id, 'Hola idiota!')
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on port ${PORT}...`));