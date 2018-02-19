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

When your containers are running, you can use `docker-compose exec app bash` to access the shell
for your app. Do this now, and then run `node lib/db/init.js` to add the user table to your db.


# Exercises

Level 1
- Create a new table and set of routes, like with users
  - Ex: /api/puppies
- Fill in the missing queries for the api/user routes
- Create a pug file to display a single user's information, and display it at `/ui/user/:id`
- Throw a meaningful error if fields are missing for post routes, or in the wrong format
- Throw a meaningful error if req.params.id is not a number

Level 2
- Have the objects in your new table belong to users, and display them on the user page
  - Ex: each puppy has a `user` field, which corresponds to the user who created it
- Create ids using the `uuid` module, instead of relying on SQL's integer iteration

Level 3
- Implement passport.js for authentication
- Use a library like `bcrypt` or `crypto` to hash user passwords


# Errors

If postgres logs an error about a missing role, run this from your command line:

`docker-compose exec postgres psql -h localhost -U postgresql -c "CREATE USER teaching_app WITH PASSWORD ;'ForPony';"`


# About the app

`docker-compose.yml` tells Docker how to build the app.

`DockerFile` tells Docker how to start the app.


# Further reading

Why Docker: https://blog.codeship.com/why-docker/

