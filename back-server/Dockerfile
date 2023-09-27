FROM node:16.20.0-bullseye
WORKDIR /app
COPY ./package.json ./package-lock.json ./
RUN npm ci
COPY . .
ENV NODE_ENV=http
CMD ["node", "index.js"]

## docker build -t magic_poker_backend .
## docker run -p 37002:3000 -d -e NODE_ENV=https --restart=always --name magic_poker_backend_141 magic_poker_backend

