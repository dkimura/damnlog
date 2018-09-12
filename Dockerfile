
FROM node:alpine@sha256:abb95c965bae80fbac15e8d9fd3dabaa998a10eea693dd30749163bf52fc64b6

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
