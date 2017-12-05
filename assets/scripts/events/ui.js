'use strict'

// const store = require('../store')

const showEventsTemplate = require('../templates/events-listing.handlebars')

const createEventSuccess = function (data) {
  $('#message').text('Event created successfully')
  console.log(data)
  $('input').val('')
  $('#update-event-button').show()
  $('#delete-event-button').show()
}

const createEventFailure = function (error) {
  $('#message').text('Error on create event. Please try again.')
  console.error(error)
}

const eventIndexSuccess = function (data) {
  $('#message').text('Here are all events!')
  const showEventsHtml = showEventsTemplate({ events: data.events })
  $('#eventslist').html(showEventsHtml)
  // console.log(data)
}

const eventIndexFailure = function (error) {
  $('#message').text('Error on get events. Please try again.')
  console.error(error)
}

const eventUpdateSuccess = function (data) {
  $('#message').text('Event updated successfully')
  // console.log(data)
  $('input').val('')
}

const eventUpdateFailure = function (error) {
  $('#message').text('event update failed')
  console.log(error)
}

const eventDeleteSuccess = function (data) {
  $('#message').text('Event deleted successfully')
  // console.log(data)
  $('input').val('')
}

const eventDeleteFailure = function (error) {
  $('#message').text('event delete failed')
  console.log(error)
}

module.exports = {
  eventIndexSuccess,
  eventIndexFailure,
  createEventSuccess,
  createEventFailure,
  eventUpdateSuccess,
  eventUpdateFailure,
  eventDeleteSuccess,
  eventDeleteFailure
}
