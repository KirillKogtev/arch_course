FROM node:14-alpine3.10

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 8000

ENTRYPOINT [ "yarn", "start:prod" ]