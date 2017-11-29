'use strict'

// const store = require('../store')

const createEventSuccess = function (data) {
  $('#message').text('Event created successfully')
  console.log(data)
}

const createEventFailure = function (error) {
  $('#message').text('Error on create event. Please try again.')
  console.error(error)
}

module.exports = {
  createEventSuccess,
  createEventFailure
}
