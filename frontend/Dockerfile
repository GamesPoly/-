FROM node:20-alpine AS build

WORKDIR /opt/polygames/frontend

COPY package*.json ./

COPY . .

RUN npm run build

EXPOSE 3000