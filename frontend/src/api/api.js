export const Api = {
  // baseURL: 'http://localhost:3000/',
  baseURL: 'https://ocean-jornada-fullstack-novembro-2022-m816.onrender.com/',
  items: {
    endpoint: function() {
      return Api.baseURL + 'items';
    },
    readAll: function() {
      return this.endpoint() + '/';
    },
    readById: function(id) {
      return this.endpoint() + `/${id}`;
    },
  },
  buildApiGetRequest: function(url) {
    return fetch(url, {
      method: 'GET',
    });
  }
};

