
FROM node:alpine@sha256:c87fc0f0e1d34ab73176056b57e27c5a1636252d53d1f573821c164108689599

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
