import { faker } from '@faker-js/faker'
import { PrismaClient } from '@prisma/client'
import { v4 } from 'uuid'

const db = new PrismaClient()

async function main() {
  for (let i = 0; i < 100; i++) {
    const uuid = v4()
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()
    const email = `${firstName}.${lastName}@email.com`.toLowerCase()
    const phone = faker.helpers.fromRegExp('[1-9]{3}-[0-9]{3}-[0-9]{4}')
    const photo = `https://i.pravatar.cc/300?id=${uuid}`
    const createdAt = new Date()

    await db.contact.create({
      data: {
        uuid,
        firstName,
        lastName,
        email,
        phone,
        photo,
        createdAt,
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
