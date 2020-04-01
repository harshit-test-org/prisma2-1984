import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: ["query"],
});

async function main() {
  const data = await prisma.tag.findMany({
    where: {
      stories: {
        some: {
          id: "something",
        },
      },
    },
  });
  // const data = await prisma.story
  // .findOne({ where: { id: "ck8h8034k0000n2yckz3giy2y" } })
  // .tags();
  console.log(data);
}

main();
