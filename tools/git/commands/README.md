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

## Git Screenshot

To run Git Screenshot: 

- First install doctl, it allows you to interact with the DigitalOcean API via the command line

To install the latest version of ```doctl``` using Homebrew on macOS, run:
```
brew install doctl
```

- Then, to paste PNG into files on MacOS:
```
brew install pngpaste
```

Finally, to use this command, take a screenshot of whatever you need, make sure
the image is copied to the clipboard, and then call:
```
git screenshot <name_of_file>.png
```
and give the file a name.

