'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onShowChores = function (event) {
  event.preventDefault()
  console.log('show chores ran!')

  api.showChores()
    .then(ui.showChoresSuccess)
    .catch(ui.showChoresFailure)
}

const onAddChore = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('add chore ran!')
  console.log(this)
  console.log(data)
  if (data.chore.name === '') {
    // alert('title required')
    $('#message').html('<p>Name is required</p>')
    $('#message').css('background-color', 'red')
    return false
  } else if (data.chore.estimated_time === '') {
    $('#message').html('<p>Estimated time is required</p>')
    $('#message').css('background-color', 'red')
    return false
  } else if (data.chore.is_finished === '') {
    $('#message').html('<p>Is finished? is required</p>')
    $('#message').css('background-color', 'red')
    return false
  } else if (data.chore.frequency === '') {
    $('#message').html('<p>Frequency is required</p>')
    $('#message').css('background-color', 'red')
    return false
  } else if (data.chore.last_completed === '') {
    $('#message').html('<p>Date last completed is required</p>')
    $('#message').css('background-color', 'red')
    return false
  }
  // onShowChores()
  api.addChore(data)
    .then(ui.addChoreSuccess)
    .catch(ui.addChoreFailure)
}

const onDeleteChore = function (event) {
  event.preventDefault()
  console.log('delete chore ran!')

  const data = getFormFields(this)
  console.log(this)
  console.log(data)
  // onShowChores()
  api.deleteChore(data)
    .then(ui.deleteChoreSuccess)
    .catch(ui.deleteChoreFailure)
}

const onUpdateChore = function (event) {
  event.preventDefault()
  console.log('update chore ran')

  const data = getFormFields(this)

  // onShowChores()
  api.updateChore(data)
    .then(ui.updateChoreSuccess)
    .catch(ui.updateChoreFailure)
}

const addHandlers = () => {
  $('#chores-search').on('submit', onShowChores)
  $('#add-chore').on('submit', onAddChore)
  $('#delete-chore').on('submit', onDeleteChore)
  $('#udpate-chore').on('submit', onUpdateChore)
  $('#options').hide()
}

module.exports = {
  onShowChores,
  addHandlers
}
