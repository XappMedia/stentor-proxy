FROM node:boron

WORKDIR /urs/src/app

COPY package.json .

RUN npm install --production

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]