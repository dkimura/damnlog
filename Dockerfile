
FROM node:alpine@sha256:c8fd570bbd77f2ec988f3814627091bd06c66d5269597705bbe14f6f5e2f6290

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
