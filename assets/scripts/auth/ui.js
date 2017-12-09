'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').html('Signed up successfully')
  $('input').val('')
}

const signUpFailure = function () {
  $('#message').html('Error on sign up. Please try again.')
}

const signInSuccess = function (data) {
  store.user = data.user
  console.log(store.user.event)
  $('#message').html('Signed in successfully')
  $('.signedinactions').show()
  $('#auth-actions').hide()
  $('#eventIndex').show()
  $('#create-event-button').show()
  $('input').val('')
  $('#change-password-button').show()
  $('#sign-out').show()
  $('#my-events-button').show()
  // if (data.user.events.length !== 0) {
  //   $('#event-update').show()
  //   $('#event-delete').show()
  // } else {
  //   $('#massage').html('please create an event')
  // }
}

const signInFailure = function () {
  $('#message').html('Error on sign in. Please try again.')
}

const signOutSuccess = function () {
  $('#message').html('Signed out successfully')
  store.user = null
  $('#auth-actions').show()
  $('.user-actions').hide()
  $('#eventslist').hide()
  $('.event-forms').hide()
}

const signOutFailure = function () {
  $('#message').html('Error on sign out. Please try again.')
}

const changePasswordSuccess = function () {
  $('#message').html('Changed password successfully')
  $('input').val('')
}

const changePasswordFailure = function () {
  $('#message').html('Error on change password. Please try again.')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
