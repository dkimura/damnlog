
FROM node:alpine@sha256:557d7da13de4cf16b543a764305a2630f8598179ca403d3814fae6e16f63b197

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
