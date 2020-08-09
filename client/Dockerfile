FROM node:12.3.1

WORKDIR /app

RUN npm install -g vue-cli

COPY package.json .

COPY . .

RUN npm install

CMD ["npm", "start"]
