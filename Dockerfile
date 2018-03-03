
FROM node:alpine@sha256:82d02395c9a7160175635314b5a0fa05bf3dcd279845d291f8383b662fc9c832

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
