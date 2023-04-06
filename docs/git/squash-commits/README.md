# Git | Squash Commits

Summary - A "squash commit" is how you merge commit messages for a feature branch into one message. Although the code doesn't read "squash" it's a common term that's used. The code, as you'll see, is just another way to use `rebase`.


> :memo: **Note:** If desired you should be able to merge certain selected commit messages together and not HAVE to always merge all of them into one. I'm going to test this. Wish me luck bitch! 


<br>

### Steps
*Prerequisite: You must know how many commits that you are going to merge / squash. One trick to this would be to push to Github, look at the Feature Branch, and see how many commits there are.*

1. From knowing how many commits you have enter the following command with the end number being the number of commits on this ticket:
```
git rebase -i HEAD~2
``` 
- "-i" == Means go into interactive mode  
- "2" == Total number of commits in your Feature branch you want to include in this squash process  
2. You'll see something like the following:  
![Image from images folder](~@source/images/git/squash-commit/git_squash_select-commits.png)  
3. First you'll see all commits at the top of the screen from oldest on the very top down to the newest:
![Image from images folder](~@source/images/git/squash-commit/git_squash_commit-list.png)  
4. You now need to indicate what you want to happen to each individual commit message. There are many options listed but you're just concerned with "squash" and "reword". To indicate what to do with each commit you're going to place an "s" or a "p" next to those commits. To do that you need to edit the file.
5. Use VIM (VI) to edit the file and you know how to do this. Like normal VIM, enter into INSERT mode by typing `i`. 
6. Set the single letter command next to each commit based on what you want to do with that commit. In this situation you want to "reword" the oldest (commit at the very top) and "squash" all of the reset of the commits into one. Place an "r" next to the top commit and an "s" next to the next commit down:  
![Image from images folder](~@source/images/git/squash-commit/git_squash_letter-commands.png)  
> :warning: **Warning:** The "r" command can only be placed on the first line and no other!  

> :memo: **Note:** Just FYI. You had one of these where you had 80 commits! That means you woud have to go in an manually change all of those "pick" to an "s". F that!!! You got smart and used a "find / replace" for VIM. Look at the "Find Replace" article.
7. asdf
8. asdf