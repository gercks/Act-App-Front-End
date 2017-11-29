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

const addHandlers = () => {
  $('#create-event').on('submit', onCreateEvent)
}

module.exports = {
  addHandlers
}
