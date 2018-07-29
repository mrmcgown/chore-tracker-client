'use strict'

const store = require('../store')

let table = document.getElementById("table")

const showChoresSuccess = function (data) {
  $('#message').text('Showed chores successfully').show().delay(1500).fadeOut()
  $('#message').css('background-color', 'green')
  console.table(data.chores)
  data.chores.forEach(chore => {
    const choreHTML = (`
      <tr data-id=${chore.id}>
        <td>${chore.name}</td>
        <td>${chore.id}</td>
        <td>${chore.estimated_time}</td>
        <td>${chore.is_finished}</td>
        <td>${chore.frequency}</td>
        <td><button type="button" class="updBut" class="btn btn-default">Update</button></td>
        <td><button type="button" class="delBut" class="btn btn-default">Delete</button></td>
      </tr>
    `)
    $('#table').append(choreHTML)
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
  $('#add-chore')[0].reset()
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
