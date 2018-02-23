
FROM node:alpine@sha256:3238bae64fb867edec63e54691634aa8768d0ba58b4fe9f6ba58ba409d74c77c

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
