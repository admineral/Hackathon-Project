// pages/api/add.js
import { NextApiRequest, NextApiResponse } from 'next';
import { addData } from '../../../../lib/cosmosdb';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const item = req.body;
      const addedItem = await addData(item);
      res.status(200).json(addedItem);
    } catch (error) {
      res.status(500).json({ error: "Fehler beim Hinzufügen von Daten" });
    }
  } else {
    res.status(405).end(); // Methode nicht erlaubt
  }
}
