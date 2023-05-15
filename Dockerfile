FROM node:12.18-alpine
ENV NODE_ENV production

COPY ["package.json", "pacakge-lock.json"]
RUN npm install
WORKDIR /usr/src/app
ENV PATH = /usr/src/app/node_modules/bin : $PATH

COPY . .
EXPOSE 3000
