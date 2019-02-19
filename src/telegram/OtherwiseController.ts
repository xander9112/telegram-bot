import * as Telegram from 'telegram-node-bot'

class OtherwiseController extends Telegram.TelegramBaseController {
  handle($: any) {
    $.sendMessage('Не найдена команда')
  }
}


export { OtherwiseController }
