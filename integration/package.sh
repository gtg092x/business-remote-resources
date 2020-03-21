#!/usr/bin/env bash

cat .lambdaignore | xargs zip -9qyr /var/bundles/lambda.zip . -x
cp -a . /var/dist/
