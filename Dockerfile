FROM node:16.14.0-alpine

RUN mkdir -p /usr/src/bot && apk update && apk add git
WORKDIR /usr/src/bot

COPY package.json /usr/src/bot
RUN npm install

COPY . /usr/src/bot
RUN ln -snf /usr/share/zoneinfo/Europe/Paris /etc/localtime && echo Europe/Paris > /etc/timezone

CMD ["npm", "start"] 