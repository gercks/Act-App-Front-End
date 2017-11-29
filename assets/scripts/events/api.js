'use strict'

const config = require('../config')
const store = require('../store')

const createEvent = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/events',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createEvent
}
