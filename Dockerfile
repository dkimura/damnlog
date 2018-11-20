
FROM node:alpine@sha256:f6c1b38fa463ff7c7f8e19c32d9b45a4001522b5270671646c02aef2c49a4dc3

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
