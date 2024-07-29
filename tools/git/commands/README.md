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
The reason for this custom git command was due to the fact that Gerrit lacked the functionality to display any images for code reviews. 
To solve this issue, we created a new command that allow developers to get a DigitalOcean image link from a locally screenshotted image.
Then, developers just need to include the returned link as a part of their commit message.

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
git screenshot <name_of_file>
```
and give the file a name.

