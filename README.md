# Wonder Cave

## Installation

`bun install`

## Usage

`bun run dev`

## Testing

Uses Jest for running all `*.spec.tsx?` files

`bun run test`

## Linting

Uses ESLint for TypeScript and Stylelint for CSS

### All

This runs `bun run lint:code`, `bun run lint:style`, and `bun run lint:format`

`bun run lint`

### Typescript

`bun run lint:code`

### CSS

`bun run lint:style`

### Formatting

Formats using prettier

`bun run lint:format`

## Prisma

Uses Prisma for managing the database along with migrations

### Creating a new migration

`bun run prisma:migrate`

### Generating the client

This would be handled when running `bun run prisma:migrate`

`bun run prisma:generate`

### Seeding the database

`bun run prisma:seed`

### Resetting the database

`bun run prisma:reset`

## Data

Use to create a file for testing uploads

### Creating a new CSV file

`bun run data:seed`
