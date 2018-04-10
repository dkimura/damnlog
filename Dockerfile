
FROM node:alpine@sha256:6073dfb3486954809f227caccf26e2af22002b8df13a2889564bee3520ef84bd

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
