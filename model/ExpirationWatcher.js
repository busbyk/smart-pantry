class ExpirationWatcher {
    constructor() {
        this.watchHandler = initiateWatch();
    }

    initiateWatch() {
        return setInterval(() => {
            //make request to db
        }, 10000);
    }
}

module.exports = ExpirationWatcher;