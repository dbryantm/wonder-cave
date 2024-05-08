import { faker } from '@faker-js/faker'
import { PrismaClient } from '@prisma/client'

const db = new PrismaClient()

async function main() {
  for (let i = 0; i < 100; i++) {
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()
    const email = `${firstName}.${lastName}@email.com`.toLowerCase()
    const phone = faker.helpers.fromRegExp('([1-9]{3})-[0-9]{3}-[0-9]{4}')

    await db.contact.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        createdAt: new Date(),
      },
    })
  }
}

main()
  .then(async () => {
    await db.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await db.$disconnect()
    process.exit(1)
  })
