
FROM node:alpine@sha256:003a48a2435f4a477f1079dee78e5b2ef7592926bbadf913e20e29d9d141e0a1

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
