
FROM node:alpine@sha256:50ae5f22356c5a0b0c0ea76d27a453b0baf577c61633aee25cea93dcacec1630

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
