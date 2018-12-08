
FROM node:alpine@sha256:2ef943fb2478c4c6d3e6b9a19ee76c58d93823144398ed4c4c2d5cd1205b0116

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
