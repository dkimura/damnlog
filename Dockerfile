
FROM node:alpine@sha256:2ab7623dd6ba40a13b17db6f5fda14bac8ab95bb564fd8105266f1cc7550f17d

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
