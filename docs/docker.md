To build the docker locally, use this command:  
`docker build -t patina:local .`

To run the local docker container, use:  
`docker run -p 8080:8080 --env-file ./.env patina:local`
