const config = require('../config');
const request = require('request');

class ExpirationWatcher {
    constructor() {
        this.watchHandler = this.initiateWatch();
    }

    initiateWatch() {
        return setInterval(() => {
            let url = config.db.url,
                options = {
                    url: url,
                    headers: {
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify({
                        'expiringSoon':'2'
                    })
                };

            console.log('CHECKING FOR EXPIRED ITEMS');
            request.post(options, (err, res, body) => {
                if(err) {
                    console.error(err);
                } else {
                    if(res.body) {
                        let body = JSON.parse(res.body);

                        console.log(JSON.stringify(body));
                    } else {
                        console.log('No body on the result');
                    }
                }
            })
        }, 200000);
    }
}

module.exports = ExpirationWatcher;