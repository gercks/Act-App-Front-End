'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onCreateEvent = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.createEvent(data)
    .then(ui.createEventSuccess)
    .catch(ui.createEventFailure)
}

const onEventIndex = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  api.eventIndex(data)
    .then(ui.eventIndexSuccess)
    .catch(ui.eventIndexFailure)
}

const onEventUpdate = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  console.log(data.event.id)
  api.eventUpdate(data)
    .then(ui.eventUpdateSuccess)
    .catch(ui.eventUpdateFailure)
}

const onEventDelete = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.eventDelete(data)
    .then(ui.eventDeleteSuccess)
    .catch(ui.eventDeleteFailure)
}

const showCreateEvent = function (event) {
  $('#create-event').toggle()
}

const showMyEvents = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  api.userEvents(data)
    .then(ui.userEventsSuccess)
    .catch(ui.userEventsFailure)
}

const hideEvents = function (event) {
  event.preventDefault()
  $('#eventslist').hide()
}

const showUpdateEvent = function (event) {
  $('#event-update-form').show()
}

const showDeleteEvent = function (event) {
  $('#event-delete').show()
}

const addHandlers = () => {
  $('#create-event').on('submit', onCreateEvent)
  $('#eventIndex').on('click', onEventIndex)
  $('#create-event-button').on('click', showCreateEvent)
  $('#update-event-button').on('click', showUpdateEvent)
  $('#delete-event-button').on('click', showDeleteEvent)
  $('#my-events-button').on('click', showMyEvents)
  $('#hideEventIndex').on('click', hideEvents)
  $('#event-update').on('submit', onEventUpdate)
  $('#event-delete').on('submit', onEventDelete)
}

module.exports = {
  addHandlers
}
