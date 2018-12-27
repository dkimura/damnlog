
FROM node:alpine@sha256:4aedc7f434a87cb8be2237e0f26b6639cb20b376c2f6f6949097c8be2898b884

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
