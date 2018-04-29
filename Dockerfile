
FROM node:alpine@sha256:bde41330043a15e404c994614b774377445deff9c676320d842aa2c87a382924

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
