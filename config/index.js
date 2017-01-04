const defaultConfig = {
    port: '3000',
    env: 'NODE_ENV',
    apiai: {
        token: '8763099c8ff841348c4881eb956f4725',
      baseUrl: 'https://api.api.ai/v1',
      version: '20150910',
      lang: 'en'
    },
    db: {
        url: 'http://www.ccomfort.com/ideo/inventory.php'
    }
};

module.exports = Object.assign({}, defaultConfig);
