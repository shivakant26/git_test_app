# Feature
--------------------
--------------------

1. if git not installed in your file . so you need first installed git
    git init

2. next you check git status it showing how many file are changed or not.
    git status 

3. add all file to staging.
    git add .

    Note :- some file are not needed to be added in git repo like as 
    /node-module
    /package-lock.json

4. if some file are move from stagging so use below command
   git reset filename
   example:- git reset package-lock.json

5. before pushing code you need to check first user and its email
    git config user.name
    git config user.email

    if user name not set or set another user you need to set them
    git config user.name "name of user"
    git config user.email "email of user"

6. now you make your commit
    git commit -m "put some line of work status"

7. after commited code you need to push your code so before pushing code you need to check
   remote origin . if remote origin not there you need to add origin

   for checking remote origin
   git remote -v

   for add remote origin
   git add origin "https//:remaing url"

   for remove origin 
   git remove origin "url" 

8. after add succussfully your remote origin you need to push your code 
   git push -u origin branch-name 

   here git ask login credetial so you have two option 
   8.1 token base authentication
   8.2 ssh key base authentication

   now succussfully push your code on repo

