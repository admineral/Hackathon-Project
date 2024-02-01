import fetch from 'node-fetch';
import { parseRssData, FinalArticle } from './krone_rss_parser';

// Typdefinition für die Struktur der gecachten Daten
interface CachedData {
  final_articles: FinalArticle[];
}

// Einfacher In-Memory-Cache
let cachedData: CachedData | null = null;
let cacheTime: Date | null = null;

// Definieren des Rückgabetyps der Funktion
export async function parseRssFeed(): Promise<FinalArticle[]> {
  const cacheDuration = 60 * 1000; // 60 Sekunden
  const now = new Date();

  // Überprüfen, ob die gecachten Daten noch frisch sind
  if (cachedData && cacheTime && now.getTime() - cacheTime.getTime() < cacheDuration) {
    console.log('Verwende gecachte Daten');
    return cachedData.final_articles;
  }

  console.log('Lade neue RSS-Daten...');
  const rssFeedUrl = 'https://api.krone.at/v1/rss/rssfeed-google.xml?id=2311992';
  const response = await fetch(rssFeedUrl);

  if (!response.ok) {
    throw new Error(`Fehler beim Laden des RSS-Feeds. Status: ${response.status}`);
  }

  const data = await response.text();
  // Stellen Sie sicher, dass parseRssData korrekt typisiert ist, um hier Typsicherheit zu gewährleisten
  const parsedData: CachedData = await parseRssData(data);

  // Cache aktualisieren
  cachedData = { final_articles: parsedData.final_articles };
  cacheTime = now;

  console.log('RSS-Feed erfolgreich geladen und verarbeitet.');
  return parsedData.final_articles;
}