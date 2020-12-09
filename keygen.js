const EC = require('elliptic').ec
const ec = new EC('secp256k1')

// Generate key pair
const key = ec.genKeyPair()

// Get keys
const publicKey = key.getPublic('hex')
const privateKey = key.getPrivate('hex')

console.log(`Private: ${privateKey}`)
console.log(`Public: ${publicKey}`)