const { Router } = require('express')
const router = Router()

const { sendMessage } = require('../twilio/send-sms')

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/send-sms', async (req, res) => {
  const { message, phone } = req.body
  const response = await sendMessage(message, phone)
  console.log(response.sid)
  res.send('received')
})

module.exports = router
