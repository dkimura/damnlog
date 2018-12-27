
FROM node:alpine@sha256:85d65b110bd12ff91b32944512133aee5a1fcd2f1d0b6b55bb956f314df291d4

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
