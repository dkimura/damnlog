
FROM node:alpine@sha256:8fef1fa754962f317fd77abba875318645652c1eea846fd832f08b8ea7a43395

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
