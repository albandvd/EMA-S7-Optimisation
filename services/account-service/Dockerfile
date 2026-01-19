# ---------- BUILD STAGE ----------
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
RUN corepack enable pnpm
COPY package.json pnpm-lock.json* ./
RUN pnpm install

# Copy source
COPY tsconfig.json ./
COPY ./src ./src

# Build TypeScript
RUN pnpm run build


# ---------- RUNTIME STAGE ----------
FROM node:20-alpine

WORKDIR /app

# Only copy what we need to run
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY package.json ./

ENV NODE_ENV=production
EXPOSE 3003

CMD ["node", "dist/index.js"]
