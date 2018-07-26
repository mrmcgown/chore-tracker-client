'use strict'

const store = require('../store')

const showChoresSuccess = function (data) {
  $('#message').text('Showed chores successfully').show().delay(1500).fadeOut()
  $('#message').css('background-color', 'green')
  console.table(data.chores)

  data.chores.forEach(chore => {
    const choreHTML = (`
    <h4>Name: ${chore.name}</h4>
    <p>ID: ${chore.id}</p>
    <p>Estimated Time ${chore.estimated_time} minutes</p>
    <p>Is finished? ${chore.is_finished}</p>
    <p>Frequency ${chore.frequency} days</p>
    <br>
  `)
    $('#content').append(choreHTML)
  })
  console.log('showChoresSuccess ran. Data is :', data)
}

const showChoresFailure = function (error) {
  $('#message').text('Error on show chores').show().delay(1500).fadeOut()
  $('#message').css('background-color', 'red')
  console.log('showChoresFailure ran. Error is :', error)
}

const addChoreSuccess = function (data) {
  store.game = data.game
  $('#message').text('Added chore successfully').show().delay(1500).fadeOut()
  $('#message').css('background-color', 'green')
  $('#signUp').modal('hide')
  console.log('addChoreSuccess ran. Data is :', data)
}

const addChoreFailure = function (error) {
  $('#message').text('Error on add chore').show().delay(1500).fadeOut()
  $('#message').css('background-color', 'red')
  console.log('addChoreFailure ran. Error is :', error)
}

const deleteChoreSuccess = function (data) {
  $('#message').text('Deleted chore successfully').show().delay(1500).fadeOut()
  $('#message').css('background-color', 'green')
  $('#sign-out, #changePassButton').show()
  $('#signUpButton, #signInButton').hide()
  $('#signIn').modal('hide')
}

const deleteChoreFailure = function (error) {
  $('#message').text('Error on delete chore').show().delay(1500).fadeOut()
  $('#message').css('background-color', 'red')
  console.log('deleteChoreFailure ran. Error is :', error)
}

const updateChoreSuccess = function (data) {
  $('#message').text('Updated chore successfully').show().delay(1500).fadeOut()
  $('#message').css('background-color', 'green')
  $('#changePassword').modal('hide')
  console.log('updateChoreSuccess ran. Data is :', data)
}

const updateChoreFailure = function (error) {
  $('#message').text('Error on update chore').show().delay(1500).fadeOut()
  $('#message').css('background-color', 'red')
  console.log('updateChoreFailure ran. Error is :', error)
}

module.exports = {
  showChoresSuccess,
  showChoresFailure,
  addChoreSuccess,
  addChoreFailure,
  deleteChoreSuccess,
  deleteChoreFailure,
  updateChoreSuccess,
  updateChoreFailure
}
