'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onCreateEvent = function (event) {
  event.preventDefault()
  // console.log('event created!')
  const data = getFormFields(this)
  api.createEvent(data)
    .then(ui.createEventSuccess)
    .catch(ui.createEventFailure)
}

const onEventIndex = function (event) {
  event.preventDefault()
  // console.log('getting events!')

  const data = getFormFields(this)
  api.eventIndex(data)
    .then(ui.eventIndexSuccess)
    .catch(ui.eventIndexFailure)
}

const onEventUpdate = function (event) {
  event.preventDefault()
  // console.log('updating your event!')

  const data = getFormFields(this)
  console.log(data.event.id)
  api.eventUpdate(data)
    .then(ui.eventUpdateSuccess)
    .catch(ui.eventUpdateFailure)
}

const onEventDelete = function (event) {
  event.preventDefault()
  // console.log('deleting your event!')
  const data = getFormFields(this)
  // console.log(data)
  api.eventDelete(data)
    .then(ui.eventDeleteSuccess)
    .catch(ui.eventDeleteFailure)
}

const showCreateEvent = function (event) {
  $('#create-event').toggle()
}

const showUpdateEvent = function (event) {
  $('#event-update').toggle()
}

const showDeleteEvent = function (event) {
  $('#event-delete').toggle()
}

const addHandlers = () => {
  $('#create-event').on('submit', onCreateEvent)
  $('#eventIndex').on('click', onEventIndex)
  $('#event-update').on('submit', onEventUpdate)
  $('#event-delete').on('submit', onEventDelete)
  $('#create-event-button').on('click', showCreateEvent)
  $('#update-event-button').on('click', showUpdateEvent)
  $('#delete-event-button').on('click', showDeleteEvent)
}

module.exports = {
  addHandlers
}
