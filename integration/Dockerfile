FROM lambci/lambda:build-nodejs12.x

ENV AWS_DEFAULT_REGION us-west-2
ENV NODE_ENV production

VOLUME lambdatask:/var/task/dist

COPY pages pages
COPY public public
COPY migrations migrations
COPY models models
COPY integration integration
COPY shared shared
COPY package.json package.json
COPY yarn.lock yarn.lock
COPY tsconfig.json tsconfig.json

COPY .lambdaignore .lambdaignore
COPY lambda.js lambda.js
RUN npm install -g yarn

RUN yarn install --production=false
RUN yarn build

RUN rm -rf node_modules
RUN yarn install --production
