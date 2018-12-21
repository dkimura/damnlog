
FROM node:alpine@sha256:49028b628012b5e35479d1f714ae3a6200eab9a8a7b8f3e95159183dbc14910a

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
