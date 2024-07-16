# How Workflow Works
## REST API
  - Allows communication between client and server
  - Client sends HTTP requests to server to perform CRUD operations
  - GET Requests to retrieve information
  - PUT Requests to update records
  - POST Requests to create new record
  - DELETE Requests to delete existing record
  - Server sends back information on current state of record
  - Use curl from command line to send HTTP requests
## Gerrit
  - Provides endpoints to curl to update reviews and changes on Gerrit's server
  - Gerrit sends back current state of the records as JSON
  - Authentication can be specified by prefixing endpoint URL with /a/
  - For this workflow, we use Gerrit's provided Set Review endpoint
    - https://review.gerrithub.io/Documentation/rest-api-changes.html#set-review
    - The actual curl command to send this request would look like this:
    - ```curl -X POST -u USER:PASSWORD -H "Content-Type: application/json" -d@FILE.json https://gerrithub.io/a/changes/CHANGEID/revisions/REVISIONID/review```
    - -u flag specifies username and password for HTTP authenticated requests
    - -h flag specifies header of request
    - FILE.json contains data we want updated, including a message and the status of the "Verified" label for the CR
## GitHub Actions
  - Allows for continuous integration and continuous development (CI/CD)
  - Workflows defined by YAML files inside ```.github/workflows``` are automated processes that will run every time an event occurs, such as a pull request being opened or a push to a branch
    - Workflows contain multiple jobs which can be run either sequentially or in parallel
    - Each job runs inside a virtual machine runner or container and contains steps to be executed
    - Workflows can also be run from the command line if the gh CLI is installed
    - ```gh workflow run <example-action>```
  - The workflow ```example-action.yml``` takes in two inputs: the Change-Id of the CR and the branch the code is in
    - It checks out into the given branch and runs ```pnpm install``` and ```pnpm run test```
    - A curl POST request is sent to GerritHub that will update the given CR with a status of +1 to the "Verified" label if the tests passed and -1 otherwise
## Git Up
- The bash script for git up was modified to first create branches on GitHub under ```ci/<changeId>``` for each CR on GerritHub
- Each branch will contain a different number of commits
  - If two commits were made before running ```git up```, then two separate branches are made on GitHub
  - The first branch corresponds to the first CR on GerritHub and the earliest commit
  - The second branch corresponds to the second CR with both commits
- ```git up``` will automatically run ```example-action.yml``` workflow for each of these branches and run ```pnpm run test``` on the code in each of these branches
- A bot patina account will label each CR with a Verified status of +/-1 depending on if the tests passed or failed



# Useful Links
- Gerrit Endpoints Documentation:
  - https://gerrit-review.googlesource.com/Documentation/dev-rest-api.html
  - https://gerrit-review.googlesource.com/Documentation/rest-api.html
- GitHub Actions:
  - https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions
- Intro to curl:
  - https://curl.se/docs/httpscripting.html
