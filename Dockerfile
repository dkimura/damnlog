
FROM node:alpine@sha256:68b61054a9412a67c65957ac65dbd09682955bd28f7a87b4ee5dc9b52fe847d0

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
