/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';

export type TPokemon = {
  _id?: string;
  name?: string;
};

export const userRouter = createTRPCRouter({
  getUsers: publicProcedure.query(async ({ ctx, input }) => {
    const users = await ctx.prisma.user.findMany({});
    return users;
  }),
});
