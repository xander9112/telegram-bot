import * as env from 'env-var';

const Telegram = require('telegram-node-bot');
const TelegramBaseController = Telegram.TelegramBaseController;
const TextCommand = Telegram.TextCommand;
const TOKEN = env.get('TOKEN', '').asString();
const tg = new Telegram.Telegram(TOKEN);

const form = {
  name: {
    q: 'Send me your name',
    error: 'sorry, wrong input',
    validator: (message: any, callback: any) => {
      if (message.text) {
        callback(true, message.text); //you must pass the result also
        return;
      }

      callback(false);
    }
  },
  age: {
    q: 'Send me your age',
    error: 'sorry, wrong input',
    validator: (message: any, callback: any) => {
      function IsNumeric(text: any) {
        return typeof text === 'number';
      }

      function toInt(text: any) {
        return parseInt(text, 10);
      }

      if (message.text) {
        callback(true, toInt(message.text));
        return;
      }

      callback(false);
    }
  }
};

class PingController extends TelegramBaseController {
  /**
   * @param {Scope} $
   */
  pingHandler($: any) {
    $.sendMessage('pong');
  }

  startForm($: any) {
    $.runForm(form, (result: any) => {
      console.log(result);
    });
  }

  get routes() {
    return {
      pingCommand: 'pingHandler',
      startForm: 'startForm'
    };
  }
}

tg.router
  .when(new TextCommand('ping', 'pingCommand'), new PingController())
  .when(new TextCommand('startForm', 'startForm'), new PingController());
