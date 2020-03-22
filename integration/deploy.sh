VERSION=${CIRCLE_SHA1:-$(git log --pretty=format:'%h' -n 1)}
TARGET=${1}

aws lambda update-function-code \
    --function-name $TARGET \
    --s3-bucket lambda-covid-resources \
    --s3-key builds/$VERSION.zip \
    --region us-west-2
