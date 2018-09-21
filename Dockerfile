
FROM node:alpine@sha256:5de3905c643ae9c01a8cbd8ef7209b1a7907ef515eb933a4cbf19ced7d5867ae

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
