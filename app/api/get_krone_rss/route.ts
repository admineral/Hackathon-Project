import { NextRequest, NextResponse } from 'next/server';
import fetch from 'node-fetch';

export async function GET(req: NextRequest) {
  const rss_feed_url = "https://api.krone.at/v1/rss/rssfeed-google.xml?id=2311992";

  try {
    const response = await fetch(rss_feed_url);
    if (!response.ok) {
      throw new Error(`Failed to fetch RSS feed. Status: ${response.status}`);
    }
    const data = await response.text();
    return NextResponse.json({ data });
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