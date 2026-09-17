### Github Search Cheat Sheet
GitHub’s search supports a variety of different operations. Here’s a quick cheat sheet for some of the common searches.

For more information, visit our [search help section](https://help.github.com/articles/about-searching-on-github/).

### Basic search
| This search                      | Finds repositories with…                                  |
|----------------------------------|-----------------------------------------------------------|
| cat stars:>100                   | Find cat repositories with greater than 100 stars.        |
| user:defunkt                     | Get all repositories from the user defunkt.               |
| tom location:"San Francisco, CA" | Find all tom users in "San Francisco, CA".                |
| join extension:coffee            | Find all instances of join in code with coffee extension. |
| NOT cat                          | Excludes all results containing cat.                      |


### Repository search
[see](https://help.github.com/articles/searching-repositories)
Repository search looks through the projects you have access to on GitHub. You can also filter the results:

| This search             | Finds repositories with…                                     |
| ----------------------- | ------------------------------------------------------------ |
| cat stars:>100          | Find cat repositories with greater than 100 stars.           |
| user:defunkt            | Get all repositories from the user defunkt.                  |
| pugs pushed:>2013-01-28 | Pugs repositories pushed to since Jan 28, 2013.              |
| node.js forks:<200      | Find all node.js repositories with less than 200 forks.      |
| jquery size:1024..4089  | Find jquery repositories between the sizes 1024 and 4089 kB. |
| gitx fork:true          | Repository search includes forks of gitx.                    |
| gitx fork:only          | Repository search returns only forks of gitx.                |
|                         |                                                              |


### [Code search](https://help.github.com/articles/searching-code)
Code search looks through the files hosted on GitHub. You can also filter the results:

| This search                      | Finds repositories with…                                                       |
|----------------------------------|--------------------------------------------------------------------------------|
| install repo:charles/privaterepo | Find all instances of install in code from the repository charles/privaterepo. |
| shogun user:heroku               | Find references to shogun from all public heroku repositories.                 |
| join extension:coffee            | Find all instances of join in code with coffee extension.                      |
| system size:>1000                | Find all instances of system in code of file size greater than 1000kbs.        |
| examples path:/docs/             | Find all examples in the path /docs/.                                          |
| replace fork:true                | Search replace in the source code of forks.                                    |


### Issue search[](https://help.github.com/articles/searching-issues)
Issue search looks through issues and pull requests on GitHub. You can also filter the results:

| This search                   | Finds issues…                                   |
|-------------------------------|-------------------------------------------------|
| encoding user:heroku          | Encoding issues across the Heroku organization. |
| cat is:open                   | Find cat issues that are open.                  |
| strange comments:>42          | Issues with more than 42 comments.              |
| hard label:bug                | Hard issues labeled as a bug.                   |
| author:mojombo                | All issues authored by mojombo.                 |
| mentions:tpope                | All issues mentioning tpope.                    |
| assignee:rtomayko             | All issues assigned to rtomayko.                |
| exception created:>2012-12-31 | Created since the beginning of 2013.            |
| exception updated:<2013-01-01 | Last updated before 2013.                       |



### User search[](https://help.github.com/articles/searching-users)
User search finds users with an account on GitHub. You can also filter the results:

| This search                      |              Finds repositories with…               |
| -------------------------------- |---------------------------------------------------|
| fullname:"Linus Torvalds"        |     Find users withthefullname"LinusTorvalds".      |
| tom location:"San Francisco, CA" |      Find all tom users in "SanFrancisco,CA".       |
| chris followers:100..200         |  Findallchrisuserswithfollowersbetween100and 200.   |
| ryan repos:>10                   | Find all ryan users with more than 10 repositories. |


# GIT

## 1. Normal command

- **ls(git) and dir(cmd)** : show list of file
- **cd drive_name** :move the drive
- **cd "folder_name/"** :move in folder
- **cd ..** :back into current directory
- **Type nul "file_name"(cmd) and touch "file_name"**:create file
- **mkdir "folder name"** : create a folder
- **Cat "file name"**: show text in file

## 2. Vim editor command

1. **vi file_name** : create file
2. **i** : use to start write in vim editor
3. **esc & :x** :exit ti vim editor

---

## 3. Config:

---

- **git config --global credential.username "user_name"** : cahnge credential (authore).
- **git config --global user.email** : set email.
- **git config --global user.name** : set name.

---

## 4. Basic and Beginner Git Commands:

---

- **git init** : Initializes a new Git repository in the current directory.
- **git add "file"** : Adds a file to the staging area for a commit.
- **git commit -m "Commit message"** : Commits the changes in the staging area to the repository with a commit message.
- **git status** : Shows the current status of the repository, including changes that have been made and files that are in the staging area.
- **git log** : Shows a log of all commits that have been made in the repository.
- **git diff** : Shows the differences between the current state of the repository and the last commit.
- **git branch** : Lists all local branches in the repository.
- **git checkout "branch"** : Switches to a different branch.
- **git merge "branch"** : Merges the specified branch into the current branch.
- **git clone "repository"** : Clones a remote Git repository to a local directory.
- **git restore --staged "file name"** :out of the stage area
- **git reset "hash id"**:remove all the commit after the hash id
- **git stash** : If you want not to commit and hide from stage area
- **git stash pop** :unhide and go hide file stage area

## 5. Branch in Git

- **git branch "branch_name"** : create branch
- **git checkout "branch_name"** : chekout the branch
- **git merge "branch_name"** : merge the branch with main branch
- **git checkout "branch_name^"** : checkout the above back commit of the branch
- **git branch -d "branch_name"** : delete the branch
- **git branch -m old_name new_name** : Rename the branch name
- **git push -u origin main** : set main as a defalut branch
- **git branch --set-upstream-to=origin/main** : This sets the upstream branch for the current branch to main, which will pull changes from the renamed main branch on the remote repository.

## 6. Remote Git Commands:

---

- **git remote** : Lists all remote repositories that are associated with the current Git repository.
    
- **git remote add "name" "url"** : Adds a new remote repository to the current Git repository.
    
- **git remote add "name" "url"** : Adds a new remote repository to the current Git repository.
    
- **git push "remote" "branch"** : Pushes local changes to the specified remote repository and branch.
    
- **git fetch "remote"** : Fetches changes from the specified remote repository.
    
- **git pull "remote" "branch"** : Fetches changes from the specified remote repository and merges them into the current branch.
