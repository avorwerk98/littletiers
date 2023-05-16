FROM node:12.18-alpine
ENV NODE_ENV production

WORKDIR /usr/src/app

COPY package.json package-lock.json* ./
RUN npm install

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY . .

EXPOSE $PORT


CMD ["node", "http_server.js"]
