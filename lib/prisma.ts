/**
 * This file is responsible for setting up and exporting a PrismaClient instance.
 * PrismaClient is used to interact with the database using Prisma.
 */

// Import PrismaClient from the Prisma client package
import { PrismaClient } from "@prisma/client";

// Declare a global variable 'prisma' which can be either an instance of PrismaClient or undefined
declare global {
  var prisma: PrismaClient | undefined;
}

// If 'prisma' is already defined in the global scope, use it. Otherwise, create a new PrismaClient instance
const prisma = global.prisma || new PrismaClient();

// If the current environment is development, assign the 'prisma' instance to the global scope
// This is done to prevent multiple instances of PrismaClient in development, which can lead to too many database connections
if (process.env.NODE_ENV === "development") global.prisma = prisma;

// Export the 'prisma' instance for use in other files
export default prisma;