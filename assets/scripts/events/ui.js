'use strict'

// const store = require('../store')

const showEventsTemplate = require('../templates/events-listing.handlebars')

const createEventSuccess = function (data) {
  $('#message').text('Event created successfully')
  console.log(data)
}

const createEventFailure = function (error) {
  $('#message').text('Error on create event. Please try again.')
  console.error(error)
}

const eventIndexSuccess = function (data) {
  $('#message').text('Here are all events!')
  const showEventsHtml = showEventsTemplate({ events: data.events })
  $('#eventslist').html(showEventsHtml)
  console.log(data)
}

const eventIndexFailure = function (error) {
  $('#message').text('Error on get events. Please try again.')
  console.error(error)
}

const updateEventSuccess = function (data) {
  $('#message').text('Event created successfully')
  console.log(data)
}

const updateEventFailure = function (data) {
  $('#message').text('event update failed')
  console.log(data)
}

module.exports = {
  eventIndexSuccess,
  eventIndexFailure,
  createEventSuccess,
  createEventFailure,
  updateEventSuccess,
  updateEventFailure
}
