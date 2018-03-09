
FROM node:alpine@sha256:551f3d5b0d41d09a4e68a2200332bebf00367090fb21d999bad95b97611aab83

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
