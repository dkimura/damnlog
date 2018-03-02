
FROM node:alpine@sha256:ade71de65f02490f349cbecfd7218a56386971141f4673e6f99eb8ff7f343e8c

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
