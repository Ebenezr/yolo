FROM node:16.13.0-alpine AS builder

LABEL author="#Ebenezr"

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# Stage 2: Runtime stage
FROM node:16.13.0-alpine

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/. .

COPY .env ./

EXPOSE 5000

CMD ["node", "server.js"]
