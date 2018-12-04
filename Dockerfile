
FROM node:alpine@sha256:17a7b4ea86f66ff4f379515d8ccb8f66eb73f3b9b0c76ab29625315b01eb1fcb

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
