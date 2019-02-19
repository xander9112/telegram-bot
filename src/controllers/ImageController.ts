import * as Telegram from "telegram-node-bot";
import * as request from "request-promise";

export class ImageController extends Telegram.TelegramBaseController {
  getImage($: any) {
    $.sendMessage("Получение картинки");

    request({
      method: "GET",
      uri: "https://randomuser.me/api/"
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }

  get routes() {
    return {
      getImage: "getImage"
    };
  }
}

