const { BlockChain, Transaction } = require('./blockchain')
const EC = require('elliptic').ec
const ec = new EC('secp256k1')

const myKey = ec.keyFromPrivate('0f03d304cd7a6d451b3743f17c00f74b325aa05d3cefd3f69f1912f8912a2f87')
const myWalletAddress = myKey.getPublic('hex')


let biogaCoin = new BlockChain()
console.log(myWalletAddress)

// Create tx
const tx1 = new Transaction(myWalletAddress, 'allens-pc', 10)

// Sign tx with your key
tx1.signTransaction(myKey)

// Add tx to chain
biogaCoin.addTransaction(tx1)


console.log('\nStarting miner...')
biogaCoin.minePendingTransactions(myWalletAddress)

console.log(`\nBalance: ${biogaCoin.getBalanceOfAddress(myWalletAddress)}`)

biogaCoin.chain[1].transactions[0].amount = 1

console.log(`Is chain valid: ${biogaCoin.isChainValid()}`)
