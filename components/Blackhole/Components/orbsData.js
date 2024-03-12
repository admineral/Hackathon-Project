import chroma from 'chroma-js';

// Create a color scale
const colorScale = chroma.scale(['lightcyan', 'blue', 'darkblue']);

// Define the size for each orbit
const ORBIT_SIZES = [
  { min: 15, max: 16 },
  { min: 5, max: 40 },
  { min: 1, max: 30 }
];

// Define the relevance range for each orbit
const ORBIT_RELEVANCE_RANGES = [
  { min: 0, max: 100 },
  { min: 51, max: 300 },
  { min: 101, max: 300 }
];

// Define the orbits
const orbits = [110, 250, 480];

// Function to calculate the relevance score
function calculateRelevance(article) {
  const likesWeight = 2;
  const commentsWeight = 1;
  return likesWeight * article.likes + commentsWeight * article.comments;
}

// Function to map a relevance score to a size within a given range
function mapRelevanceToSize(relevance, sizeRange) {
  const normalizedRelevance = (relevance - ORBIT_RELEVANCE_RANGES[0].min) / (ORBIT_RELEVANCE_RANGES[2].max - ORBIT_RELEVANCE_RANGES[0].min);
  return sizeRange.min + normalizedRelevance * (sizeRange.max - sizeRange.min);
}

// Function to map articles to orbs, now including unique IDs
function mapArticlesToOrbs(articles) {
  const orbsData = [[], [], []];
  let idCounter = 0; // Initialize a counter for assigning unique IDs

  articles.forEach(article => {
    const relevance = calculateRelevance(article);
    let orbitIndex;

    if (relevance <= ORBIT_RELEVANCE_RANGES[0].max) {
      orbitIndex = 0;
    } else if (relevance <= ORBIT_RELEVANCE_RANGES[1].max) {
      orbitIndex = 1;
    } else {
      orbitIndex = 2;
    }

    const size = mapRelevanceToSize(relevance, ORBIT_SIZES[orbitIndex]);

    const orb = {
      id: idCounter++, // Assign a unique ID to each orb
      size: size,
      headline: article.title,
      text: article.description,
      image: article.image,
      comments: article.comments,
      likes: article.likes,
      isAd: article.isAd,
      color: colorScale(size / 100).hex(),
      link: article.link,
    };

    orbsData[orbitIndex].push(orb);
  });

  return orbsData;
}

export { mapArticlesToOrbs, orbits };