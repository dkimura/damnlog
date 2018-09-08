
FROM node:alpine@sha256:1e7d71edcd8088bd81a828a6ea6d8be6dbf92039bbd9e2ecf2eb76abd295f832

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
