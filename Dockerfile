
FROM node:alpine@sha256:6237505f9305b000db8248b88b8c527d0403a5d0ab4ec05aacf3e9bf1e856088

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
