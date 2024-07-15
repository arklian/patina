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
        yaml spec docs: 
        https://docs.digitalocean.com/products/app-platform/reference/app-spec/
      - name: defines the name of the application on DigitalOcean
      - services: we are defining are application as a service
          - name: name of this service
          - environment_slug: specifies the runtime environment
          - github: specifies the settings for integrating github
            - branch: indicates the branch we want to deply from
            - deploy_on_push: this setting allows the application to be automatically 
            redployed everytime a push is made to the specified branch.
            - repo: specifies the repo used for deployment
          - build_command: commands used to the build the app
          - run_command: command used to run the app
          - source_dir: specifies the directory with the source code for the app

# services vs static_sites
- Both 'static_sites' and 'services' can be used for hosting a site on DigitalOcean.
However 'static_sites' don't have a 'run_command' configuration. This means in order to
host a static site on DigitalOcean, you must provide production-ready files (e.g., files in 'dist'). 
Since we are only storing source code on GitHub, we must use services so that we can specify 
a run_command such as 'pnpm run start'. This command uses npm serve to provide 
DigitalOcean with the production-ready files.

# Create Digital Ocean account
- Try to use Github to sign up (assuming you have github education), $200 credits should be automatically applied.
  - Go to Billing -> Overview, scroll down to credits, if credits aren't there use code 'HAPPYCODING60'.
- Sign up will require you to enter your payment info, but you shouldn't be charged as long as you have credits.
  - Go to Billing -> Settings, enable billing alerts, and set it to 1 dollar.

# Start Hosting 
- Create -> App Platform
- Create resource from source code, select Github.
- Select repo 'arklian/patina'
  - Select 'main' for the branch.
  - For the source directory put /js.
  - The autodeploy button can remain checked.

# Set Up DNS to Point patinanetwork.org to the DigitalOcean App

To point your domain `patinanetwork.org` to your DigitalOcean app, you need to configure your DNS 
settings. Here's an updated guide tailored for setting up the DNS through DigitalOcean:

## Step 1: Log into DigitalOcean
1. Go to the [DigitalOcean Control Panel](https://cloud.digitalocean.com/login) and log in with your credentials.

## Step 2: Add a Domain to DigitalOcean
1. Navigate to the **App Platform** section in the left-hand menu.
2. Click on the App you want to deploy. 
3. Click on the **Setting** tab.
4. Under Domain, Click on **Edit**.
5. Click **+ ADD Domain**
6. Enter `patinanetwork.org` in the domain field.
7. Ensure it is under **We manage your domain**.
8. Save these **NAMESERVER**.
9. Click **ADD Domain**

## Step 3: Update Nameservers on Square Space
1. Log into your domain registrar account.
2. Navigate to the DNS settings for `patinanetwork.org`.
3. Locate the section to update the nameservers and replace the existing nameservers with the 
following DigitalOcean nameservers:
    - `ns1.digitalocean.com`
    - `ns2.digitalocean.com`
    - `ns3.digitalocean.com`
4. Save the changes.

## Step 5: Verify DNS Configuration
1. After updating the DNS settings, it may take some time for the changes to propagate. This can 
take anywhere from a few minutes to 48 hours.


