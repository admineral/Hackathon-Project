import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs/promises'; // Use the promise-based version of fs
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Construct the path to the JSON file
    const filePath = path.join(process.cwd(), 'public', 'Data', 'articles_final_format.json');
    
    // Read the JSON file
    const jsonData = await fs.readFile(filePath, 'utf8');
    const articles = JSON.parse(jsonData);

    // Extract the part of the URL path that specifies the operation, e.g., "first20"
    const params = req.query.params as string[];
    
    // Based on the operation, modify the response
    if (params.includes('first20')) {
      // Return the first 20 articles
      const first20Articles = articles.slice(0, 20);
      res.status(200).json(first20Articles);
    } else {
      // If no specific operation is requested, return all articles
      res.status(200).json(articles);
    }
  } catch (error) {
    console.error('Error reading the JSON file:', error);
    res.status(500).json({ error: 'Failed to read the JSON file' });
  }
}