#!/usr/bin/env bash

cat .lambdaignore | xargs zip -9qyr /var/bundles/lambda.zip . -x
echo "Created bundle at $(pwd)"
cp -a . /var/dist/
