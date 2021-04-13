'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.group(() => {
  Route.get('/', 'UserController.index').as('users.index')
  Route.get('/create', 'UserController.create').as('users.create')
  Route.post('/', 'UserController.store').as('users.store')
  Route.get('/:id', 'UserController.detail').as('users.detail')
}).prefix('users')

Route.post('/media/upload', 'MediaController.upload').as('media.upload')
