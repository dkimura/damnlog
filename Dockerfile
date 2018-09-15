
FROM node:alpine@sha256:fcab88e96877f3a592be65131ca08d613db8558fefbc3fcc988876fd3b5a447d

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
