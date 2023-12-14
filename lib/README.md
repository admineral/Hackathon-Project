# Project Utilities

This project contains several utility files that are used throughout the application.

## lib/prisma.ts

This file is responsible for setting up and exporting a PrismaClient instance. PrismaClient is used to interact with the database using Prisma. It ensures that only one instance of PrismaClient is created during development to avoid creating too many database connections.



## lib/utils.ts

This file contains various utility functions used throughout the application, including functions for merging class names, calculating time elapsed since a given timestamp, fetching data from a URL, formatting numbers, capitalizing strings, and truncating strings.
