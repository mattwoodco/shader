import { PrismaClient } from '@prisma/client'
import { userData } from './users'

const client = new PrismaClient()

async function main() {
  console.log(`
Start seeding the database ...

--------------------------------
  `)

  // With a SQLite database, or any nested documents, Prisma requires documents to be created independently
  for (const data of userData) {
    await client.user.create({ data })
  }
  console.log(`Created ${Object.entries(userData).length} Users`)

  console.log(`
--------------------------------`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await client.$disconnect()
  })
