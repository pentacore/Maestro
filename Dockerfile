# This file is a template, and might need editing before it works on your project.
FROM node:lts-alpine

ENV COMMAND_PREFIX="-" DISCORD_TOKEN=missing

WORKDIR /usr/src/app

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

COPY . /usr/src/app

RUN npm install
RUN npm build

CMD [ "npm", "start" ]
