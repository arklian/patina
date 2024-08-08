# Java Tests
## Purpose of Testing
- Java Tests were added to this repo as part of the CI/CD pipeline.
  - Unit Testing is needed to make sure your code and logic behave as expected before these changes are merged into main. 
  - It also allows for an easier time isolating issues whenever an error does come up. 
- These tests will be run on each commit you push up to Gerrit by calling ```./gradlew test```in addition to ```pnpm run test``` 
  - Both must be passed for patina-bot to verify your Gerrit CR with +1.
## Structure of Testing Directory
- Test classes are created to test specific methods or functions
- Actual tests are defined inside ```src/test/java``` directory
  - Some example tests are defined inside ```BlogsListOpTest```
    - This class is meant to test the logic of ```ListOp``` operation, which is a class meant to test the ```listAllBlogs``` function of ```BlogsRepo``` interface implementations
  - These tests are split into three sections:
    - **Arrange**: Setup for our tests by initializing necessary objects
    - **Act**: Make the call to the functions to be tested
    - **Assert**: Verify the function matches expected behavior 
  - These test names should be descriptive and specific to what is being tested and what return is expected
  - Tests must be prefixed by the @Test annotation, which is imported from JUnit Jupiter
## Useful Links
- https://abseil.io/resources/swe-book/html/ch12.html
