'use strict'

class MediaController {
  async upload({ request, response}) {
    const validationOptions = {
      types: ['image', 'video'],
      size: '20mb',
      extnames: ['jpg', 'jpeg', 'png', 'gif', 'mp4']
    }
    const asset = request.file('asset', validationOptions)
    console.log(asset);
  }
}

module.exports = MediaController
