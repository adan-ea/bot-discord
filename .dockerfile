FROM node:16.14.0-alpine

RUN mkdir -p /usr/src/adroid_ea
WORKDIR /usr/src/adroid_ea

COPY package.json /usr/src/adroid_ea
RUN npm install

COPY . /usr/src/adroid_ea
RUN ln -snf /usr/share/zoneinfo/Europe/Paris /etc/localtime && echo Europe/Paris > /etc/timezone

CMD ["npm", "start"] 