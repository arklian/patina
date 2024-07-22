# Setup
Sharing the setup steps for MacOS that I use in my workflow. It's good to take a step back every few months and
evaluate your workflow and the tools you are using and that are out there to see if you can become quicker and more
productive.  

Many of the steps here are optional and personal preference.  
Try to understand what the step does before commiting to using it. 

Updated on 2024-06-16 on MacOS 14.5 Sonoma. 

## Applications
Make sure to download the following with the correct architecture (Apple Silicon or Intel).
Avoid things that tell you to install Rosetta if you're on Apple Silicon.

Also make sure that the applications are moved to the `Applications` folder, and not stuck in the `Downloads` folder.

Download the following from their websites:
- iTerm2
- Discord
- Google Chrome
- Rectangle - Used to snap windows. May be built in for MacOS 15.
- VLC - Video player that can handle all formats.
- VSCode - Basic IDE
- Intellij Ultimate - Full Feature IDE
- Sublime Merge - Git GUI
- Github Desktop - Github GUI
- Linear - Jira-like Project Management 
- Notion - Shared note taking app
- Obsidian (or other Notes app) - Markdown Note Taking App
- Messenger

## System Settings
- Trackpad and Mouse
  - Move pointer speed up to fifth notch
  - App Expose three down
  - Turn off launchpad
- Desktop and Dock
  - Remove unused apps
  - Position on screen left
  - Automatically hide
  - Disable Hot Corners notes
  - Disable Close Windows when Quitting an Application
- Appearance
  - Purple Accent Color
- Control Center
  - Show Bluetooth Icon
- Keyboard
  - Keyboard Shortcuts
    - App Shortcuts
      - Chrome
        - Duplicate Tab -> cmd + d
        - Bookmark This Tab... -> whatever
        - Select Next Tab -> cmd + .
        - Select Previous Tab -> cmd + , 
    - Screenshot
      - Super useful hotkey to share screenshots.
      - Switch hotkeys for clipboard and file for 3 and 4 as clipboard is used more.
      - CMD + Shift + 5 can be used for recording videos

## Chrome
Chrome:
- No Telemetry
- No Notifications
- No Automatic Updates
- Privacy and Security
  - Disable Ad Topics
  - Disable Site-suggested Ads
  - Disable Ad measurement
  - Disable things in Privacy Walkthrough
- Bookmarks
  - Show bookmarks bar
- Passwords
  - Disable saving passwords
  - Disable saving credit cards and checking for saved cards
  - Disable saving addresses
- Extensions
  - Allow extensions in incognito
  - BitWarden
  - uBlock Origin
  - React Dev Tools
  - Old Reddit Redirect

## Finder
- Settings
  - Sidebar
    - Add Home
    - Remove AirDrop
    - Remove Recent Tabs

## Folders
**ONLY DO THIS IF YOU AREN'T USING THE FOLDER.**  
- Remove unused folders:
  - sudo rm -rf Movies
  - sudo rm -rf Music
  - sudo rm -rf Public
- Make new folders:
  - mkdir notes
  - mkdir patina

## iTerm2
iTerm2
- Install homebrew
  - Run commands instructed by homebrew to add it to the zprofile PATH.
- Settings
  - Enable System Session Restore
  - Appearance -> Compact
  - General -> Closing
    - Quit when all windows are closed
  - Magic
    - Save C/P and Cmd history to disk
  - Profiles
    - Default -> Keys -> Key Mappings -> Presets -> Natural Text Editing -> Remove
    - Default -> Terminal -> Scrollback Lines -> 10,000
    - Default -> Colors -> Pick a theme from https://iterm2colorschemes.com/
      - I use DjangoRebornAgain
    - Default -> Text -> Cursor -> Bar + Blinking Cursor
- Give iTerm2 full access of your disk
  - System Settings -> Security -> Privacy -> Full Disk Access -> + -> Applications/iTerm2
- Install oh-my-zsh https://ohmyz.sh/
  - `sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"`
  - Add custom configuration to the bottom of the ~/.zshrc file:
    ```
    # Set the prompt to display the full path.
    PROMPT=' %{$fg[cyan]%}%~%{$reset_color%} $(git_prompt_info)'
    
    # Add custom git commands
    export PATH=$HOME/patina/tools/git/commands:$PATH
    
    # Git aliases
    alias gpo="git pull origin main"
    alias gpullo="git pull origin main"
    alias gpf="git push --force-with-lease --force-with-includes"
    alias gpushf="git push --force-with-lease --force-with-includes"  
    
    # pnpm aliases
    alias praf="pnpm run prettier:write"
    alias prd="pnpm run dev"
    alias prt="pnpm run test"
    ```

- Brew 
  - brew install node
  - brew install pnpm
  - brew install coreutils
  - brew install gh
  - brew install --cask git-credential-manager
  - gradlew gng https://github.com/gdubw/gng
    - brew tap gdubw/gng
    - brew install gng


## VSCode
- Add `code` to $PATH so you can call it in the terminal.
  - CMD + Shift + P to open the command palette 
    - Look for `Shell Command: Add 'code' command to PATH`
- #TODO(Henry): Add plugins and extensions
- #TODO(Henry): Add good settings

## Github Desktop:
- Login to Github
- Set name and email
- Clone patina in to ~/patina

## Git configs
- git credential-manager github login
- git config --global user.name "Henry Chen"
- git config --global user.email "hjc77@cornell.edu"
- git config --global core.editor "code --wait"
- git config --local include.path "../tools/git/.gitconfig"


## Rectangle
Used to snap windows to half the screen or other places. MacOS 15 has this built in.
- Use Rectangle shortcuts
- Launch on Login
- Change top and bottom snapping to top and bottom half.

## Sublime Merge
- Settings
  - Layout
    - Three Columns
    - Untracked Files - Expand By Default
  - Commit Message
    - Rules 50, 72

## IntelliJ Ultimate
- Open new project at ~/patina
- Settings
  - Editor
    - Code Style
      - Hard Wrap at 120
      - Visual Guides at 100, 120
  - Languages & Frameworks
    - Style Sheets
      - Dialects -> Project CSS Dialect -> PostCSS
  - Inspections
    - CSS -> Invalid Elements -> Invalid Function -> Weak Warning
      - IntelliJ doesn't support the postcss-mixins plugin in the IntelliJ PostCSS plugin.
  - Search "Prettier" -> Automatic + Run on save
    - Add .css to file extensions 
      - `**/*.{js,ts,jsx,tsx,vue,astro,css}`
  - Search "ESLint" -> Automatics + No run on save
  - Search "StyleLint" -> Automatic + Run on save

___

# Optional
Optional extra tools that are used.

## Music Decoy
If you don't use Apple Music, this can be used to stop it from opening when earbuds are tapped.
- https://github.com/FuzzyIdeas/MusicDecoy
- brew install music-decoy

## Clop
Used to reduce the size of images taken with cmd + shift + 4.
https://lowtechguys.com/clop/

## rcmd 
Another way of switching between apps instead of cmd + tab
https://lowtechguys.com/rcmd/

