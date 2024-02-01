import { parseRssFeed } from './krone_services';

export class NewsService {
  static async fetchAndParseRssFeed() {
    try {
      const articles = await parseRssFeed();
      console.log('parsed successfully');
      return articles; // Ensure that articles are returned here
    } catch (error) {
      console.error('Error parsing RSS:', error);
      throw error; // Rethrow the error to be handled by the caller
    }
  }
}