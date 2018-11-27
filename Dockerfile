
FROM node:alpine@sha256:21e003f77aa38907717051fa0f4329f772ff1fb361407d75c8cca9edfa692fc8

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
