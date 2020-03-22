#!/usr/bin/env bash

docker build -t lambda-builder -f ./integration/DockerfileCI .
docker run --rm \
    -e CIRCLE_SHA1=$CIRCLE_SHA1 \
    -e AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID \
    -e AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY \
    lambda-builder
