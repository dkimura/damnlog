
FROM node:alpine@sha256:9a0c2f5f16a4ae7b943d711b6c0238b32fc91bc5503ca8a16a8500bfa18022aa

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
