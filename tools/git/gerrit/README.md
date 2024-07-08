# Gerrit
Gerrit is a code review first collaboration system, which can be used as an alternative to Github.

This repo will be hosted at both Github and Gerrit.   
Gerrit repo can be found at: https://gerrithub.io/q/project:arklian/patina  
Github repo can be found at: https://github.com/arklian/patina  

Gerrit will hold the source-of-truth copy, and will hold the code reviews, while a mirrored copy of the repo will be 
reflected to Github.

## Pull Request vs Code Review
Both pull requests and code reviews are concepts that are not built into `git`, but rather represent workflows in
collaborative coding and software engineering.

In open source, there is the concept of contributors and maintainers.  
A contributor is anyone who contributes code to the code base. 
Maintainers are the leaders and gatekeepers of the project. They

A pull request is created by a contributor to send to a maintainer of a project of the changes that they want to save
into the source-of-truth master/main copy. This is called a 'pull' request since it's requesting the maintainer to
pull the changes into the main branch. A git push is the opposite, where you just say your changes are correct, so
you are pushing them into main on a repo that you own or have permissions on.

A code review is when a contributor wants a second person, to look at the changes and comment on them.
Often this second pair of eyes is more senior or more knowledgeable about the domain, such as a maintainer, but it
can be anyone. This can happen through any type of communication, like with sending emails (Linux Kernel and Git repos),
or just with someone sitting next to you.

Gerrit and Github formalize some of the process with automation through built-in UI features.  
When referencing `Pull Requests`, this is referencing GitHub's implementation of pull requests.  
When referencing `Code Reviews`, this is referencing Gerrit's implementation of code reviews.

## Gerrit Vs Github

Github uses a branch based model for `Pull Requests`.  
Gerrit uses a commit based model for `Code Reviews`.  

To create a `Pull Requests` in GitHub, you point at a branch and merge the changes in that branch into main. You can
create a `Pull Requests` with multiple commits in them, and then merge them into main.

With Gerrit, you upload commits on a branch up to Gerrit which are stored independently of the branch itself. These
commits are tracked inside of Gerrit through a Change-Id in the commit message rather than using the commit hash. Every
commit gets generated its own `Code Reviews`, which can then be reviewed, approved and shipped into main.


## Comparison
### GitHub
- Unit of work is a `Pull Request` which tracks a branch
- Pros
  - Simpler
  - Merge Squash still gives a linear history
  - Industry Standard at Startups/Mid Sized Companies
- Cons
  - No built-in chaining of PRs
  - Force pushing removes the tie of comments to code
  - Proprietary, Can't migrate history to any other platform.
  - UI for code reviewing is bad (Preference)

### Gerrit
- Unit of work is a `Code Review` which tracks a Change-Id in a commit
- Pros
  - Chaining of CRs is native
  - Every pushed is saved and can be diffed between
  - Open Source Platform, All history is stored directly in Git
  - Commits are intentional and atomic
  - UI is made with code reviewing as its main goal. Looks old but works
  - FAANG and other large companies often have custom tooling and not Github
  - Enforces a linear git history with rebase-if-necessary
- Cons
  - Requires a more complex workflow with commit amend
  - Often requires custom git scripts to easily handle


## Using Gerrit
CueLang's Contribution Guide:
https://github.com/cue-lang/cue/blob/master/CONTRIBUTING.md#preparing-for-gerrithub-cl-contributions

There's two git libraries to help with managing usage of Gerrit, as it has its own workflow and
metadata such as change-id in the commit message.
- git-review 
  - Python based script managed by OpenDev
  - https://docs.opendev.org/opendev/git-review/latest
- git-codereview
  - Go based script managed by Google and Golang team.
  - https://pkg.go.dev/golang.org/x/review/git-codereview

Both of them seem a bit overkill, so this repo has custom git commands running the script found at `git-up`.


## Definitions
- contributor
- maintainer
- pull request
- code review
- source of truth
- Commit
- Commit Hash
- Branch
- Gerrit Change-Id
- Gerrit Code Review
- Github Pull Request


## Resources
- Gerrit vs Github gist: https://gist.github.com/mbbx6spp/70fd2d6bf113b87c2719
  - Opinion piece on why Gerrit is better (22:41)


- Chained PRs in Github Tool: https://github.com/ezyang/ghstack
  - Tool to handle a chain of PRs on Github.  


- Google Critique: https://read.engineerscodex.com/p/how-google-takes-the-pain-out-of
  - Some insights into Google's internal code review system
  - Youtube review of article: https://www.youtube.com/watch?v=avX6Paj5Wes
  - Has stats on number of CRs a week on avg (3)  


- SWE Book: https://abseil.io/resources/swe-book/html/toc.html
  - Book on Software Engineering at Google
  - PDF: https://github.com/abseil/abseil.github.io/blob/cd13b21daa6ec74155548241241693198c1b1264/resources/swe_at_google.2.pdf


- Gerrit Custom Project Dashboard: https://gerrit-review.googlesource.com/Documentation/user-dashboards.html
  - TODO: Go create custom a custom dashboard for the Patina project

- Gerrit Zuul CI/CD
