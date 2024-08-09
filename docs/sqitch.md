# Sqitch

### What is Sqitch ?
- Sqitch is a database migration tool that helps manage changes to
the database schema. Allows for databases to be moved across cloud providers
easily and allows for database version control. Changes to the database schema
can also be peer-reviewed to prevent loss of data and breaking of production.

### How does sqitch work ?
- Sqitch uses a .plan file that lists the order in which changes
  to the schema are applied.
- A change to the schema can be divided into 3 parts:
  deploy, revert and verify.
    - Deploy - The script to apply the change.
    - Revert - The script to revert the change.
    - Verify - The script to verify if the change has been applied correctly.

### Setup
- Download Sqitch at https://sqitch.org/ to get access to the sqitch
  command line instructions or use homebrew.
```
brew tap sqitchers/sqitch
brew install sqitch --with-postgres-support
```
- The following steps will likely be done already in our codebase,
  feel free to ignore this:
    - Initialize a Sqitch project:
      ```
      sqitch init your_project_name --engine postgres
      ```
### Sqitch Instructions Overview

- Adding a new change to the schema:
    - Running this command will update the .plan file and create 3
      new files inside the deploy, revert and verify folder.
    - Add the corresponding scripts to their respective files.
    - New changes can also depend on previous changes.
```
sqitch add V0000_change_name -n "Description of the change"
sqitch add V0000_change_name -n "Description of the change" --depend V0000_some_previous_change --depend V0000_some_other_previous_change
```

- Deploying a change to the schema:
    - Will deploy all scripts in the deploy file that have not been deployed yet
      in the order specified in the .plan file.
```
sqitch deploy
```

- Deploying a specific change to the schema:
    - Will deploy all scripts up to and including change_name
```
sqitch deploy --to V0000_change_name
```

- Reverting a change to the schema:
    - Will revert everything deployed except change_name and deployments before it
```
sqitch revert --to V0000_previous_change_name
```

- Revert all changes to the schema:
    - Will run every script in the revert file, essentially deleting the database:
    - ***DONT DO THIS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!***
```
sqitch revert
```

- Verify changes to the schema:
    - Runs verify scripts to check if changes were applied correctly
```
sqitch verify
```

- Show change history:
    - Displays the deployment history of changes
```
sqitch log
```

- Check status:
    -  Shows the status of changes, indicating which changes have been applied,
       which are pending, and which are currently being worked on.
```
sqitch status
```

# Workflow with Sqitch
- sqitch add to begin making a change, even though sqitch does
  not require a numbered naming scheme, we will be using one
```
sqitch add V0000_change_name -n "Description of the change"
```
- add your change to the deploy file with the name of your change.
- add the revert for your change to the revert file with the name of your change.
- add a verify check to the verify file with your change.
```
sqitch deploy
```
- verify your change was implemented correctly
```
sqitch verify
```
- if your change was not implemented correctly, revert
```
sqitch revert --to V0000-1_previous_deploy
```

### Sqitch vs Flyway
- Flyway is another database migration tool. Flyway requires a numbered
  naming convention and migrations are applied in order based on their verison number.
  This means that Flyway is easier to setup than Sqitch due to only having one
  folder of files.
- Sqitch's dependency-based model allows you to deploy changes independently, without enforcing a sequential order.
  For instance, if you have separate changes for customers and orders tables, you can deploy only the customers changes without affecting orders.
  In contrast, Flyway's linear versioning requires applying all changes in sequence,
  making it less flexible for selective deployments. This makes Sqitch ideal for managing complex projects with multiple, independent changes.
