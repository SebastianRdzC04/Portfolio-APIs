import {integer, pgTable, varchar, uuid} from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
    id: uuid().primaryKey(),
    email: varchar({length: 255}).unique(),
    password: varchar({length: 255}).notNull()
})