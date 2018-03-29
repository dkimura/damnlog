
FROM node:alpine@sha256:d3780f5d4e49743e448f037c75b533123c3f96eb51750fc83c3e59b791a1cabf

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
