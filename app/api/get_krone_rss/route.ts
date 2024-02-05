import { NextRequest, NextResponse } from 'next/server';

/**
 * Handles GET requests to fetch the Krone RSS feed using Next.js's extended fetch capabilities.
 * @param {NextRequest} req - The incoming request object.
 * @returns {NextResponse} - The response object with the fetched data or error message.
 */
export async function GET(req: NextRequest) {
  console.log('[API Route] Received request to fetch Krone RSS feed.');

  // URL of the Krone RSS feed
  const rss_feed_url = "https://api.krone.at/v1/rss/rssfeed-google.xml?id=2311992";
  console.log(`[API Route] Fetching RSS feed from URL: ${rss_feed_url}`);

  const startTime = Date.now(); // Start timing

  try {
    // Attempt to fetch the RSS feed with Next.js's extended fetch
    const response = await fetch(rss_feed_url, {
      next: { revalidate: 60 } // Revalidate every 60 seconds
    });
    const endTime = Date.now(); // End timing
    const duration = endTime - startTime; // Calculate duration

    console.log('[API Route] Fetch request sent. Duration:', duration, 'ms');

    // Infer if the response might be from cache based on the duration
    if (duration < 100) { // Example threshold, adjust based on your observations
      console.log('[API Route] Response likely from cache.');
    } else {
      console.log('[API Route] Response likely freshly fetched.');
    }

    if (!response.ok) {
      console.error(`[API Route] Failed to fetch RSS feed. Status: ${response.status}`);
      throw new Error(`Failed to fetch RSS feed. Status: ${response.status}`);
    }

    // Parse the response body as text
    const data = await response.text();
    console.log('[API Route] RSS feed successfully fetched and parsed.');

    // Return the fetched data as JSON
    console.log('[API Route] Sending fetched data back to the client.');
    return NextResponse.json({ data });
  } catch (error) {
    if (error instanceof Error) {
      console.error('[API Route] Error fetching RSS feed:', error.message);
      return NextResponse.json({ error: error.message });
    } else {
      console.error('[API Route] Unknown error occurred while fetching RSS feed:', error);
      return NextResponse.json({ error: 'An unknown error occurred' });
    }
  }
}