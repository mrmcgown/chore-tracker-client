'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')

const onAddChore = function (event) {
  event.preventDefault()
  console.log('add chore ran!')

  const data = getFormFields(this)
  console.log(this)
  console.log(data)
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
  api.deleteChore(data)
    .then(ui.deleteChoreSuccess)
    .catch(ui.deleteChoreFailure)
}

const onUpdateChore = function (event) {
  event.preventDefault()
  console.log('update chore ran')

  const data = getFormFields(this)

  api.updateChore(data)
    .then(ui.updateChoreSuccess)
    .catch(ui.updateChoreFailure)
}

const addHandlers = () => {
  $('#add-chore').on('submit', onAddChore)
  $('#delete-chore').on('submit', onDeleteChore)
  $('#udpate-chore').on('submit', onUpdateChore)
  $('#options').hide()
}

module.exports = {
  addHandlers
}
