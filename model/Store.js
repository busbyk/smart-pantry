class Store {
    constructor() {
        this.id = '';
    }

    setId(id) {
        this.id = id;
    }

    getId(id) {
        return this.id;
    }
}

module.exports = new Store();