const request = require('request');
const uuid = require('uuid');
const config = require('../config');

const BASE_URL = config.apiai.baseUrl;
const VERSION = config.apiai.version;
const LANG = config.apiai.lang;

class Apiai {
    constructor(sessionId) {
        this.sessionId = sessionId || uuid.v4();
    }

    triggerEvent(eventName, data) {
      return new Promise((resolve, reject) => {
        let url = BASE_URL + '/query',
            options = {
                url: url,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${config.apiai.token}`
                },
                body: JSON.stringify({
                    name: eventName,
                    data: data
                })

            };

          request.post(options, (err, res, body) => {
              if(err) {
                  reject(err);
              } else {
                  if(res.body) {
                      let body = JSON.parse(res.body),
                          result = body.result;

                      resolve(result);
                  } else {
                      console.log('No body on the result');
                      reject('No body on the result');
                  }
              }
          });

        // request.post(options, (err, res, body) => {
        //     if(err) {
        //         reject(err);
        //     } else {
        //         if(res.body) {
        //             let body = JSON.parse(res.body),
        //                 result = body.result;
        //
        //             resolve(intent);
        //         } else {
        //             console.log('No body on the result');
        //             reject('No body on the result');
        //         }
        //     }
        // });
      });
    }
}

module.exports = Apiai;
