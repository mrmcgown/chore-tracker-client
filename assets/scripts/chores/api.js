'use strict'

const config = require('../config')
const store = require('../store')

const showChores = function (data) {
  return $.ajax({
    url: config.apiUrl + '/chores',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const addChore = function (data) {
  return $.ajax({
    url: config.apiUrl + '/chores',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteChore = function (data) {
  return $.ajax({
    url: config.apiUrl + '/chores/' + store.chore.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateChore = function (data) {
  console.log('data is ', data)
  return $.ajax({
    url: config.apiUrl + '/chores/' + store.chore.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  showChores,
  addChore,
  deleteChore,
  updateChore
}
