FROM node:15-alpine AS build

WORKDIR /app

ARG api
ENV VITE_API_URL $api

COPY index.html package.json package-lock.json tsconfig.json vite.config.ts ./
COPY src/ ./src

RUN npm ci
RUN npm run build

FROM nginx:1-alpine

WORKDIR /usr/share/nginx/html

COPY --from=build /app/dist ./
