import { NextRequest, NextResponse } from 'next/server';
import fetch from 'node-fetch';
import { parseStringPromise } from 'xml2js';
import fs from 'fs';
import path from 'path';

export async function GET(req: NextRequest) {
  const rss_feed_url = "https://api.krone.at/v1/rss/rssfeed-google.xml?id=2311992";

  try {
    const response = await fetch(rss_feed_url);
    if (!response.ok) {
      throw new Error(`Failed to fetch RSS feed. Status: ${response.status}`);
    }
    const data = await response.text();

    const options = { explicitArray: false, ignoreAttrs: false };
    const result = await parseStringPromise(data, options);
    const items = result.rss.channel.item;

    const articles = [];
    const final_articles = [];

    items.forEach((item: any, index: number) => {
      const pubDate = new Date(item.pubDate);
      const date = pubDate.toISOString().split('T')[0];
      const time = pubDate.toTimeString().split(' ')[0].substring(0, 5); // Get only the hours and minutes
      const guidNumber = item.guid?.split('/')?.pop();

      const article = {
        id: index + 1,
        title: item.title,
        link: item.link.trim(), // Remove leading and trailing whitespace
        guid: guidNumber,
        description: item.description?.replace("<p>", "").replace("</p>", ""),
        content: item['content:encoded']?.replace("<p>", "").replace("</p>", ""),
        date,
        time,
        creator: item['dc:creator'] || 'Krone',
        media: item['media:content'] ? {
          url: item['media:content']?.$?.url,
          type: item['media:content']?.$?.type,
          width: item['media:content']?.$?.width,
          height: item['media:content']?.$?.height,
          description: item['media:content']?.['media:description']?._.trim(), // Remove leading and trailing whitespace
          credit: item['media:content']?.['media:credit']?._.trim() // Remove leading and trailing whitespace
        } : null
      };

      articles.push(article);

      const likes = Math.floor(Math.random() * 200) + 1;
      const comments = Math.floor(Math.random() * Math.max(1, Math.floor(likes * 0.2))) + 1;

      const final_article = {
        id: index + 1,
        guid: guidNumber,
        title: article.title,
        description: article.description.length > 100 ? article.description.substring(0, 100) + '...' : article.description,
        author: article.creator,
        date: `${article.date} ${article.time}`,
        comments: comments,
        likes: likes,
        link: article.link,
        image: article.media?.url || null,
        isAd: false,
      };

      final_articles.push(final_article);
    });

    // Save the articles to a JSON file
    const filePath = path.join(process.cwd(), 'Data', 'articles.json');
    fs.writeFileSync(filePath, JSON.stringify(articles, null, 2));

    // Save the final articles to a JSON file
    const finalFilePath = path.join(process.cwd(), 'Data', 'articles_final_format.json');
    fs.writeFileSync(finalFilePath, JSON.stringify(final_articles, null, 2));

    return NextResponse.json({ message: "RSS feed successfully parsed and saved to articles.json and articles_final_format.json" });
  } catch (error) {
    // Error handling with detailed logging
    if (error instanceof Error) {
      console.error('Error:', error);
      return NextResponse.json({ error: error.message });
    } else {
      console.error('Unknown error:', error);
      return NextResponse.json({ error: 'An unknown error occurred' });
    }
  }
}