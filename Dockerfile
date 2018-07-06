
FROM node:alpine@sha256:c30b9a5bb5faba796d4df5c74310702e25bcca227786310dae9b5a08498b5e4a

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
