
FROM node:alpine@sha256:565dfb5f10143efd5f4c9df75a63d765adcd14b150fc61e5c1d54d70cb006e86

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
