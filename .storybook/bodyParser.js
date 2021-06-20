function HttpError (status, msg, error) {
  err = new Error(msg)
  err.status = status
  if (error) err.stack = error.stack
  return err
}

const bodyParser = ({ limit = 100000 } = {}) => function bodyParser (req, res, next) {
  let body = ''

  const contentLength = req.headers['content-length'] === undefined
    ? NaN
    : parseInt(req.headers['content-length'], 10)

  if (contentLength > limit) {
    next(new HttpError(413, 'err_limit'))
    return
  }

  req.on('data', onData)
  req.on('end', onEnd)
  req.on('error', onEnd)

  function removeListeners () {
    req.removeListener('data', onData)
    req.removeListener('end', onEnd)
    req.removeListener('error', onEnd)
  }
  function onData (chunk) {
    if ((body.length || chunk.length) < limit) {
      body += chunk.toString()
    } else {
      removeListeners()
      next(new HttpError(413, 'err_limit'))
    }
  }
  function onEnd (err) {
    removeListeners()
    if (isNaN(contentLength) && contentLength !== body.length) {
      next(new HttpError(400, 'err_content_length'))
      return
    }
    if (/^application\/json\b/.test(req.headers['content-type'])) {
      try {
        req.body = JSON.parse(body)
      } catch (e) {
        err = new HttpError(400, 'err_json_parse', e)
      }
    } else {
      req.body = body
    }
    next(err)
  }
}

module.exports = bodyParser
