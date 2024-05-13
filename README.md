# Wonder Cave

## Requirements

### Bun

You can find instructions for how to install bun [here](https://bun.sh/docs/installation).

If you don't want to install it separately from npm then just run `npm install bun`.

## Setup

Once you have all requirements met you can run.

`bun install`

First, lets copy the `.env` file from `.env.example`.

`cp .env.example .env`

Next you will need to create the database.

`bun run prisma:migrate`

That should have also seeded data for you which you can view using either the CLI or GUI at `prisma/dev.db`. If you need to reset the database for any reason then you can use the following.

`bun run prisma:reset`

For generating an example CSV file using the unix time as the file's name (i.e. `/examples/1715610416489.csv`).

`bun run example:seed`

Now you're ready for prime time. So lets build the app.

`bun run build`

Finally, we're at the last step.

`bun run start`

You'll now be able to view the app at [http://localhost:8000](http://localhost:8000).

## Scripts

### Development

`bun run dev`

### Testing

Uses Jest for running all `*.spec.tsx?` files

`bun run test`

### Linting

Uses ESLint for TypeScript and Stylelint for CSS

#### All

This runs `bun run lint:code`, `bun run lint:style`, and `bun run lint:format`

`bun run lint`

#### Typescript

`bun run lint:code`

#### CSS

`bun run lint:style`

#### Formatting

Formats using prettier

`bun run lint:format`

### Prisma

Uses Prisma for managing the database along with migrations

#### Creating a new migration

`bun run prisma:migrate`

#### Generating the client

This would be handled when running `bun run prisma:migrate`

`bun run prisma:generate`

#### Seeding the database

`bun run prisma:seed`

#### Resetting the database

`bun run prisma:reset`

### Examples

Use to create a file for testing uploads

#### Creating a new CSV file

`bun run example:seed`
