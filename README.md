# Feature
--------------------
--------------------

1. if git not installed in your file . so you need first installed git<br>
    git init

2. next you check git status it showing how many file are changed or not.<br>
    git status 

3. add all file to staging.<br>
    git add .

    Note :- some file are not needed to be added in git repo like as .<br>
    /node-module
    /package-lock.json

4. if some file are move from stagging so use below command.<br>
   git reset filename
   example:- git reset package-lock.json

5. before pushing code you need to check first user and its email.<br>
    git config user.name
    git config user.email

    if user name not set or set another user you need to set them.<br>
    git config user.name "name of user"
    git config user.email "email of user"

6. now you make your commit.<br>
    git commit -m "put some line of work status"

7. after commited code you need to push your code so before pushing code you need to check
   remote origin . if remote origin not there you need to add origin.<br>

   for checking remote origin.<br>
   git remote -v

   for add remote origin.<br>
   git add origin "https//:remaing url"

   for remove origin .<br>
   git remove origin "url" 

8. after add succussfully your remote origin you need to push your code .<br>
   git push -u origin branch-name 

   here git ask login credetial so you have two option .<br>
   8.1 token base authentication
   8.2 ssh key base authentication

   now succussfully push your code on repo.<br>

9. now create a new branch on git.
    git branch name-of-branch

    to check all branch using following commad.<br>
    for checking local 
    git branch

    for checking remote all branch.<br>
    git branch -a

    for create a branch and checkout branch.<br>
    git checkout -b monu_dev

10. Switching one branch to another branch.<br>
    git checkout branchname

11. After some Changes you need to take a pull from master.<br>
    git pull origin master

12. git related information you use.<br>
    git log