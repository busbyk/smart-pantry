const defaultConfig = {
    port: '3000',
    env: 'NODE_ENV',
    apiai: {
      baseUrl: 'https://api.api.ai/v1',
      version: '20150910',
      lang: 'en'
    },
    db: {
        url: 'http://www.ccomfort.com/ideo/inventory.php'
    }
};

module.exports = Object.assign({}, defaultConfig);
