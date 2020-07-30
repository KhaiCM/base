FROM node:10.16.0

# WORKDIR /var/www/

# set working directory
WORKDIR /opt/app/

COPY . .

# install and cache app dependencies
# COPY package.json /app/package.json
# RUN npm install
# RUN npm install @vue/cli@3.7.0 -g

# start app
# CMD ["npm", "run", "serve"]

ENTRYPOINT ["sh", "./docker-entrypoint.sh"]
