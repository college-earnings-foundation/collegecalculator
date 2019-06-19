# collegecalculator
College Value/Earnings Calculator


##Git-Flow:
The branch Caleb-Redd was merged into the branch Chris-Cruz. Therefore, the branch Caleb-Redd is no longer needed and gets deleted. Instead of making a new branch everytime we push and merge. We will all(or in this case both) use a Playground branch that will eventually be merged onto master when it is at functional and stable points. So for now, Chris-Cruz is our playground branch and we will both initialize our day with:
###Pull requests make sure we have the most updated code from our remote branch on github.com
>git pull

###After committing changes we will git pull once again and then git push in case someone has pushed since our last pull we can avoid conflicts before pushing new content from local branch
>git add 
>git commit 
>git pull
>git push

###After merging Chris-Cruz into master we can create branch names based on focus of project for that class time. 
>git checkout master
>git checkout -b New-Focus
###Make sure to push new topic branch so that everyone else can work into that branch too
>git commit -m "Initialize New-Focus branch for working on new focus"
>git push
###Everyone else 
>git pull
>git checkout New-Focus
>git pull



