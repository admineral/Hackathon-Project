import { NextRequest, NextResponse } from 'next/server';
import { NewsService } from '../../services/news_services';
import { format } from 'date-fns'; // Stellen Sie sicher, dass date-fns installiert ist

export async function GET(req: NextRequest) {
  try {
    const parsedData = await NewsService.fetchAndParseRssFeed();
    // Textbasierte Aufbereitung der Artikel
    let articlesText = parsedData.map(article => `
ID: ${article.id}
GUID: ${article.guid}
Title: ${article.title}
Description: ${article.description.length > 100 ? article.description.substring(0, 100) + "..." : article.description}
Author: ${article.author}
Date: ${format(new Date(article.date), 'dd.MM.yyyy HH:mm')}
Comments: ${article.comments}
Likes: ${article.likes}
Link: ${article.link}
Image: ${article.image}
IsAd: ${article.isAd}

`).join('\n');

    // Fügt eine Nachricht am Anfang hinzu
    articlesText = "RSS feed erfolgreich verarbeitet:\n\n" + articlesText;

    return new NextResponse(articlesText, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    });
  } catch (error) {
    console.error('Fehler:', error);
    return NextResponse.json({ error: 'Fehler beim Verarbeiten des RSS-Feeds' }, { status: 500 });
  }
}