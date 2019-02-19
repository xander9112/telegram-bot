import * as Telegram from "telegram-node-bot";

export class OtherwiseController extends Telegram.TelegramBaseController {
  handle($: any) {
    $.sendMessage("Не найдена команда");
  }
}
