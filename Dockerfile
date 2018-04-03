
FROM node:alpine@sha256:b8aec439a4e8cb96b5902d436c5a80a65de68e4cce480c6d3b90bfc67a5921b1

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
