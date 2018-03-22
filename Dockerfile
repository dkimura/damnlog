
FROM node:alpine@sha256:297f3ec789216ac90df5ec60a6c5d8a71fda3de87ddc97cb631bd96cd2fac3cd

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
