'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').html('Signed up successfully')
  console.log(data)
}

const signUpFailure = function (error) {
  $('#message').html('Error on sign up. Please try again.')
  console.error(error)
}

const signInSuccess = function (response) {
  $('#message').html('Signed in successfully')
  $('.hideme').show()
  $('#sign-up-dropdown').hide()
  $('#sign-in-dropdown').hide()
  console.log('signIn success ran. data is :', response)
  store.user = response.user
}

const signInFailure = function (error) {
  $('#message').html('Error on sign in. Please try again.')
  console.log('signIn failure ran. error is :', error)
}

const signOutSuccess = function () {
  $('#message').html('Signed out successfully')
  console.log('signOut success ran. and nothing was returned')
  store.user = null
  $('#sign-up-dropdown').show()
  $('#sign-in-dropdown').show()
}

const signOutFailure = function (error) {
  $('#message').html('Error on sign out. Please try again.')
  console.log('signOut failure ran. error is :', error)
}

const changePasswordSuccess = function () {
  $('#message').html('Changed password successfully')
  console.log('changePassword success ran. and nothing was returned')
}

const changePasswordFailure = function (error) {
  $('#message').html('Error on change password. Please try again.')
  console.log('changePassword failure ran. error is :', error)
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
