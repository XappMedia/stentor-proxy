FROM node:boron

ARG domain=https://dev-east-api.xapp.media

ENV STENTOR_DOMAIN=$domain

WORKDIR /urs/src/app

COPY package.json .

RUN npm install --production

COPY . .

EXPOSE 9300

CMD [ "npm", "start" ]