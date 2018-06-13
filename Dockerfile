
FROM node:alpine@sha256:0a6a9171522c8ef27f0bf0a2932a81f57c48889ba6091c55f43e9e6593e15598

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
