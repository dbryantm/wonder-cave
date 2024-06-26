import fs from 'fs'
import path from 'path'
import { format } from 'fast-csv'
import { v4 } from 'uuid'
import { faker } from '@faker-js/faker'

interface ContactRow {
  uuid: string
  firstName: string
  lastName: string
  email: string
  phone: string
}

interface Contact {
  uuid: string
  firstName: string
  lastName: string
  email: string
  phone: string
  createdAt: Date
}

const csv = format<ContactRow, Contact>({ headers: true })
const stream = fs.createWriteStream(path.resolve(__dirname, `${Date.now()}.csv`))

csv.pipe(stream).on('end', () => process.exit())

for (let i = 0; i < 10; i++) {
  const uuid = v4()
  const firstName = faker.person.firstName()
  const lastName = faker.person.lastName()
  const email = `${firstName}.${lastName}@email.com`.toLowerCase()
  const phone = faker.helpers.fromRegExp('[1-9]{3}-[0-9]{3}-[0-9]{4}')

  csv.write({
    uuid,
    firstName,
    lastName,
    email,
    phone,
  })
}

csv.end()
