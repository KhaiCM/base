# build stage
FROM node:12.3.1 as build-stage
WORKDIR /app
# RUN cd /client
COPY . .
RUN npm install
CMD ["npm", "run", "dev"]