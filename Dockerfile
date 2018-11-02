
FROM node:alpine@sha256:d4d7bd6803d109f2508a2bb37bd240225d8c992412129f9577ee9035463f832f

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
