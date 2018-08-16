
FROM node:alpine@sha256:e9a83aa3e7ea576b93a21195f2e318ef8075ceccbebaa8f6c333294e9aa51dbd

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
