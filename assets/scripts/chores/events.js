'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onShowChores = function (event) {
  event.preventDefault()
  console.log('show chores ran!')
  $('#table').find('form.tr:has(span)').remove()

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
  api.addChore(data)
    .then(() => onShowChores(event))
    .then(ui.addChoreSuccess)
    .catch(ui.addChoreFailure)

  $('.form-group').reset()
}

const onDeleteChore = function (event) {
  event.preventDefault()
  console.log('delete chore ran!')
  const choreId = $(event.target).closest('form.tr').attr('data-id')

  console.log(choreId)
  api.deleteChore(choreId)
    .then(() => onShowChores(event))
    .then(ui.deleteChoreSuccess)
    .catch(ui.deleteChoreFailure)
}

const onUpdateChore = function (event) {
  event.preventDefault()
  console.log('update chore ran')
  const choreId = $(event.target).closest('tr').attr('data-id')
  console.log(choreId)

  const data = getFormFields(this)

  api.updateChore(data)
    .then(ui.updateChoreSuccess)
    .catch(ui.updateChoreFailure)
}

const addHandlers = () => {
  $('#chores-search').on('submit', onShowChores)
  $('#add-chore').on('submit', onAddChore)
  $('#table').on('click', 'button.delBut', onDeleteChore)
  $('#table').on('click', 'button.updBut', onUpdateChore)
  $('#table, #options').hide()
}

module.exports = {
  onShowChores,
  addHandlers
}
