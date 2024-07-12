const crypto = require('crypto')

export function generateRandomString (length) {
  return crypto.randomBytes(Math.ceil(length * 0.5))
    .toString('hex')
    .slice(0, length)
}
