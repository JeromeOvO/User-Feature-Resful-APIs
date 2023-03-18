How to run the application:
1. Open the code file in IDEA
2. open terminal and type in "nodemon server.js"

Method to test the resful apis:
1. go to the file "request.rest"
2. run the HTTP request in the file in order to test each function
3. the test result will display in terminal

How to test register:
1. go to the file "request.rest"
2. run the first HTTP request -- expect show up [] 
3. run the second HTTP request -- expect show up empty resonpse
4. run the first HTTP request -- expect show up the information of the registered users

How to test login:
1. go to the file "request.rest"
2. run the third HTTP request -- expect show up "Login Success"
3. run the fourth HTTP request -- expect show up login "Login Failed"

How to test retrive user information:
1. reboot the program in command "nodemon server.js"
2. go to the file "request.rest"
3. run the last HTTP request -- expect show up "Cannot access user information or need login"
4. run the third HTTP request to login
5. run the last HTTP request -- expect show up the information of current user