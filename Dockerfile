
FROM node:alpine@sha256:f8d8eb84ede1830b78d910e241aa0145ccff4a3cd2b573de9c1df00fbad41cee

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
