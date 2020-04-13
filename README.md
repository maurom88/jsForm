A form submission api that stores data in JSON files; created as part of a course at York University, Toronto.
This respository is a backend for https://github.com/maurom88/portfolio_ui

    "npm start" to start server
    http://localhost:9000
    http://localhost:9000/contact_us/list to see list of submissions
    user registrations in src/db/users.json

### Template for adding users ###
{
    "name": "mauro",
    "password": "aaa"
}

### Create db user
USE mysql;
CREATE USER 'nodeclient'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';
GRANT ALL PRIVILEGES ON *.* TO 'nodeclient'@'localhost';
flush privileges;
