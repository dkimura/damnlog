
FROM node:alpine@sha256:1e3e3e7ffc965511c5d4f4e90ec5d9cabee95b5b1fbcd49eb6a2289f425cf183

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
