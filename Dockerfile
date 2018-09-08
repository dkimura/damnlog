
FROM node:alpine@sha256:1aa0ad7e97e8ef3251f9cfd62cd5f195be1348e5f8934e7aa8e778c60a564324

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
