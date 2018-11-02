
FROM node:alpine@sha256:9df9329306194c156863c74e97e43b54aee3884940b971e87c5c1db2f82c766a

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
