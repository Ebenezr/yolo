FROM node:16.13.0-alpine as builder

LABEL author="#Ebenezr"

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# Stage 2: Runtime stage
FROM node:16.13.0-alpine

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/. .

EXPOSE 5000

CMD ["node", "server.js"]
