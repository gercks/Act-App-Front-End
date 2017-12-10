'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events')
const eventsEvents = require('./events/events')

$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  authEvents.addHandlers()
  eventsEvents.addHandlers()
  $('.user-actions').hide()
  $('.event-forms').hide()
  $('#change-password-button').hide()
  $('#sign-out').hide()
  $('input').val('')
  $('.event-forms').hide()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
