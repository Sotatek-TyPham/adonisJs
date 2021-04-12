'use strict'

const User = use('App/Models/User')
const Logger = use('Logger')

class UserController {
  async index ({ view }) {
    const users = await User.all()

    return view.render('users.index', { users: users.toJSON() })
  }

  async create ({ view }) {
    return view.render('users.create')
  }

  async store ({ request, response }) {

    // const data = request.all()
    const data = request.only(['username', 'email', 'password'])
    const user = new User()
    user.username = data.username
    user.email = data.email
    user.password = data.password

    await user.save()

    return response.route('users.detail', { id: user.id })
  }

  async detail ({ params, view }) {
    const user = await User.find(params.id)

    if (!user) {
      return 'user not found!'
    }

    return view.render('users.detail', { user: user})
  }
}

module.exports = UserController
