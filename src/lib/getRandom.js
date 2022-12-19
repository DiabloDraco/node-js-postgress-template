const rn = require("random-number") 

let options = {
    min: 10000
    , max: 99999
    , integer: true
}

function getRandomNum() {
    return rn(options)
}

module.exports = {
    getRandomNum
}