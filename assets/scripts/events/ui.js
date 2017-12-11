'use strict'

const store = require('../store')

const showEventsTemplate = require('../templates/events-listing.handlebars')

const createEventSuccess = function (data) {
  $('#message').text('Event created successfully')
  $('input').val('')
  $('#event-create').hide()
  $('#update-event-button').show()
  $('#delete-event-button').show()
  const showEventsHtml = showEventsTemplate({ events: data.events })
  $('#eventslist').html(showEventsHtml)
  $('#create-event').hide()
}

const createEventFailure = function () {
  $('#message').text('Error on create event. Please try again.')
}

const eventIndexSuccess = function (data) {
  $('#message').text('Here are all events!')
  $('#eventslist').show()
  const showEventsHtml = showEventsTemplate({ events: data.events })
  $('#eventslist').html(showEventsHtml)
  $('#usereventslist').hide()
  $('#hide-events').show()
  $('#hide-my-events').hide()
}

const eventIndexFailure = function () {
  $('#message').text('Error on get events. Please try again.')
}

const eventUpdateSuccess = function (data) {
  store.event = data.event
  $('#message').text('Event updated successfully')
  $('input').val('')
  const showEventsHtml = showEventsTemplate({ events: store.event.id })
  $('#usereventslist').html(showEventsHtml)
  $('#usereventslist').show()
  $('#event-update').hide()
  $('#update-event-button').hide()
  $('#delete-event-button').hide()
  $('#hide-my-events').hide()
}

const eventUpdateFailure = function () {
  $('#message').text('event update failed')
}

const eventDeleteSuccess = function (data) {
  $('#message').text('Event deleted successfully')
  $('input').val('')
  $('#event-delete').hide()
  $('#update-event-button').hide()
  $('#delete-event-button').hide()
  $('#hide-my-events').hide()
}

const eventDeleteFailure = function () {
  $('#message').text('event delete failed')
}

const userEventsSuccess = function (data) {
  $('#message').text('Here are your events!')
  $('#usereventslist').show()
  $('#eventslist').hide()
  const showEventsHtml = showEventsTemplate({ events: data.events })
  if (data.events.length !== 0) {
    $('#usereventslist').html(showEventsHtml)
    $('#update-event-button').show()
    $('#delete-event-button').show()
    $('#hide-my-events').show()
    $('#hide-events').hide()
  } else {
    $('#message').text('you have no events! please create one')
    $('#usereventslist').html('')
    $('#hide-events').hide()
  }
}

const userEventsFailure = function () {
  $('#message').text('your event index failed')
}

module.exports = {
  eventIndexSuccess,
  eventIndexFailure,
  createEventSuccess,
  createEventFailure,
  eventUpdateSuccess,
  eventUpdateFailure,
  eventDeleteSuccess,
  eventDeleteFailure,
  userEventsSuccess,
  userEventsFailure
}
