import { parseRssData, FinalArticle } from './krone_rss_parser';

/**
 * Fetches the RSS feed through an API route and processes the data.
 * @returns A Promise that resolves to an array of FinalArticle objects.
 */
export async function parseRssFeed(): Promise<FinalArticle[]> {
  // Log the start of the fetch operation for the RSS feed from the API route
  console.log('[Service] Starting to fetch the RSS feed from the API route...');

  // Define the URL of the API route from which the RSS feed will be fetched
  const apiRouteUrl = '/api/get_krone_rss';
  
  // Perform the fetch operation to get the RSS feed data
  const response = await fetch(apiRouteUrl);
  // Check if the fetch operation was successful (response status is OK)
  if (!response.ok) {
    // If the fetch operation was not successful, throw an error with the response status
    throw new Error(`[Service] Error fetching the RSS feed from the API route. Status: ${response.status}`);
  }
  // Parse the response body as JSON and extract the data property
  const { data } = await response.json();
  // Log that the data has been successfully fetched from the API route and processing will begin
  console.log('[Service] Data successfully fetched from the API route. Starting processing...');

  // Parse the fetched data into an array of FinalArticle objects using the parseRssData function
  const parsedData: FinalArticle[] = await parseRssData(data);
  // Log the successful retrieval and processing of the RSS feed from the API route
  console.log('[Service] RSS feed successfully fetched and processed from the API route.');

  // Return the array of processed FinalArticle objects
  return parsedData;
}