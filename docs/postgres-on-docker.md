# Set up a local PostgreSQL db on Docker

# Download Docker
- https://www.docker.com
- Open and Run Docker to install the CLI

# What is Docker ?
- Docker is a platform that allows for the management of applications through containers.
- A container is a lightweight, standalone, executable package that includes everything
to run a piece of software. 
- Similar to virtual machines except containers run on your machine's hardware and OS.

# Pull PostgreSQL Docker Image
- Images are immutable templates that define the contents of a container.
- Run this in your terminal to pull the PostgreSQL Docker Image.
```
docker pull postgres
```
# Run a Docker Container
- Change any fields to match your specifications/
```
docker run --name patina-db-local -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d patina
```
- Verify docker container
```
docker ps
```

# Connect to PostgreSQL database
- Install postgreSQL from homebrew
```
brew install postgresql
```
- Run this command
```
PGPASSWORD=mysecretpassword psql -h localhost -p 5432 -U postgres
```
- Now you can run SQL commands to interact with your database.
- To see the tables, you can connect your database using pgadmin4.

# Docker container management
- You can stop and start your container directly on docker or use the command line.
- When a container is stopped, the data inside is not lost unless the container is deleted.
- To clear a container you can delete it and recreate a new container.
```
docker stop some-postgres
docker start some-postgres
docker logs some-postgres
```

