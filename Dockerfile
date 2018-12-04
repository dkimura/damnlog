
FROM node:alpine@sha256:03cc96cdb37b8a018f645058dc5a88878cce222607e8633c4ef4e166c634f7dd

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
