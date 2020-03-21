VERSION=$(git log --pretty=format:'%h' -n 1)

aws s3 cp ./bundles/lambda.zip s3://lambda-covid-resources/builds/$VERSION.zip \
     --region us-west-2

