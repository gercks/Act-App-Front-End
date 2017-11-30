'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onCreateEvent = function (event) {
  event.preventDefault()
  console.log('event created!')

  const data = getFormFields(this)
  api.createEvent(data)
    .then(ui.createEventSuccess)
    .catch(ui.createEventFailure)
}

const onEventIndex = function (event) {
  event.preventDefault()
  console.log('getting events!')

  const data = getFormFields(this)
  api.eventIndex(data)
    .then(ui.eventIndexSuccess)
    .catch(ui.eventIndexFailure)
}

const onEventUpdate = function (event) {
  event.preventDefault()
  console.log('updating your event!')

  const data = getFormFields(this)
  console.log('hey' + data.event.id)
  api.eventUpdate(data)
    .then(ui.eventUpdateSuccess)
    .catch(ui.eventUpdatefailure)
}

const addHandlers = () => {
  $('#create-event').on('submit', onCreateEvent)
  $('#eventIndex').on('click', onEventIndex)
  $('#event-update').on('submit', onEventUpdate)
}

module.exports = {
  addHandlers
}
