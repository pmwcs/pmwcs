const bodyParser = require('./bodyParser.js')

module.exports = function middleware (router) {

  // console.log(router)

  // router.use((req, res, next) => {
  //   console.log(req.url)
  //   next()
  // })

  // test cases for useFetch
  router.get('/use-fetch/test', (req, res) => {
    res.json({ test: 1 })
  })
  router.get('/use-fetch/delayed', (req, res) => {
    const delay = 3000
    setTimeout(() => {
      res.json({ delay })
    }, delay)
  })
  router.get('/use-fetch/timeout', (req, res) => {
    // There is no answer!!!
  })
  router.post('/use-fetch/test', bodyParser(), (req, res) => {
    const { method, url, headers, body } = req
    res.json({method, url, body, headers})
  })
  router.get('/use-fetch/not-json', (req, res) => {
    res.end('This is not a json.')
  })
  router.get('/use-fetch/error-500', (req, res) => {
    res.status(500).json({ error: 'Internal server error' })
  })
}
