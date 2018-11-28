
FROM node:alpine@sha256:b62cb17c1739f490cb766338057170fc000248f5c9ff6e1ffcbf8bc83878e0ed

ENV CI true

WORKDIR /damnlog

COPY package.json yarn.lock ./
RUN yarn

COPY . /damnlog

CMD ["yarn", "build"]
