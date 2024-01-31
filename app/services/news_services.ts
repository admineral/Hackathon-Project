import { parseRssFeed } from './krone_services';

export const fetchAndParseRssFeed = async () => {
  await parseRssFeed();
  console.log('RSS feed parsed successfully');
};