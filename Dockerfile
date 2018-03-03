
FROM node:alpine@sha256:c6c2bbd87a7e142b5d991a2e860ed808756ed67a7e63a2281e8fbc246b5aed00

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
