A form submission api that stores data in JSON files; created as part of a course at York University, Toronto.

TODO:

*** phase two ***
* set up default error handling middleware  --- DONE
* set up JSON parsing middleware            --- DONE
* create more specific route names          --- DONE

*** phase three ***
* save submissions to JSON file             --- DONE
* read submissions from JSON file  
* user registration                         --- DONE
* user login
* (extra): templated HTML for submissions listing (read from file)

    "npm start" to start server
    http://localhost:3000
    form submissions written to static/submissions.json
    users registration in static/users.json

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