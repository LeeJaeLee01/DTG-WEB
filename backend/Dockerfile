FROM node:20-alpine

WORKDIR /dtg-web-be

COPY package.json yarn.lock ./

RUN yarn

COPY . .

EXPOSE 3030

CMD ["yarn", "start"]