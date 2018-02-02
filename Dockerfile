
FROM node:alpine@sha256:bda0e2513f077b9b3898c504f5ef5c2b4357f631cc05c5882d5935496a01df2a

ENV CI true

WORKDIR /react-static-base

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . /react-static-base

CMD ["yarn", "build"]
