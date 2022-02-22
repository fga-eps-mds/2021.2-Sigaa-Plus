FROM node:lts-alpine

WORKDIR /myapp
COPY package*.json ./
RUN npm install
COPY ./ ./

EXPOSE 80

CMD ["npm", "run"]