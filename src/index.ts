import * as env from 'env-var';
import * as request from 'request-promise';
import {
  OtherwiseController,
  PingController,
  ImageController
} from './controllers';

const Telegram = require('telegram-node-bot');
const TextCommand = Telegram.TextCommand;
const TOKEN = env.get('TOKEN', '').asString();
const tg = new Telegram.Telegram(TOKEN);

tg.router
  .when(new TextCommand('/ping', 'pingCommand'), new PingController())
  .when(new TextCommand('/startForm', 'startForm'), new PingController())
  .when(new TextCommand('/getImage', 'getImage'), new ImageController())
  .otherwise(new OtherwiseController());

// request({
//   method: 'GET',
//   uri: 'https://randomuser.me/api/',
// })
//   .then((response) => {
//     const results = JSON.parse(response).results
//     const result = results[0]
//     const { name: { title, first, last } } = result
//     $.sendPhoto({ url: result.picture.large, filename: `${title} ${first} ${last}` });
//   })
//   .catch((error) => {
//     console.error(error.message)
//   })
