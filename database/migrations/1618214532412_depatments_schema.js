'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DepatmentsSchema extends Schema {
  up () {
    this.create('depatments', (table) => {
      table.increments()
      table.string('name').notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('depatments')
  }
}

module.exports = DepatmentsSchema
