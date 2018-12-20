
FROM node:alpine@sha256:2d5e73ce0c55c7737ae6dadca05a66e74e89c5664a8c48a833974b680b4fb361

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
