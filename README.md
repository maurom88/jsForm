
This respository is a backend for https://github.com/maurom88/portfolio_ui

    Start server: npm start

    Read Contact form submission: http://localhost:9000/contact/list list of submissions
    
    Test routes:
    A list of registered users: /users
    User registration: /users/signup

### Create db user

USE mysql;
CREATE USER 'nodeclient'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';
GRANT ALL PRIVILEGES ON *.* TO 'nodeclient'@'localhost';
flush privileges;
