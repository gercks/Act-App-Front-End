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

const eventIndex = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/events',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const eventSearch = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/events/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const eventUpdate = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/events/' + data.event.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const eventDelete = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/events/' + data.event.id,
    method: 'DELETE'
    // headers: {
    //   Authorization: 'Token token=' + store.user.token
    // }
  })
}
// THIS IS WHAT YOU'RE WORKING ON
const userEvents = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/my-events',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
module.exports = {
  createEvent,
  eventIndex,
  eventSearch,
  eventUpdate,
  eventDelete,
  userEvents
}
