#!/bin/bash
cat test/request.json | docker run --env NODE_ENV=production -t --rm -v "$PWD":/var/task:ro,delegated lambci/lambda:nodejs12.x lambda.handler