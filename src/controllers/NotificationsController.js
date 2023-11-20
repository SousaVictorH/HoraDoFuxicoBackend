const baseUrl = 'https://app.nativenotify.com/api/notification'

module.exports = {
  async notifyAll(req, res) {
    const pushData = { message: 'this is a test' }

    const data  = {
      appId: 15006,
      appToken: 'GjaYR5H3p888rbYvfB8srT',
      title: 'Title example',
      body: 'Body example',
      dateSent: new Date(),
      pushData: JSON.stringify(pushData),
      bigPictureURL: ''
    }

    fetch(baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(() => {})
    .catch(() => {
      res.status(400).json({ message: 'Error' })
    })
    .finally(() => {
      res.status(200).json({ message: 'Success' })
    })
  }
}
