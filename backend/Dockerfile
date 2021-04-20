FROM node:15-alpine AS build

WORKDIR /app

COPY package.json package-lock.json schema.prisma tsconfig.json tsconfig.build.json ./
COPY src/ ./src

RUN npm ci
RUN npm run build

FROM node:15-alpine

WORKDIR /app

COPY package.json package-lock.json schema.prisma ./
COPY --from=build /app/dist ./dist
COPY src/ ./src
COPY migrations/ ./migrations

RUN npm ci --production

CMD npx prisma migrate deploy && npm run serve
