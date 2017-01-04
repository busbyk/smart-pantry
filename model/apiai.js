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

    triggerEvent() {
      return new Promise((resolve, reject) => {
        let url = this.generateUrl(utterance),
            options = {
                url: url,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${config.apiai.token}`
                }
            };

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

    recognizeIntent(utterance, context) {
        return new Promise((resolve, reject) => {


            if(config.systemId) {
                if(config.systemId.proxyUrl) {
                    options.proxy = config.systemId.proxyUrl;
                } else {
                    console.log('No proxyUrl defined for the ' + config.env + ' environment.');
                }
            } else {
                console.log('No systemId configuration for the ' + config.env + ' environment.');
            }



        });
    }

    generateUrl(utterance) {
        let url = `${BASE_URL}/query?v=${VERSION}&lang=${LANG}`;

        if(utterance) {
            url += `&query=${utterance}`;
        }

        url += `&sessionId=${this.sessionId}`;

        return url;
    }
}

module.exports = Apiai;
