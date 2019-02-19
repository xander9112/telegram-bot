import * as Telegram from "telegram-node-bot";

export class PingController extends Telegram.TelegramBaseController {
  form = {
    name: {
      q: "Send me your name",
      error: "sorry, wrong input",
      validator: (message: any, callback: any) => {
        if (message.text) {
          callback(true, message.text); // you must pass the result also
          return;
        }

        callback(false);
      }
    },
    age: {
      q: "Send me your age",
      error: "sorry, wrong input",
      validator: (message: any, callback: any) => {
        function IsNumeric(text: any) {
          return typeof text === "number";
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

  /**
   * @param {Scope} $
   */
  pingHandler($: any) {
    $.sendMessage("pong");

    setTimeout(() => {
      $.sendMessage("pong with setTimeout");
    }, 3000);
  }

  startForm($: any) {
    $.runForm(this.form, (result: any) => {
      console.log(result);
    });
  }

  get routes() {
    return {
      pingCommand: "pingHandler",
      startForm: "startForm"
    };
  }
}
