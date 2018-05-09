
FROM node:alpine@sha256:3b0e27010a4b643cc67154381f0f8df74d9aa0d048222f0442428faefa248372

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
