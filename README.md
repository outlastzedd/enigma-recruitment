This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Create the project :

First, run the development server:

```bash
npx create-next-app@latest
npm install prisma @prisma/client
npx prisma init

# add prisma file 

npx prisma generate
npx prisma migrate dev --name init

# add data from query file
```
