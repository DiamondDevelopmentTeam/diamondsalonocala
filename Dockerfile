FROM node:22-alpine AS build
WORKDIR /app

COPY package*.json ./
COPY client/package*.json ./client/
COPY server/package*.json ./server/
RUN npm install

COPY . .
RUN VITE_BASE_PATH=/ VITE_ENABLE_SAME_ORIGIN_API=true npm run build

FROM node:22-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production

COPY package*.json ./
COPY client/package*.json ./client/
COPY server/package*.json ./server/
RUN npm install --omit=dev

COPY --from=build /app/client/dist ./client/dist
COPY --from=build /app/server/dist ./server/dist
COPY server/data ./server/data

EXPOSE 4000
CMD ["node", "server/dist/index.js"]
