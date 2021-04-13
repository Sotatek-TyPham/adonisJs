'use strict'

const User = use('App/Models/User')
const Logger = use('Logger')
const ethers = use("ethers");

class UserController {
  async index ({ view }) {
    const provider = new ethers.providers.Web3Provider('http://127.0.0.1:3333')
    const signer = provider.getSigner()
    console.log(signer);

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

  async function    testFunction( request,response ){
    const userInput = request.only(['name','email','password'])

    let newUser =new User();
    newUser.username= userInput.name;
    newUser.email = userInput.email
    newUser.password=userInput.password

    await newUser. save ()
    return response.json({message: "User created!",user: newUser})
  }
}

module.exports = UserController
