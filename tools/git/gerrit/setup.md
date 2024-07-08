# Setup
Used to store steps required to set up Gerrit.

## Local Setup
1. Create account at https://gerrithub.io/
   - Connect with your Github Account
     - DEFAULT scope should be fine
     - Cancel when it asks what repos to clone
   - Validate your email if necessary. 
     - Email in Gerrit should match email in Github if you want contributions to show up in your Github profile
   - Ask Henry to join the Patina Network group 
   - Add HTTP login: https://gerrithub.io/settings/ -> HTTP Credentials -> GENERATE NEW PASSWORD -> Save password
2. Add remote to your local git repo. Link at https://gerrithub.io/admin/repos/arklian/patina,general -> Download -> HTTP
  ```
  git remote add gerrit https://<YOURUSERNAME>@gerrithub.io/a/arklian/patina
  ```
3. Authenticate with the http login
  ```
  git remote show gerrit
  ```
4. Add commit hook to automatically add Change-Id on commit
  ```
  f=`git rev-parse --git-dir`/hooks/commit-msg ; mkdir -p $(dirname $f) ; curl -Lo $f https://review.gerrithub.io/tools/hooks/commit-msg ; chmod +x $f
  ```
5. Change the permissions for git-up to allow it to execute
  ```
  chmod +x ~/patina/tools/git/commands/git-up
  ```
6. Add the custom git command to $PATH in your ~/.zshrc file
  ```
  # Add custom git commands
  export PATH=$HOME/patina/tools/git/commands:$PATH
  ```
7. Check setup works by creating a commit and running:
  ```
  git up
  ```


## Setting up GerritHub repo
- Clone Github Repo into GerritHub.
- General -> Submit type -> `Rebase if necessary`
- General -> Require Change-Id in commit message -> True
- General -> Match authored date with committer date upon submit -> True
- General -> Maximum Git object size limit -> 10m
- General -> Reject Duplicate Pathnames -> True
- General -> Reject Submodules -> true
- General -> Reject Symbolic Links -> true
- General -> Reject Windows Line Endings -> true
- Access -> Set `Rights Inherit From` to `Private-Projects`
- Access -> Add `Patina Network` group to all `refs/for/refs/*` default permissions.
  - Add `Revert`
  - Add `Toggle Work In Progress State`
- Access -> Add `Patina Network` group to all `refs/heads/*` default permissions.
  - Remove pushMerge perm
  - Add `Label Code Review` and `Label Verified` perms

## Henry's Personal Config
- Theme -> Light
- Changes per page -> 100 rows per page
- Email notifications -> None (I'll check it daily while the program is running.)
- Change Table Columns -> Uncheck Repo, Branch
- Join Patina Network group: https://gerrithub.io/admin/groups/72f4d260bbb52c57f692937f3cf83c4c9fb58fea
