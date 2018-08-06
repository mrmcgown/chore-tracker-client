'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onShowChores = function (event) {
  event.preventDefault()
  // console.log('show chores ran!')
  $('#table').find('form.tr:has(span)').remove()

  api.showChores()
    .then(ui.showChoresSuccess)
    .then(addTableHandlers)
    .catch(ui.showChoresFailure)

  $('span.td :input').attr('readonly', 'readonly')
}

const onAddChore = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log('add chore ran!')
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
}

const onDeleteChore = function (event) {
  event.preventDefault()
  // console.log('delete chore ran!')
  const choreId = $(event.target).closest('form.tr').attr('data-id')

  // console.log(choreId)
  api.deleteChore(choreId)
    .then(ui.deleteChoreSuccess)
    .then(() => onShowChores(event))
    .catch(ui.deleteChoreFailure)
}

const onUpdateChore = function (event) {
  event.preventDefault()
  // console.log('update chore ran')
  const choreId = $(event.target).closest('form.tr').attr('data-id')
  // console.log(choreId)

  $('[data-id=' + choreId + ']').find('button.updBut').html('Save')
  $('[data-id=' + choreId + ']').find('input').prop('readonly', false).css('outline', 'auto -webkit-focus-ring-color')
  $('[data-id=' + choreId + ']').find('button.updBut').removeClass('updBut').addClass('savBut')
  $('[data-id=' + choreId + ']').find('button.savBut').prop('type', 'submit')
}

const onSaveChore = function (event) {
  event.preventDefault()
  // console.log('save chore ran')
  const choreId = $(event.target).closest('form.tr').attr('data-id')
  // console.log(choreId)

  let data = {}

  $(event.target).find('input').each((_, el) => {
    data[el.name] = el.value
  })

  data = { chore: data }

  // console.log(`Data to patch is`, data)

  api.updateChore(data, choreId)
    .then(ui.updateChoreSuccess)
    .catch(ui.updateChoreFailure)

  $('[data-id=' + choreId + ']').find('button.savBut').html('Update')
  $('[data-id=' + choreId + ']').find('input').prop('readonly', true).css('outline', 'none')
  $('[data-id=' + choreId + ']').find('button.savBut').removeClass('savBut').addClass('updBut')
}

const addHandlers = () => {
  $('#chores-search').on('submit', onShowChores)
  $('#add-chore').on('submit', onAddChore)
  $('#table, #options').hide()
}
const addTableHandlers = () => {
  $('#table').on('click', 'button.delBut', onDeleteChore)
  $('#table').on('click', 'button.updBut', onUpdateChore)
  $('form.tr').on('submit', onSaveChore)
}

module.exports = {
  onShowChores,
  addHandlers,
  addTableHandlers
}
