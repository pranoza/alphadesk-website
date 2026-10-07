# Production Dockerfile for Coolify deployment
# Optimized for Next.js App Router (standalone mode)

FROM node:20-alpine AS base
WORKDIR /app
RUN apk add --no-cache libc6-compat

# Step 1: Dependencies installation
FROM base AS deps
COPY package.json package-lock.json* bun.lock* ./
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

# Step 2: Build application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

RUN npm run build

# Step 3: Minimal runtime container
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy public assets & standalone output
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
