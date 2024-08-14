const mysql = require('mysql2');

const connection = mysql.createConnection({
	host: '0.0.0.0',
	port: 3306,
	database: 'TEST',
	user: 'testuser',
	password: '123321'
});

module.exports = {
	
	query(sql){
		return new Promise((resolve, reject) => {
			connection.query(sql, (err, rows) => {
				if (err instanceof Error) {
					reject(err);
				}
				
				resolve([rows]);
			})
		})
	},
	
	ping(){
		return new Promise((resolve, reject) => {
			connection.connect((err) => {
				if (err instanceof Error) {
					reject('MariaDB server is down!');
				}
				
				resolve(true);
			});
		})
	},
	
};