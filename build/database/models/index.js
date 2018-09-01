const credentials = require('./../../../config.js')
const db = require('./../../database/index.js')
const axios = require('axios')
const bcrypt = require('bcryptjs')
const session = require('express-session')
const MySQLStore = require('express-mysql-session')(session)
const moment = require('moment')

const saltRounds = 6

db.connect()

module.exports = {
    
}