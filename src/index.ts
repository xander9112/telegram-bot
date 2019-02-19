import * as env from 'env-var';

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
