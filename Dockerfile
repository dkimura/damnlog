
FROM node:alpine@sha256:cdaf178473c5af359615089a7c914570080f0d649ca1fc5b288710f2f710e7fb

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
