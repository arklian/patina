# Custom Git Commands

To run these commands:
- Each command needs to have execute permission on its file
```
chmod +x ~/patina/tools/git/commands/git-up
```
- The folder of commands has to be added to the $PATH so git can find them:

Add the custom git command to $PATH in your ~/.zshrc file
```
# Add custom git commands
export PATH=$HOME/patina/tools/git/commands:$PATH
```
