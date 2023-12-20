import { CosmosClient, ItemDefinition } from '@azure/cosmos';

const endpoint = 'https://kronews.documents.azure.com:443/' // Ihr Cosmos DB Endpoint
const key = 'ocO7hJUhL93oyoXsd0EZQ5IecRsQ0TaJ0zcYhJRt6h7H4axwDrBzrlpXxrN5wFr7ifs9WO5r8yJGACDbAM2MUQ=='


if (!endpoint || !key) {
    throw new Error("Die Cosmos DB Umgebungsvariablen sind nicht definiert.");
  }

const client = new CosmosClient({ endpoint, key });


export const database = client.database('IhreDatenbankName');
export const container = database.container('IhrContainerName');


interface MyItem {
  id: string;
  name: string;
  followers: number;
 
}

export async function addData(item: MyItem) {
  try {
      const { resource } = await container.items.create(item);
      return resource;
  } catch (error) {
      console.error("Error adding data to Cosmos DB", error);
      throw error;
  }
}

export async function fetchData(query: string) {
  try {
    const { resources } = await container.items.query(query).fetchAll();
    return resources;
} catch (error) {
    console.error("Error fetching data from Cosmos DB", error);
    throw error;
}
}

export async function updateFollowers(userId: string, newFollowerCount: number) {
  try {
    // Verwenden Sie hier den Typ MyItem
    const { resource: existingItem } = await container.item(userId).read<MyItem>();

    if (existingItem) {
      existingItem.followers = newFollowerCount; // TypeScript weiß jetzt, dass existingItem ein MyItem ist
      const { resource: updatedItem } = await container.item(userId).replace(existingItem);
      return updatedItem;
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    console.error("Error updating followers in Cosmos DB", error);
    throw error;
  }
}
