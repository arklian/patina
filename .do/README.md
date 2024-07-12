# Setup for Digital Ocean Hosting

# Create .do folder in the root directory (patina)
- Create an app.yaml file inside the .do folder
  - The app.yaml file defines and configures settings for our application
  - Copy and paste this code into the app.yaml file:
      ```
      name: Patina Network 
      services:
        - name: Patina Network Website
          environment_slug: node-js
          github:
              branch: main
              deploy_on_push: true
              repo: arklian/patina
          build_command: pnpm install && pnpm run build
          run_command: pnpm run start
          source_dir: /js
      ```
    - name: defines the name off the application on DigitalOcean
    - services: we are defining are application as a service
        - name: name of this service
        - environment_slug: specifies the runtime environment
        - github: specifies the settings for integrating github
          - branch: indicates the branch we want to deply from
          - deploy_on_push: this setting allows the application to be automatically redployed everytime a push is made to the specified branch.
          - repo: specifies the repo used for deployment
        - build_command: commands used to the build the app
        - run_command: command used to run the app
        - source_dir: specifies the directory with the source code for the app 

# Create Digital Ocean account
- Try to use Github to sign up (assuming you have github education), $200 credits should be automatically applied.
  - Go to Billing -> Overview, scroll down to credits, if credits aren't there use code 'HAPPYCODING60'.
- Sign up will require you to enter your payment info, but you shouldn't be charged as long as you have credits.
  - Go to Billing -> Settings, enable billing alerts, and set it to 1 dollar.

# Start Hosting 
- 



