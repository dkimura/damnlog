
FROM node:alpine@sha256:f6a5c01cf560e99de9b273cfee30021955e5a083558f9b1ae5556a813c1ef2fe

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
