# stentor-proxy
📣 Route 53 and API Gateway are currently incompatible so this is used as a temporary solution until they make them sing in key.

# Administrative stuff

This uses Docker to create the containers for each proxy.  A base image can be created from the `Dockerfile` located in the project root. Then region specific images can be created with the `Dockerfile` found in the `regional` directory. The `Dockerfile` found in the `regional` directory is expecting an image tagged with `xappmedia/proxy`.



Example:

### Base build:
```
docker build -t xappmedia/proxy .
```

### Regional build:

```
docker build -t xappmedia/proxy/us-east-1 --build-arg domain=<regional_domain> ./regional
```

The docker images can be tested by:

```
docker run -p 8080:8080 -d xappmedia/proxy/us-east-1
curl -i localhost:8080

*** output ***
"us-east-1"
```