
FROM node:alpine@sha256:727813c2fe5293f8b298cc6e9f927387d94f7781aa602ac7f3f23ae18cc6ca70

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
