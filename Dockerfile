
FROM node:alpine@sha256:2d1f09a148aac3b093a9610979721069430864c2cfa98b12a7144861abbb4f54

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
