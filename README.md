# express\_teaching\_app
Skeleton app for implementing new features


# Setup

Start by installing Docker for your operating system: https://docs.docker.com/install/#supported-platforms

Once Docker is installed, you can build the app:

```
docker-compose build
```

And start it:

```
docker-compose up
```

# Errors

If postgres logs an error about a missing role, run this from your command line:

`docker-compose exec postgres psql -h localhost -U postgres -c "CREATE USER teaching_app WITH PASSWORD ;'ForPony';"`


# About the app

`docker-compose.yml` tells Docker how to build the app.

`DockerFile` tells Docker how to start the app.

