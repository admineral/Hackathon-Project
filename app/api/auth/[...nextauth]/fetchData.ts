import { NextApiRequest, NextApiResponse } from 'next';
import { fetchData } from '../../../../lib/cosmosdb';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const query = "SELECT * from c"; // Ersetzen Sie dies durch Ihre spezifische Query
      const items = await fetchData(query);
      res.status(200).json(items);
    } catch (error) {
      res.status(500).json({ error: "Fehler beim Abrufen von Daten" });
    }
  } else {
    res.status(405).end(); // Methode nicht erlaubt
  }
}
