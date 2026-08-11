FROM node:22-alpine AS base
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm prisma migrate deploy
RUN pnpm prisma generate
RUN pnpm build

EXPOSE 6323
CMD ["pnpm", "start", "--port", "6323"]
