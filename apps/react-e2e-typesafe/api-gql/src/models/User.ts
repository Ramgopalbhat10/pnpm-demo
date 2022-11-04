import { builder } from "../builder";
import { prisma } from "../db";

builder.prismaObject("User", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    messages: t.relation("messages"),
  }),
});

builder.queryField("users", (t) =>
  t.prismaField({
    type: ["User"],
    resolve: async (query, root, args, ctx, info) => {
      return prisma.user.findMany({ ...query });
    },
  })
);

builder.mutationType({
  fields: (t) => ({
    updateUser: t.prismaField({
      type: "User",
      args: {
        id: t.arg.int({ required: true }),
        name: t.arg.string({ required: true }),
      },
      resolve: async (query, root, args, ctx, info) => {
        let user = await prisma.user.findUnique({ where: { id: args.id } });
        if (!user) {
          throw new Error(`No user found for id: ${args.id}`);
        }
        user.name = args.name;
        const updatedUser = await prisma.user.update({
          where: { id: args.id },
          data: {
            ...user,
          },
        });
        return updatedUser;
      },
    }),
  }),
});
