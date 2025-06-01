This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app@latest`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Create the project :

```bash

npx create-next-app@latest
npm install prisma @prisma/client
npx prisma init

# setting the database connection in .env file.
# add prisma file.

npx prisma generate
npx prisma migrate dev --name init

# add data from query file (add each table data seperately)
# after finish all those steps, the project with database structure and database connection are all done.
```
Test Update Channel
