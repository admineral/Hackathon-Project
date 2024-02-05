// Adjust the import path as necessary
import { NewsService } from '../app/services/news_services';

// Simple in-memory cache for articles
let cachedArticles = [];

// Function to fetch articles dynamically and cache them
async function fetchAndCacheArticles() {
  try {
    // Attempt to fetch dynamic articles
    const dynamicArticles = await NewsService.fetchAndParseRssFeed();
    // Filter the dynamic articles to only include those with IDs from 1 to 20
    const filteredDynamicArticles = dynamicArticles.filter(article => article.id >= 1 && article.id <= 20);
    // Update cache with the filtered articles
    cachedArticles = filteredDynamicArticles;
    return filteredDynamicArticles;
  } catch (error) {
    console.error('Failed to fetch dynamic articles, using cached data if available:', error);
    // If fetching fails but we have cached articles, return the cached articles
    if (cachedArticles.length > 0) {
      return cachedArticles;
    } else {
      // If there are no cached articles (e.g., this is the first fetch attempt and it failed), throw an error or handle accordingly
      throw new Error('No articles available. Initial fetch failed and no cache is available.');
    }
  }
}

// Export the function to fetch and cache articles
export { fetchAndCacheArticles };