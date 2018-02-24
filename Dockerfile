
FROM node:alpine@sha256:0cde8b95153ed80438bea424b06cb8c0a59436f44672f095bd1cf275b044ec9a

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
