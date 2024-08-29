#!/bin/bash

# Access Digital Ocean Spacial Storage Secret Key - Manny
export DIGITAL_OCEAN_SPACES_SECRET=REDACTED
# Access Digital Ocean Spacial Storage Access Key - Manny
export DIGITAL_OCEAN_SPACES_ACCESS=REDACTED
if [ "$1" = "prod" ]; then
  # Host key for prod Database - Tony
  export DATABASE_HOST=REDACTED
  # Port number for prod Database Connection Pool - Tony
  export DATABASE_PORT=REDACTED
  # Database Name for prod Database - Tony
  export DATABASE_DB=REDACTED
  # Username for prod Database - Tony
  export DATABASE_USER=REDACTED
  # Password for prod Database - Tony
  export DATABASE_PASSWORD=REDACTED
  # Client ID for Github - Riyuan
  export GITHUB_OAUTH_CLIENT_ID=redacted
  # Client Secret for Github - Riyuan
  export GITHUB_OAUTH_CLIENT_SECRET=redacted
  # Client ID for Google - Riyuan
  export GOOGLE_OAUTH_CLIENT_ID=redacted
  # Client Secret for Google - Riyuan
  export GOOGLE_OAUTH_CLIENT_SECRET=redacted
else
  # Host Key for Dev Database - Bryan
  export DATABASE_HOST=REDACTED
  # Port Number for Dev Database Connection Pool - Bryan
  export DATABASE_PORT=REDACTED
  # Database Name for Dev Database - Bryan
  export DATABASE_DB=REDACTED
  # Username for Dev Database - Bryan
  export DATABASE_USER=REDACTED
  # Password for Dev Database - Bryan (Most important one!)
  export DATABASE_PASSWORD=REDACTED
  # Client ID for Github - Riyuan
  export GITHUB_OAUTH_CLIENT_ID=redacted
  # Client Secret for Github - Riyuan
  export GITHUB_OAUTH_CLIENT_SECRET=redacted
  # Client ID for Google - Riyuan
  export GOOGLE_OAUTH_CLIENT_ID=redacted
  # Client Secret for Google - Riyuan
  export GOOGLE_OAUTH_CLIENT_SECRET=redacted
fi
# Password for Admin Page - Haoking
export PATINA_ADMIN_PASSWORD=REDACTED
# Cookie for successful admin login - Haoking
export PATINA_ADMIN_COOKIE=REDACTED
# Credentials for pushing Docker image to Digital Ocean
export DO_DOCKER_IMAGE_UPLOAD_PAT=REDACTED
# Credentials for Google API to manipulate drive folder - Manny
export GOOGLE_CLIENT_ID=REDACTED
export GOOGLE_CLIENT_SECRET=REDACTED
export GOOGLE_REFRESH_TOKEN=REDACTED
# Bryan's OpenAI API secret
export CHATGPT_SECRET=REDACTED
# Weather Api key - Riyuan Liu
export WEATHER_API_KEY=REDACTED

