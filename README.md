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
* user login:
>>> create a file when user logs in         --- DONE
>>> password check for login
>>> delete file when user logs out          --- DONE
* (extra): templated HTML for submissions listing (read from file)

    "npm start" to start server
    http://localhost:3000
    form submissions written to src/db/submissions.json
    user registrations in src/db/users.json
    user sessions in src/sessions

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