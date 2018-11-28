
FROM node:alpine@sha256:6fb75f9947e17826c41a7621cead11eb4ec88df50a26a9ba9b5a4124522958f8

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
