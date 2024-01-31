import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import { parseRssData } from './krone_rss_parser';

export async function parseRssFeed() {
  const response = await fetch('http://localhost:3000/api/get_krone_rss');
  const { data } = await response.json();

  const { articles, final_articles } = await parseRssData(data);

  const filePath = path.join(process.cwd(), 'Data', 'articles.json');
  fs.writeFileSync(filePath, JSON.stringify(articles, null, 2));

  const finalFilePath = path.join(process.cwd(), 'Data', 'articles_final_format.json');
  fs.writeFileSync(finalFilePath, JSON.stringify(final_articles, null, 2));
}