
FROM node:alpine@sha256:0a45154d826499738c3643327a0620b01d3fcd138acc78e3eabf9676be86772a

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
