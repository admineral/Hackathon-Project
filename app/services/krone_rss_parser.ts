import { parseStringPromise } from 'xml2js';

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

interface FinalArticle {
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

export async function parseRssData(data: string) {
  console.log('Parsing RSS data...');
  const options = { explicitArray: false, ignoreAttrs: false };
  const result = await parseStringPromise(data, options);
  console.log('RSS data parsed successfully.');

  const items = result.rss.channel.item;
  console.log(`Found ${items.length} items in RSS feed.`);

  const articles: Article[] = [];
  const final_articles: FinalArticle[] = [];

  items.forEach((item: any, index: number) => {
    const pubDate = new Date(item.pubDate);
    const date = pubDate.toISOString().split('T')[0];
    const time = pubDate.toTimeString().split(' ')[0].substring(0, 5); 
    const guidNumber = item.guid?.split('/')?.pop();

    const article: Article = {
      id: index + 1,
      title: item.title,
      link: item.link.trim(), 
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
        description: item['media:content']?.['media:description']?._.trim(), 
        credit: item['media:content']?.['media:credit']?._.trim()
      } : null
    };

    articles.push(article);

    const likes = Math.floor(Math.random() * 200) + 1;
    const comments = Math.floor(Math.random() * Math.max(1, Math.floor(likes * 0.2))) + 1;

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

    final_articles.push(final_article);
  });

  console.log(`Processed ${articles.length} articles.`);
  return { articles, final_articles };
}