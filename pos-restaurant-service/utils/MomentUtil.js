const moment = require('moment')

const getMoment = () => {
    return moment().utc(true)
}

module.exports = {
    getMoment
}