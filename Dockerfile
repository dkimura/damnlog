
FROM node:alpine@sha256:4ffa4819d02ce9e018187ad2737d3f0225ed7d9f544225b45ec554295984db63

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
