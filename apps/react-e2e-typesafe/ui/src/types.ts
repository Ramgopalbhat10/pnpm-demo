import type { GetUsersQuery } from "./graphql/generated/types";

export type Message = GetUsersQuery["users"][0]["messages"][0];
export type User = GetUsersQuery["users"][0];
