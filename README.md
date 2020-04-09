A form submission api that stores data in JSON files; created as part of a course at York University, Toronto.

TODO:

*** phase two ***
* set up default error handling middleware  --- DONE
* set up JSON parsing middleware            --- DONE
* create more specific route names          --- DONE

*** phase three ***
* save submissions to JSON file             --- DONE
* read submissions from JSON file           --- DONE
* user registration                         --- DONE

*** extra ***
* user login
- create session middleware                 --- DONE
- check if username exists in db
- check if password is correct
- log user in
- logout
* (extra): templated HTML for
    submissions listing (read from file)    --- DONE

    "npm start" to start server
    http://localhost:3000
    http://localhost:3000/contact_us/list to see list of submissions
    form submissions written to src/db/submissions.json
    user registrations in src/db/users.json


### Template for adding submissions ###
{
    "name": "mauro",
    "email": "mauro.meden@gmail.com",
    "message": "hello",
    "phone": "xxx-xxx-xxxx"
}

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