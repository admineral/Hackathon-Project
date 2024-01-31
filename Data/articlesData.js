// Import the JSON data directly
import articlesData from './articles_final_format.json';

// Filter the articles to only include those with IDs from 1 to 20
const filteredArticles = articlesData.filter(article => article.id >= 1 && article.id <= 20);

// Export the filtered articles
export const articles = filteredArticles;

export default articles;