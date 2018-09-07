
FROM node:alpine@sha256:047cc73153862a7f9cf38f4a5897264d66ba975c68f2ec7d9b5f7a63ac7ff749

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
