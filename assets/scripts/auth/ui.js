'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully').show().delay(1500).fadeOut()
  $('#message').css('background-color', 'green')
  $('#sign-up')[0].reset()
  $('#signUp').modal('hide')
  // console.log('signUpSuccess ran. Data is :', data)
}

const signUpFailure = function (error) {
  $('#message').text('Error on sign up').show().delay(1500).fadeOut()
  $('#message').css('background-color', 'red')
  console.log('signUpFailure ran. Error is :', error)
}

const signInSuccess = function (data) {
  // $('#message').html('<div class="alert alert-success"><strong>Success!</strong> You should <a href="#" class="alert-link">read this message</a>.</div>').show()
  $('#message').text('Signed in successfully').show().delay(1500).fadeOut()
  $('#message').css('background-color', 'green')
  $('#sign-in')[0].reset()
  $('#table-headers, .chore-changes, #sign-out, #changePassButton, #options, #chores-search, #add-chore, #delete-chore, #update-chore').show()
  $('#table, #signUpButton, #signInButton').hide()
  $('#signIn').modal('hide')
  // console.log('signInSuccess ran. Data is :', data)
  store.user = data.user
}

const signInFailure = function (error) {
  $('#message').text('Error on sign in').show().delay(1500).fadeOut()
  $('#message').css('background-color', 'red')
  console.log('signInFailure ran. Error is :', error)
}

const changePasswordSuccess = function (data) {
  $('#message').text('Changed password successfully').show().delay(1500).fadeOut()
  $('#message').css('background-color', 'green')
  $('#change-password')[0].reset()
  $('#changePassword').modal('hide')
}

const changePasswordFailure = function (error) {
  $('#message').text('Error on change password').show().delay(1500).fadeOut()
  $('#message').css('background-color', 'red')
  console.log('changePasswordFailure ran. Error is :', error)
}

const signOutSuccess = function () {
  $('#message').text('Signed out successfully').show().delay(1500).fadeOut()
  $('#message').css('background-color', 'green')
  $('#table').find('tr:gt(0)').remove()
  $('#table, #table-headers, .chore-changes, #sign-out, #changePassButton, #options, #chores-search, #add-chore, #delete-chore, #update-chore').hide()
  $('#signUpButton, #signInButton').show()
  // $('#content').html('')
  store.user = null
}

const signOutFailure = function (error) {
  $('#message').text('Error on sign out').show().delay(1500).fadeOut()
  $('#message').css('background-color', 'red')
  console.log('signOutFailure ran. Error is :', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutFailure,
  signOutSuccess
}
