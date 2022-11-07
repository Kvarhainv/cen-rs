ARG NODE_IMAGE=node:18.12.0-alpine3.15

FROM $NODE_IMAGE AS base

COPY package*.json ./

WORKDIR /app


RUN npm install

COPY . .

CMD [ "npm", "start" ]

FROM base AS development
ENV NODE_ENV=development
ENV HOST=0.0.0.0
COPY --chown=node:node ./package*.json ./
RUN npm ci 
EXPOSE 2512
CMD [ "npm", "run", "dev" ]