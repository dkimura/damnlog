
FROM node:alpine@sha256:35f23456adabb78bcf46972466e62b0d9629caad468b290a157b3f952c274c4c

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
