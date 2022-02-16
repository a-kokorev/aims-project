const axios = require('axios').default;
const inquireService = require('./inquireService');

// TODO: Create a config and move PAT to the config
const token = '<ADO PAT>';

const axiosConfig = () => ({
  headers: {
    'Accept': 'application/json',
    'Authorization': `Basic ${Buffer.from(`:${token}`).toString('base64')}`,
  },
});

module.exports.get = url => axios.get(url, axiosConfig(inquireService.getToken()));
module.exports.post = (url, body) => axios.post(url, body, axiosConfig(inquireService.getToken()));
module.exports.all = requests => axios.all(requests);
