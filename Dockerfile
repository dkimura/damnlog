
FROM node:alpine@sha256:31351a3548d9c2a4059ebfe9f7e8aa460323d5c10dbc31b0e06c4c7cce2f2bbc

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
