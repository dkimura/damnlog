
FROM node:alpine@sha256:9ab5ce470afa268f158f6868616fb70d364adc448daa9ec1936c0fb57acd2ee9

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
