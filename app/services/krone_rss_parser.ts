import { parseStringPromise } from 'xml2js';

export async function parseRssData(data: string) {
  const options = { explicitArray: false, ignoreAttrs: false };
  const result = await parseStringPromise(data, options);
  const items = result.rss.channel.item;

  const articles = [];
  const final_articles = [];

  items.forEach((item: any, index: number) => {
    const pubDate = new Date(item.pubDate);
    const date = pubDate.toISOString().split('T')[0];
    const time = pubDate.toTimeString().split(' ')[0].substring(0, 5); 
    const guidNumber = item.guid?.split('/')?.pop();

    const article = {
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

    const final_article = {
      id: index + 1,
      guid: guidNumber,
      title: article.title,
      description: article.description.length > 100 ? article.description.substring(0, 100) + '...' : article.description,
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

  return { articles, final_articles };
}