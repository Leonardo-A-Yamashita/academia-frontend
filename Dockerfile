# Etapa 1: Build
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: Produção
FROM nginx:alpine
COPY --from=builder /app/dist/sistema-academia /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]