const { fetch } = require('../../lib/postgres.js')
const {verify} = require('./../../lib/jwt.js')
const {ADDBALANCE} = require('./query.js')
async function ADD_BALANCE({tempscore,chin_key},{token}){
  try {
    console.log(token)
    let {id} = verify(token)
    console.log(id,tempscore)
    let balance = await fetch(ADDBALANCE,id,tempscore,chin_key)
    return balance
  } catch (error) {
    console.log(error)
  }
}


module.exports = {
  ADD_BALANCE
}