const mysql = require('mysql')
const credentials = require('./../../config.js')

module.exports = connection = mysql.createConnection({
    host: credentials.host,
    user: credentials.user,
    password: credentials.password,
    database: credentials.database
})