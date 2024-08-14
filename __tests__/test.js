const { expect, test } = require('@jest/globals');
const { query, ping } = require('./../index.js');

test('Connection to MariaDB', async() => {
	await expect(ping()).resolves.toBe(true);
});

test('Show MariaDB tables', () => {
	const expected = [{ 'Tables_in_TEST': 'TEST_TABLE' }];
	
	query("CREATE TABLE `TEST_TABLE` (`test_row` varchar(255) NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;").then(async() => {
		await expect(query(`SHOW TABLES`)).resolves.toEqual(expected);
	})
});