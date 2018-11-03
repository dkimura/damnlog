
FROM node:alpine@sha256:7965557edee8e5c8c1b03c71387a49bddc6dbed580bb77caf7ef16690b5aee78

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
