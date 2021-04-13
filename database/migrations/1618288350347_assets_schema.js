'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AssetsSchema extends Schema {
  up () {
    this.create('assets', (table) => {
      table.increments()
      table.bigInteger('owner_id')
      table.bigInteger('artist_id')
      table.string('name', 255)
      table.float('price')
      table.string('nft_contract_id', 255)
      table.bigInteger('token_id')
      table.timestamps()
      table.timestamp('deleted_at')
    })
  }

  down () {
    this.dropIfExists('assets')
  }
}

module.exports = AssetsSchema
