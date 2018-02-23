
FROM node:alpine@sha256:157377a2546160ccac0b01bad43922a419c2a73f394761b854d3a23cf24e46dd

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
