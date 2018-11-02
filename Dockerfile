
FROM node:alpine@sha256:132961fcdd88ba648e45df5d81d769dd9ae8eca638ff5b3b8018580f51a80463

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
