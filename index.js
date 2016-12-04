'use strict';

const axios = require('axios');
const incito = require('incito');
const http = require('http');

function incitoAxios(...args) {
  const server = incito(...args);

  const protocol = server instanceof http.Server ? 'http' : 'https';
  const request = axios.create({
    baseURL: protocol + '://' + server.address().address + ':' server.port,
  });

  request.server = server;
  return request;

}
module.exports = incitoAxios;
