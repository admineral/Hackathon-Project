// app/api/auth/[...nextauth]/route.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { CosmosClient } from '@azure/cosmos';



  const endpoint ='https://kronews.documents.azure.com:443/';
  const key = 'ocO7hJUhL93oyoXsd0EZQ5IecRsQ0TaJ0zcYhJRt6h7H4axwDrBzrlpXxrN5wFr7ifs9WO5r8yJGACDbAM2MUQ==';
  const client = new CosmosClient({ endpoint, key });

  const databaseId = "CopilotSampleDb";
  const containerId = "SampleContainer";
  
  const database = client.database(databaseId);
  const container = database.container(containerId);
  
  export default async function handler(req: NextApiRequest, res: NextApiResponse){
    // Logik basierend auf der Anfragemethode
    switch (req.method) {
        case 'GET':
            try {
              const { resources: items } = await container.items.query("SELECT * from c").fetchAll();
              res.status(200).json(items);
            } catch (error) {
              res.status(500).json({ error: (error as Error).message });
            }
            break;
          
            case 'POST':
                try {
                  const { resource: createdItem } = await container.items.create(req.body);
                  res.status(201).json(createdItem);
                } catch (error) {
                  res.status(500).json({ error: (error as Error).message });
                }
                break;
              
                case 'PUT':
                    try {
                      const { id } = req.query;
                      if (typeof id !== 'string') {
                        res.status(400).json({ error: 'Missing "id" query parameter' });
                        return;
                      }
                      const { resource: updatedItem } = await container.item(id).replace(req.body);
                      res.status(200).json(updatedItem);
                    } catch (error) {
                      res.status(500).json({ error: (error as Error).message });
                    }
                    break;
                  
                    case 'DELETE':
                        try {
                          const { id } = req.query;
                          if(typeof id !== 'string') {
                            res.status(400).json({ error: 'Missing "id" query parameter' });
                            return;
                          }
                          await container.item(id).delete();
                          res.status(204).end();
                        } catch (error) {
                          res.status(500).json({ error: (error as Error).message });
                        }
                        break;
                      
      default:
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}