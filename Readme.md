#This is a to do express app, with Sendgrid API, and Automatic image compression for the avatar.

#The Following are the Valid routes that can be used in postman

#User Routes

#GET
/users
get the list of all the users

/users/me
get the current user details

/tasks?desc=1:-1
get the list of tasks 
descending or ascending ordered

/task/:id
get a particular task with its id

#POST
 /users/login 
 Login to your user account
 body:
 {
     "email":"youremail@something.com",
     "password":"yourpassword"
 }

 /users
  Create a new User
 body:
 {
     "email":"youremail@something.com",
     "password":"yourpassword"
 }

 /users/logout
 Logout from your current user account.

 /users/logoutall
 Remove your history of logins and delete all the tokens.

 /users/me/avatar
 Upload an image of jpg or png to the database as buffer data.
 
 body: form-data, {
     image(key): files(value)
 }

 /task
 Create a new task 
 body:{
    "description":"",
    "completed":""
 }

 #DELETE
 /users/me/avatar
 Delete the avatar i.e the image of the current user.

 /users/me
 Delete the Current user from the database

 /tasks/:id
 delete a task by its id   

 #PATCH

 /users/me
 update the current users fields
 body:{
     "name":"string",
     "age":"number",
     "email":"string",
     "password":"string"
 }

 /tasks/:id
 update a task by id.
 body:{
     "description":"",
     "completed":""
 }