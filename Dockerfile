# Stage 1: Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Enable pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Install dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy project source
COPY . .

# Build Nuxt production application
ENV NODE_ENV=production
RUN pnpm build

# Stage 2: Production runner
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

# Copy only built output and package.json
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

USER node

CMD ["node", ".output/server/index.mjs"]
