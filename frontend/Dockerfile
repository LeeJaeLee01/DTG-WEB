FROM node:20-alpine

WORKDIR /dtg-web-fe

COPY package.json yarn.lock ./

RUN yarn

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]