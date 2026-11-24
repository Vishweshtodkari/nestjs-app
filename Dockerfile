# development steg

FROM node:24-alpine AS development

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "dev"] 



# production stage

# FROM node:24-alpine AS production

# WORKDIR /app

# COPY package*.json ./

# RUN npm ci --only=production

# COPY --from=development /app/dist ./dist

# CMD ["node", "dist/index.js" ]


FROM node:24-alpine AS production

WORKDIR /app

ENV NODE_ENV=production

COPY package*.json ./

RUN npm ci --only=production

COPY --from=development /app/dist ./dist

CMD ["npm", "run", "start:prod"]