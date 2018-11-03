
FROM node:alpine@sha256:0a7e772bbdd835ff1e20411d3754507c7174b1790b28da9d5af3db33d31a593d

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
