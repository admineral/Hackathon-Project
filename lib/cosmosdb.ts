import { CosmosClient } from '@azure/cosmos';

const endpoint = process.env.COSMOS_DB_ENDPOINT; // Ihr Cosmos DB Endpoint
const key = process.env.COSMOS_DB_KEY; // Ihr Cosmos DB Schlüssel


if (!endpoint || !key) {
    throw new Error("Die Cosmos DB Umgebungsvariablen sind nicht definiert.");
  }

const client = new CosmosClient({ endpoint, key });


export const database = client.database('IhreDatenbankName');
export const container = database.container('IhrContainerName');
