# FROM node:18-alpine
FROM node:18-alpine AS builder
# Create app directory
WORKDIR /app
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

COPY prisma ./prisma/

COPY .env ./
# Install app dependencies
RUN npm install

RUN npx prisma generate

# RUN npx prisma db push

COPY . .

RUN npm run build

FROM node:18-alpine

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD [ "npm", "run", "start:prod" ]
