import { parseStringPromise } from 'xml2js';

// Define the structure of an article as it appears in the RSS feed
interface Article {
  id: number;
  title: string;
  link: string;
  guid: string | undefined;
  description: string | undefined;
  content: string | undefined;
  date: string;
  time: string;
  creator: string;
  media: {
    url: string | undefined;
    type: string | undefined;
    width: string | undefined;
    height: string | undefined;
    description: string | undefined;
    credit: string | undefined;
  } | null;
}

// Define the structure of the final article after processing
export interface FinalArticle {
  id: number;
  guid: string | undefined;
  title: string;
  description: string;
  author: string;
  date: string;
  comments: number;
  likes: number;
  link: string;
  image: string | null;
  isAd: boolean;
}

// Function to parse RSS data from a string
export async function parseRssData(data: string) {
  // Log the start of the parsing process
  console.log('Parsing RSS data...');
  // Configuration options for xml2js parser
  const options = { explicitArray: false, ignoreAttrs: false };
  // Parse the RSS data string into a JavaScript object
  const result = await parseStringPromise(data, options);
  // Log successful parsing
  console.log('RSS data parsed successfully.');

  // Extract items (articles) from the parsed RSS data
  const items = result.rss.channel.item;
  // Log the number of items found
  console.log(`Found ${items.length} items in RSS feed.`);

  // Initialize arrays to hold articles and final articles
  const articles: Article[] = [];
  const final_articles: FinalArticle[] = [];

  // Iterate over each item in the RSS feed
  items.forEach((item: any, index: number) => {
    // Parse publication date and time
    const pubDate = new Date(item.pubDate);
    const date = pubDate.toISOString().split('T')[0];
    const time = pubDate.toTimeString().split(' ')[0].substring(0, 5); 
    // Extract GUID number from the item's GUID
    const guidNumber = item.guid?.split('/')?.pop();

    // Construct an Article object from the item
    const article: Article = {
      id: index + 1,
      title: item.title,
      link: item.link?.trim() ?? '', 
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
        description: typeof item['media:content']?.['media:description']?._ === 'string' ? item['media:content']?.['media:description']?._.trim() : undefined, 
        credit: typeof item['media:content']?.['media:credit']?._ === 'string' ? item['media:content']?.['media:credit']?._.trim() : undefined
      } : null
    };

    // Add the Article object to the articles array
    articles.push(article);

    // Randomly generate likes and comments for the article
    const likes = Math.floor(Math.random() * 200) + 1;
    const comments = Math.floor(Math.random() * Math.max(1, Math.floor(likes * 0.2))) + 1;

    // Construct a FinalArticle object from the Article object
    const final_article: FinalArticle = {
      id: index + 1,
      guid: guidNumber,
      title: article.title,
      description: article.description ? (article.description.length > 100 ? article.description.substring(0, 100) + '...' : article.description) : '',
      author: article.creator,
      date: `${article.date} ${article.time}`,
      comments: comments,
      likes: likes,
      link: article.link,
      image: article.media?.url || null,
      isAd: false,
    };

    // Add the FinalArticle object to the final_articles array
    final_articles.push(final_article);
  });

  // Log the number of final articles processed
  console.log(`Processed ${final_articles.length} final articles.`);
  return final_articles;
}