
FROM node:alpine@sha256:324ccac1d7c4ddf5eb9f9ed5274c37c90965605b5eb68df0a67c6266837bfb79

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
