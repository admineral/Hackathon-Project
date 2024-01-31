import { NextRequest, NextResponse } from 'next/server';
import { fetchAndParseRssFeed } from '../../services/news_services';

export async function GET(req: NextRequest) {
  try {
    const parsedData = await fetchAndParseRssFeed();
    return NextResponse.json({ message: 'RSS feed successfully parsed and saved.', data: parsedData });
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error:', error);
      return NextResponse.json({ error: error.message });
    } else {
      console.error('Unknown error:', error);
      return NextResponse.json({ error: 'An unknown error occurred' });
    }
  }
}