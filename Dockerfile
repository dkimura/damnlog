
FROM node:alpine@sha256:6349b332f87fcdce541a5ce1e354d14dad54cb00833e547f5c31de6e6c783a91

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
