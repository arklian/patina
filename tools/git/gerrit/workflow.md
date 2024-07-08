# Workflow

This document outlines the step-by-step workflow loop in creating a change in Gerrit and getting it
merged. These steps are generally the ones I use, and I recommend that beginners stick to these
steps until they gain an understanding and mastery of the tools.

It is assumed that the steps in `gerrit/setup.md`'s local setup are complete.

1. Starting from the `main` branch, update it to the most up to date by running `git pullg`
2. Create a new branch using `git switch -c branch/name`
3. Commit as often as desired locally with temporary commit messages
4. Regularly pull from origin/main throughout the process using `git pullg`
   - If merge conflicts occur, a workflow to resolve it is included below
5. Finish up feature
6. Reorganize commits using various techniques:
   - `git rebase -i origin/main HEAD` 
   - `git commit --amend` 
   - Sublime Merge -> Edit Commit -> Edit Commit Message
   - Sublime Merge -> Edit Commit -> Edit Commit Contents
   - Sublime Merge -> Edit Commit -> Squash with Parent
   - Sublime Merge -> Edit Commit -> Move Commit Up/Down
7. Clean up commit message
   - Write concise summary under 72 chars prefixed by topic/service
   - Add description on decisions made and why/how the changes are what they are
   - Add task tracking id: `L=ENG-XXX`
   - Add testing: `TEST=manual|auto|compile|none`
   - Add testing details: `Ran page locally and validated feature works`
   - TODO(Henry): Add screenshot for frontend stories 
8. Run `git up` to upload the changes to Gerrit
9. TODO(Henry): Wait for CI checks to pass
10. Assign a reviewer and get feedback in Gerrit
11. Update commits using `Edit Commit Contents` or other means to resolve feedback
12. Run `git up` again to update the changes on Gerrit
13. Continue this cycle until the changes are approved
14. Ship the change!


If you are blocked by a review, but can continue working on the feature that builds upon the changes
in the code review, just make more commits on top of the existing ones. Gerrit handles chained
commits and their Code Reviews natively.

TODO(Henry): Automate deletion of GitHub pull requests once shipped.


### Merge Conflicts 
When running `git pullg`, it's possible that there are merge conflicts if a commit has been
submitted to main that touched the same lines in the same files as your changes. Gerrit should
prevent CRs from being shipped if merge conflicts exist.

Generally, merge conflicts should be resolved locally, and then pushed back up into Gerrit. 
This can be done by:
1. Go to the branch with the changes 
   - Alternatively, checkout the branch from Gerrit using Download -> Checkout and Create Branch
2. Run `git pullg` to rebase the commits in the branch onto origin/main
3. Look at which files have merge conflicts in Sublime Merge
4. Open those files in IntelliJ or search the codebase (cmd+shift+f) for `>>>>>>`
5. Resolve merge conflicts locally and save
6. Stage updated files in Sublime Merge
7. Commit changes in Sublime Merge
8. Continue rebase in Sublime Merge
9. Repeat if multiple commits in the same branch are conflicting
10. Once rebasing is complete, retest changes to ensure they still work
11. Run `git up` to upload the fixed commits to Gerrit


