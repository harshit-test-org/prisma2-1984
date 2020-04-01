# Introduction

This repository contains reproduction for issue : https://github.com/prisma/prisma2/issues/1984

## To reproduce

1. Clone this repository and install the dependecies
2. Place your postgres credentials in .env file inside prisma folder
3. Run `prisma migrate save --experimental` and `prisma migrate up --experimental`
4. Now open studio using `prisma studio --experimental` and enter story and one tag which are linked to each other. Note the id of them
5. Open index.ts and replace the ids appropiately according the to query
6. Run the first query using `npx ts-node index.ts` and observer the SQL generated
7. Run the second query using the same command and observe the SQL generated
