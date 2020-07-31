# build stage
FROM node:13-alpine as build-stage
WORKDIR client/app
COPY . .
RUN npm install
RUN npm run build

# production stage
FROM nginx:1.17-alpine as production-stage
COPY --from=build-stage client/app/dist /usr/share/nginx/html
# EXPOSE 5000
CMD ["nginx", "-g", "daemon off;"]
