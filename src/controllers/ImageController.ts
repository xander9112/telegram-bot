import * as Telegram from "telegram-node-bot";
import * as request from "request-promise";

// const test = {
//   "results": [{
//     "gender": "female",
//     "name": { "title": "miss", "first": "arina", "last": "vellema" },
//     "location": {
//       "street": "6505 kanaalweg",
//       "city": "oisterwijk",
//       "state": "limburg",
//       "postcode": 43273,
//       "coordinates": { "latitude": "46.3193", "longitude": "74.3432" },
//       "timezone": { "offset": "+4:30", "description": "Kabul" }
//     },
//     "email": "arina.vellema@example.com",
//     "login": {
//       "uuid": "1e1aa697-5fea-4feb-bdd9-1811ef87ec53",
//       "username": "organicbird583",
//       "password": "slick",
//       "salt": "96N95SCZ",
//       "md5": "ffc40fed40b0bd6dc80c525902eea2e1",
//       "sha1": "f9034e29258efae942c670b7cdabee36eb0afa4c",
//       "sha256": "6629dace748924fe2be7e5ae7b76d97cc437e73982cb5546f9676855ca5e2fe3"
//     },
//     "dob": { "date": "1950-08-13T12:15:27Z", "age": 68 },
//     "registered": { "date": "2004-02-11T08:47:09Z", "age": 15 },
//     "phone": "(954)-983-1786",
//     "cell": "(034)-105-4556",
//     "id": { "name": "BSN", "value": "51751366" },
//     "picture": {
//       "large": "https://randomuser.me/api/portraits/women/85.jpg",
//       "medium": "https://randomuser.me/api/portraits/med/women/85.jpg",
//       "thumbnail": "https://randomuser.me/api/portraits/thumb/women/85.jpg"
//     },
//     "nat": "NL"
//   }], "info": { "seed": "9c665a164dd8a92c", "results": 1, "page": 1, "version": "1.2 " }
// };

export class ImageController extends Telegram.TelegramBaseController {
  getImage($: any) {
    $.sendMessage("Получение картинки...");

    request({
      method: "GET",
      uri: "https://randomuser.me/api/"
    })
      .then(({ results }) => {
        const result = results[0];
        const { name: { title, first, last } } = result;

        $.sendPhoto({ url: result.picture.large, filename: `${title} ${first} ${last}` });
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

