const mysql = require('mysql2');



connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'UTCamp2021',
    database: 'employee_tracker',
    multipleStatements: true
});

connection.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(`Connected to db. ThreadID: ${connection.threadId}`);
})

module.exports = connection;