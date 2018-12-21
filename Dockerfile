
FROM node:alpine@sha256:045a9794ebc29a39d5f7ddda49222f5f33dc0c442aac1e7ae9886b9cdacd1aff

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
