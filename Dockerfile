
FROM node:alpine@sha256:3450751aaca30f6d49f2e9897763d755ce5faf37f3b11dee2e606e6f37ef468c

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
