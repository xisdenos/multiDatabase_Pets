
docker run \
    --name postgres2 \
    -e POSTGRES_USER=lucaspinto \
    -e POSTGRES_PASSWORD=1234 \
    -e POSTGRES_DB=pets \
    -p 5432:5432 \
    -d \
    postgres

docker ps
docker exec -it postgres /bin/bash

docker run \
    --name adminer2 \
    -p 8080:8080 \
    --link postgres2:postgres \
    -d \
    adminer

## MongoDB

docker run \
    --name mongodb \
    -p 27017:27017 \
    -e MONGO_INITDB_ROOT_USERNAME=admin \
    -e MONGO_INITDB_ROOT_PASSWORD=1234 \
    -d \
    mongo:4

docker run \
    --name mongoclient \
    -p 3000:3000 \
    --link mongodb:mongodb \
    -d \
    mongoclient/mongoclient

docker exec -it mongodb \
    mongo --host localhost -u admin -p 1234 --authenticationDatabase admin \
    --eval "db.getSiblingDB('pets').createUser({user: 'lucas', pwd: 'minhasenhasecreta', roles: [{role: 'readWrite', db: 'herois'}]})"